import Modal from 'react-bootstrap/Modal';
import ProcessingProgressBar from "./ProcessingProgressBar";

function ProcessingProgressModal({show}) {
    return (
        <Modal
            show={show}
            backdrop="static"
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body>
                <p className="text-center"> Processing... </p>
                <ProcessingProgressBar/>
            </Modal.Body>
        </Modal>
    );
}

export default ProcessingProgressModal;