import ReactDOM from 'react-dom';

export const Portal: React.FC = ({ children }) =>
  ReactDOM.createPortal(children, document.getElementById('external-root') as HTMLElement);
