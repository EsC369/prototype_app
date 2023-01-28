const asyncHandler = require("express-async-handler");


// @desc   GET ITEMS
// @route   GET /api/items
// @access Private 
const getItems = asyncHandler(async(req, res) => {
    res.status(200).json({ message: "Get ITems"})
})

// @desc   SET ITEM
// @route   POST /api/items
// @access Private 
const setItem = asyncHandler(async(req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error("Please add a text field");
    }
})

// @desc   Update Item
// @route   PUT /api/items/:id
// @access Private 
const updateItem = asyncHandler(async(req, res) => {
    res.status(200).json({ message: `Updated item:  ${req.params.id}`})
})


// @desc   DELETE ITEM
// @route   DELETE /api/items/:id
// @access Private 
const deleteItem = asyncHandler(async(req, res) => {
    res.status(200).json({ message: `Deleted Item:  ${req.params.id}`})
})



module.exports = {
    getItems,
    setItem,
    updateItem,
    deleteItem
}