const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    bookName: String,

    authorId: {
        type: ObjectId,
        ref: "newAuthor"
    },

    publisherId : {
        type : ObjectId,
        ref : "newPublisher"
    },

    isHardCover :{
        type : Boolean,
        default : true
    },

    price: Number,
    ratings: Number,



}, { timestamps: true });


module.exports = mongoose.model('LibraryBook', bookSchema)
