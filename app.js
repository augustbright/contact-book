const Express = require('express');
const app = new Express();
const PORT = process.env.NODE_SERVER_PORT || 5000;

// Init Mongo connection
const initDB = require('./db/init');
initDB();

// Init routing
const BodyParser = require('body-parser');
const api = require('./routes/api');
app.use(BodyParser.json());
app.use('/api', api);

// Start server
app.listen(PORT, (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(`Server is listening on port ${PORT}`);
});
