const express = require('express');

const app = express()

app.get('/', (req, res) => {
    res.send('WASSUP MANANAP')
})

app.listen(1234, () => {
    console.log('Server is running on http://localhost:1234')
})
