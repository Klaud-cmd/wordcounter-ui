import ProgressBar from 'react-bootstrap/ProgressBar';
import React from 'react'

function UploadProgressBar({filesTotal, filesUploaded}) {
    return <ProgressBar animated variant="success" now={filesUploaded/filesTotal*100} label={`${filesUploaded}/${filesTotal}`} />;
}

export default UploadProgressBar;