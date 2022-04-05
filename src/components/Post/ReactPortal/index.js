import { createPortal } from 'react-dom';
import { createWrapperAndAppendToBody } from '../../../Helpers/createWrapperAndAppendToBody';

const ReactPortal = ({ children, wrapperId = 'react-portal-wrapper' }) => {
  let element = document.getElementById(wrapperId);

  if (!element) {
    element = createWrapperAndAppendToBody(wrapperId);
  }

  return createPortal(children, element);
};

export default ReactPortal;
