import React, { useEffect, useRef } from 'react'
import Phaser from 'phaser'
import animationsData from '@assets/animations/chair-animations.json'

interface AnimData {
  state: string
  file: string
  prefix: string
  offsets: [number, number]
  loopLastFrames?: number
}

interface CharacterData {
  name: string
  animations: AnimData[]
}

interface ChairCharacterProps {
  character?: string
}

export const ChairCharacter: React.FC<ChairCharacterProps> = ({ character = 'bf' }) => {
  const gameRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!gameRef.current) return

    const config: Phaser.Types.Core.GameConfig = {
      type: Phaser.AUTO,
      transparent: true,
      scale: {
        mode: Phaser.Scale.FIT,
        parent: gameRef.current,
        width: 600,
        height: 650,
        autoRound: true
      },
      scene: {
        preload: preload,
        create: create
      }
    }

    const game = new Phaser.Game(config)
    let sprite: Phaser.GameObjects.Sprite

    /**
     * Search the character data in the array
     */
    const charData = (animationsData as CharacterData[]).find(c => c.name === character)

    function preload(this: Phaser.Scene) {
      if (!charData) return
      
      charData.animations.forEach(anim => {
        const imgUrl = `/src/assets/animations/${character}/${anim.file}.png`
        const xmlUrl = `/src/assets/animations/${character}/${anim.file}.xml`
        
        this.load.atlasXML(`${character}-${anim.state}`, imgUrl, xmlUrl)
      })
    }

    function create(this: Phaser.Scene) {
      if (!charData) return

      const offsetsMap: Record<string, { x: number, y: number }> = {}

      let idleFirstFrame = ''

      charData.animations.forEach(anim => {
         const key = `${character}-${anim.state}`
         
         const texture = this.textures.get(key)
         if (!texture || texture.key === '__MISSING') return

         const allFrames = texture.getFrameNames().filter(f => f !== '__BASE')
         const frameNames = allFrames.filter(f => f.startsWith(anim.prefix))
         
         if (frameNames.length === 0) {
           console.warn(`No atlas frames found for prefix "${anim.prefix}" in ${key}`)
           return
         }

         frameNames.sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))

         if (anim.state === 'idle') {
           idleFirstFrame = frameNames[0]
         }

         const animKey = `${key}-anim`
         
         let mainFrames = frameNames
         if (anim.loopLastFrames && anim.loopLastFrames > 0 && frameNames.length >= anim.loopLastFrames) {
           const loopKey = `${animKey}-loop`
           const loopFrames = frameNames.slice(-anim.loopLastFrames)
           mainFrames = frameNames.slice(0, -anim.loopLastFrames)
           this.anims.create({
             key: loopKey,
             frames: loopFrames.map(f => ({ key: key, frame: f })),
             frameRate: 24,
             repeat: -1
           })
           offsetsMap[loopKey] = { x: anim.offsets[0], y: anim.offsets[1] }
         }

         this.anims.create({
           key: animKey,
           frames: mainFrames.map(f => ({ key: key, frame: f })),
           frameRate: 24,
           repeat: anim.state === 'idle' ? -1 : 0
         })

         offsetsMap[animKey] = { x: anim.offsets[0], y: anim.offsets[1] }
      })

      const idleKey = `${character}-idle`
      const animKey = `${idleKey}-anim`
      
      if (this.anims.exists(animKey) && idleFirstFrame) {
        /**
         * Set the origin to the bottom-right corner (1, 1)
         * This ensures the character stays anchored to the bottom-right of the screen.
         */
        const canvasW = config.scale!.width as number
        const canvasH = config.scale!.height as number
        
        sprite = this.add.sprite(canvasW, canvasH, idleKey, idleFirstFrame)
        sprite.setOrigin(1, 1)

        const idleFrame = this.textures.get(idleKey).get(idleFirstFrame)
        const idleWidth = idleFrame.realWidth
        const idleHeight = idleFrame.realHeight

        sprite.on('animationstart', (animation: Phaser.Animations.Animation, frame: Phaser.Animations.AnimationFrame) => {
          const offset = offsetsMap[animation.key]
          if (offset) {
            const currentFrame = frame.frame
            const frameWidth = currentFrame.realWidth
            const frameHeight = currentFrame.realHeight
            
            /**
             * FNF offsets are natively are origin (0,0) where 
             * renderX = baseX - offset.x.
             * Because I changed the origin to (1,1) to glue the sprite to the screen corner,
             * the math is inverted and shifted by the width difference of the frames sry...
             * and X axis inversion
             */
            const x = canvasW - idleWidth - offset.x + frameWidth
            const y = canvasH - idleHeight - offset.y + frameHeight
            
            sprite.setPosition(x, y)
          }
        })

        /**
         * Central handler for chaining sequential animations
         */
        sprite.on('animationcomplete', (animation: Phaser.Animations.Animation) => {
          if (animation.key === `${character}-electrocuted-anim`) {
            const crispyKey = `${character}-crispy-anim`
            if (this.anims.exists(crispyKey)) {
              sprite.play(crispyKey)
            }
          } else if (animation.key === `${character}-crispy-anim`) {
            const loopKey = `${character}-crispy-anim-loop`
            if (this.anims.exists(loopKey)) {
              sprite.play(loopKey)
            }
          }
        })

        sprite.play(animKey)
        
        sprite.setInteractive({ useHandCursor: true })
        
        sprite.on('pointerdown', () => {
          console.log('[Phaser] Sprite clicked!')
          const electroKey = `${character}-electrocuted-anim`
          
          if (this.anims.exists(electroKey)) {
            console.log(`[Phaser] Playing ${electroKey}`)
            sprite.play(electroKey)
          }
        })
      }
    }

    return () => {
      game.destroy(true)
    }
  }, [character])

  return (
    <div 
      ref={gameRef} 
      className="fixed bottom-0 right-0 z-[999] pointer-events-auto flex items-end justify-end w-[80vw] h-[45vh] md:w-[45vw] md:h-[65vh] max-w-[500px] max-h-[650px]"
    />
  )
}
