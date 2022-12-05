import Form from 'react-bootstrap/Form';
import React from 'react'

function FileInput({setFiles}) {

    return (
        <>
            <Form.Group controlId="formFileMultiple" className="mb-3"  onChange={(e) => setFiles(e.target.files)}>
                <Form.Label>Select all files to be processed</Form.Label>
                <Form.Control type="file" accept=".txt" multiple />
            </Form.Group>
        </>
    );
}

export default FileInput;