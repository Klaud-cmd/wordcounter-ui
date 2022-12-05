import Modal from 'react-bootstrap/Modal';
import UploadProgressBar from "./UploadProgressBar";

function UploadProgressModal({show, filesTotal, filesUploaded}) {
    return (
        <Modal
            show={show}
            backdrop="static"
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body>
                <p className="text-center"> Uploading files... </p>
                <UploadProgressBar filesTotal={filesTotal} filesUploaded={filesUploaded}/>
            </Modal.Body>
        </Modal>
    );
}

export default UploadProgressModal;