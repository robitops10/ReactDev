import React, {useState} from 'react';
import ModalList from './../Modal/ModalList';
import Modal from 'react-modal';







const Demo = () => {

	return(
		<div>
			<Modal
				isOpen={true}
				contentLabel="Example Modal"
			>
				<h2>Heading</h2>
			</Modal>	
			<button onClick={ f => f } > Open </button>
		</div>
	);
};

export default Demo;
