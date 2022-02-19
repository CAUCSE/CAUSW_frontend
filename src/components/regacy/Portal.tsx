import { createPortal } from 'react-dom';

export const Portal: React.FC = ({ children }) =>
  createPortal(children, document.getElementById('external-root') as HTMLElement);
