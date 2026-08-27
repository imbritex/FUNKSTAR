import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/main.css';
import HomePage from './pages/home';

function main(): void
{
  const rootElement: HTMLElement | null = document.getElementById('root');
  if (!rootElement) throw 'Root element could not be found!';

  createRoot(rootElement).render(
    <StrictMode>
      <HomePage />
    </StrictMode>
  );
}

main();