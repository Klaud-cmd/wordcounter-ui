import Button from 'react-bootstrap/Button';
import React from "react";
import AWS from 'aws-sdk'
import {v4 as uuidv4} from 'uuid';

window.Buffer = window.Buffer || require("buffer").Buffer;

function UploadButton({setUploadModalShow, files, setFilesUploaded, setProcessingModalShow, setResultFiles}) {
    AWS.config.update({
        accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.REACT_APP_AWS_SECRET_KEY
    })

    const handleUpload = async () => {
        setUploadModalShow(true)
        setResultFiles([])

        const requestId = uuidv4();
        const extensionPattern = new RegExp(".txt$");

        const bucket = new AWS.S3({
            params: {Bucket: process.env.REACT_APP_BUCKET_NAME},
            region: process.env.REACT_APP_REGION,
        })
        const params = {
            ACL: 'public-read',
            Bucket: process.env.REACT_APP_BUCKET_NAME,
        };
        for (let i = 0; i < files.length; i++) {
            if (extensionPattern.test(files[i].name)) {
                params.Key = `input/${requestId}/${files[i].name}`;
                params.Body = files[i];
                await bucket.putObject(params).promise() //no syncronous way to send, async is too much for chrome
                setFilesUploaded(i + 1)
            }
        }
        setUploadModalShow(false)
        setFilesUploaded(0)
        await handleProcessing(requestId, bucket)
    }

    const handleProcessing = async (requestId, bucket) => {
        setProcessingModalShow(true)
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            }
        };
        await fetch("http://ec2-34-243-230-11.eu-west-1.compute.amazonaws.com:8080/wordcount/start/" + requestId, requestOptions)
            .then(() => {
                const params = {
                    Bucket: process.env.REACT_APP_BUCKET_NAME,
                    Prefix: `output/${requestId}/`
                };
                bucket.listObjects(params, ((err, data) => {
                    if (err) {
                        alert("Something went wrong")
                        console.error(err)
                    }
                    setResultFiles(data.Contents)
                }))
            })
            .catch(err => {
                alert("Something went wrong. Wait and try again.")
                console.error("ERR", err)
            })
        setProcessingModalShow(false)
    }

    return (
        <>
            <div className="mb-2">
                <Button variant={!files ? "secondary" : "primary"} size="lg" onClick={handleUpload}
                        disabled={!files}>
                    Upload
                </Button>
            </div>
        </>
    );
}

export default UploadButton;