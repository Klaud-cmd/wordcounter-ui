import ProgressBar from 'react-bootstrap/ProgressBar';
import React from 'react'

function UploadProgressBar() {
    return <ProgressBar animated variant="success" now={100}/>;
}

export default UploadProgressBar;