import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { render, screen } from '@testing-library/react';
import { expect } from 'vitest';
import { JSDOM } from 'jsdom';

describe('App', () => {
  it('renders headline', () => {
    render(<App/>);
    expect(screen.getByRole("heading").textContent).toMatch(/Test/i);
  });
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
