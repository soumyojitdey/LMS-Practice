const Book = require('../models/book');


exports.getAllBooks = async (req, res) => {
    try{

        const books = Book.find({})

    }catch(e){

    }
}
