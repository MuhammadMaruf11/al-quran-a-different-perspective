require('dotenv').config();
const app = require('./src/app');

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`server is running at http://127.0.0.1:${port}`);
})