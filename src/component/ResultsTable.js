import Table from 'react-bootstrap/Table';

function ResultsTable({resultFiles}) {
    return (
        <Table bordered hover hidden={resultFiles.length === 0}>
            <tbody>
            <tr>
                <td>A-G</td>
                <td><a href={`https://${process.env.REACT_APP_BUCKET_NAME}.s3.${process.env.REACT_APP_REGION}.amazonaws.com/${resultFiles[0]?.Key}`}>Download</a></td>
            </tr>
            <tr>
                <td>H-N</td>
                <td><a href={`https://${process.env.REACT_APP_BUCKET_NAME}.s3.${process.env.REACT_APP_REGION}.amazonaws.com/${resultFiles[1]?.Key}`}>Download</a></td>
            </tr>
            <tr>
                <td>O-U</td>
                <td><a href={`https://${process.env.REACT_APP_BUCKET_NAME}.s3.${process.env.REACT_APP_REGION}.amazonaws.com/${resultFiles[2]?.Key}`}>Download</a></td>
            </tr>
            <tr>
                <td>V-Z</td>
                <td><a href={`https://${process.env.REACT_APP_BUCKET_NAME}.s3.${process.env.REACT_APP_REGION}.amazonaws.com/${resultFiles[3]?.Key}`}>Download</a></td>
            </tr>
            </tbody>
        </Table>
    );
}

export default ResultsTable;