import express from 'express';

// const express = require('express');
const router = express.Router();

// provide todo route implementation here

router.get('/', (req, res) => {
    res.send('Root endpoint of of TODO route')
})

export default router;

// module.exports = router;