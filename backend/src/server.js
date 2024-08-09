const app = require('./app');
const dotenv = require('dotenv');
const mongoose = require('mongoose')

dotenv.config({ path: './config.env' })


const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
})