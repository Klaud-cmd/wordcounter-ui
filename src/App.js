import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, {useState} from "react";
import NavBar from "./component/Navbar";
import FileInput from "./component/FileInput";
import UploadButton from "./component/UploadButton";
import UploadProgressModal from "./component/UploadProgressModal";
import Container from "react-bootstrap/Container";
import ProcessingProgressModal from "./component/ProcessingProgressModal";
import ResultsTable from "./component/ResultsTable";

function App() {
    const [uploadModalShow, setUploadModalShow] = useState(false);
    const [processingModalShow, setProcessingModalShow] = useState(false);
    const [files, setFiles] = React.useState(null)
    const [filesUploaded, setFilesUploaded] = React.useState(0)
    const [resultFiles, setResultFiles] = React.useState([])
    return (
        <div className="App">
            <NavBar/>
            <Container>
                <FileInput setFiles={setFiles}/>
                <UploadButton
                    setUploadModalShow={setUploadModalShow}
                    setProcessingModalShow={setProcessingModalShow}
                    files={files}
                    setFilesUploaded={setFilesUploaded}
                    setResultFiles={setResultFiles}
                />
                <ResultsTable resultFiles={resultFiles}/>
                <UploadProgressModal
                    show={uploadModalShow}
                    filesTotal={files?.length}
                    filesUploaded={filesUploaded}
                />
                <ProcessingProgressModal
                    show={processingModalShow}
                />
            </Container>
        </div>
    );
}

export default App;
