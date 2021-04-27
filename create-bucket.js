const AWS = require('aws-sdk');

// Enter copied or downloaded access ID and secret key here
const ID = 'AKIA2MU3WQQLMHPPIHGJ';
const SECRET = '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';
const REGION = 'ap-southeast-1';

// The name of the bucket that you have created
const BUCKET_NAME = 'imagebucketkhambenhonl-1';

const s3 = new AWS.S3({
    accessKeyId: ID,
    secretAccessKey: SECRET
});

const params = {
    Bucket: BUCKET_NAME,
    CreateBucketConfiguration: {
        // Set your region here
        LocationConstraint: REGION
    }
};

s3.createBucket(params, function(err, data) {
    if (err) console.log(err, err.stack);
    else console.log('Bucket Created Successfully', data.Location);
});