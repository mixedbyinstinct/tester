
 
var mongo = require('mongoose');
 
var songSchema = new mongo.Schema({
    title: String,
    user: {
	    type: String,
	    required: true
    },
    img:
    {
        data: Buffer,
        contentType: String
    }
});
 
 
module.exports = new mongo.model('Song', songSchema);
