#What is it?
This is the frontend component to the Wordcounter.

#How to run it?
The application itself runs on s3, however if you want to run it locally you can use `npm start`. Be sure to create a `.env` file 
with the following properties to make the application run

```
REACT_APP_AWS_ACCESS_KEY_ID=XXXXXXXX
REACT_APP_AWS_SECRET_KEY=XXXXXXXXXXX
REACT_APP_BUCKET_NAME=XXXXXXXXXXXXXX
REACT_APP_REGION=XXXXXXXXX
```