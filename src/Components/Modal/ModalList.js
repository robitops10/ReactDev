import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); 								// ? without it throw error.

const ModalList = (props) => (
	<Modal
		isOpen={props.selectedOption}
		contentLabel='Test for Screen reader'
		onAfterOpen={console.log('afterOpen')}
		onRequestClose={ () => props.closeModal(false) }
	>
		<p>It is Modal</p>

		<button onClick={ () => props.closeModal(false) }>Close</button>

	</Modal>
);

export default ModalList;
