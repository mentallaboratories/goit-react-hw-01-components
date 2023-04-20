import Modal from 'react-modal';

Modal.setAppElement('#root');

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };


export const ImageModal = ({isOpen, onClose, image}) => {
    return (
        <Modal
                    isOpen={isOpen}
                    style={customStyles}
                    onRequestClose={onClose}
                    contentLabel="Example Modal"
                >
                    <div>
                        <img src={image} alt="gggggg" width="640"/>
                        <button onClick={onClose}>X</button>
                    </div>
        
        </Modal>
    );
};

