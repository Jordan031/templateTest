const express = require('express');
const router = express.Router();

var MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
var url = 'mongodb+srv://jordancombs9:Z7ljvndfyilssrm*@cluster0-ws5ow.mongodb.net/database?retryWrites=true&w=majority';

const dbName = 'database';
const client = new MongoClient(url);

const BlogPost = require('../models/blogPost');

router.get('/', (req, res) => {
mysort = { date: -1 };
BlogPost.find().sort(mysort).find().limit(1)
.then((data) => {
console.log('Data is ', data);
res.json(data);
})
.catch((error) => {
console.log('error: ', daerrorta);
});
});

router.get('/update', (req, res) => {
client.connect(function(err, client) {
assert.equal(null, err);
console.log("connected correctly to server");
const db = client.db(dbname);
const col = db.collection('blogposts')
var mysort = { date: -1 };
col.find().sort(mysort).toArray( function(err, result) {
if (err) throw err;
console.log('Data: ', result);
res.json(result)
})
client.close();
});
});

router.post('/update2', (req, res) => {
client.connect(function(err, client) {
assert.equal(null, err);
const data = req.body;
const db = client.db(dbName);
const col = db.collection('blogposts')
console.log("connected correctly to server");
col.findOneAndUpdate({}, {$set: {pic: data.pic, firstName: data.firstName, lastName: data.lastName, bio: data.bio }}, { sort: {"date": -1}});
console.log("1 document updated");
client.close();
});
});

router.post('/save', (req,res) => {
const data = req.body;
const newBlogPost = new BlogPost(data);
newBlogPost.save((error) => {
if (error) {
res.status(500).json({msg: 'Sorry, error'});
}
else {
res.json({
msg: 'We recieved!'
});
}
});
});


module.exports = router;
