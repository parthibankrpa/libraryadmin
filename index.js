const express = require('express')
const logger = require('./middleware/logger')

const app = express()


app.use(logger);

app.use('/api/admin',require('./routes/api/libraryadmin'))
app.use('/api/books',require('./routes/api/books'))


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));