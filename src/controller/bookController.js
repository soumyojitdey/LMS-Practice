const Book = require('../models/book');


exports.getAllBooks = async (req, res) => {
    try{

        const books = Book.find({})
        console.log("Books: ", books);
        res.status(200).json(books);

    }catch(e){
        console.log("Error: " + e);
        res.status(500).json({
            status: 500,
            message: "Error - " + e
        })

    }
}
