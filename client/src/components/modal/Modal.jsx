import { createPortal } from 'react-dom';
import { StyledModal } from './modal.styles';

const Modal = ({ children }) => {
	if (!children) return;

	return createPortal(
		<StyledModal>{children}</StyledModal>,
		document.getElementById('modal')
	);
};

export default Modal;
