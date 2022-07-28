
# Zone learn

zone4code built with React, Redux, Express.js and MongoDB. Additional technologies include google cloud API and the YouTube API.


### Installation


> Install dependencies for server in `package.json`

```shell
$ cd zone4code
$ npm install
```
> Install dependencies on client side

```shell
$ cd zone4code/client
$ npm install
```

### Setup

In order to use the web app you need to register for the Google cloud storage API. Please visit the <a href="https://console.cloud.google.com" target="_blank"> website  </a> for registering.
You will also need an gCloud API key which you can get <a href="https://cloud.google.com/iam/docs/creating-managing-service-account-keys" target="_blank"> here  </a>.

- Please go to `storage.json` and put your gCloud data accordingly
- In `server/config.js` please change the following data:

```javascript
const bucketName = '' // Here comes your bucketName
const Storage = require('@google-cloud/storage');
const projectId = ''; // Here comes your project ID
```
- You can you any database service for MongoDB. I recommend using <a href="https://cloud.mongodb.com/" target="_blank"> Mlab </a>. The go to `server/configDB.js` and change your data accordingly.

```javascript
mongoose.connect(''); // Here put the database you want to connect to.
```
- Finally, please go to `client/src/components/Course/CourseVideos` and change to your youTube key. You can get it <a href="https://developers.google.com/youtube/v3/" target="_blank"> here </a> :

```javascript
let youtubeKey = 'test'; // Put your youtube key here
```

## Features

As an Admin you are able to:

- Create Courses
- Create Students
- Enable/Disable Courses
- Upload Files
- Upload YouTube videos

As a student you can:

- Attend Courses
- Review Courses
- Download files
- Watch Youtube videos that were previously uploaded to Youtube.

This web app has been tested regirously and is fully responsive.

