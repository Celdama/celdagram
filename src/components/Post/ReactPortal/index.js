import { createPortal } from 'react-dom';

const ReactPortal = ({ children, wrapperId }) => {
  return createPortal(children, document.getElementById(wrapperId));
};

export default ReactPortal;
