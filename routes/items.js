const express = require('express');
const router = express.Router();

// @route   GET api/items
// @desc    Get all users contacts
// @access  Private
router.get('/', (req, res)=>{
    res.send('Get all items');
});

// @route   POST api/items
// @desc    Add new contact
// @access  Private
router.post('/', (req, res)=>{
    res.send('Add item');
});

// @route   PUT api/items/:id
// @desc    Update user item
// @access  Private
router.put('/:id', (req, res)=>{
    res.send('Update item');
});

// @route   DELETE api/contacts/:id
// @desc    Delete user item
// @access  Private
router.delete('/:id', (req, res)=>{
    res.send('Delete items=');
});

module.exports = router;