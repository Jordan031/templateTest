const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogPostSchema = new Schema({
	firstName: String,
	lastName: String,
	bio: String,
	pic: String,
	date: {
		type: String,
		default: Date.now()
	}
});

const BlogPost = mongoose.model('BlogPost', BlogPostSchema);

module.exports = BlogPost;                       
