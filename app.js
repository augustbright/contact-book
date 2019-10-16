const Express = require('express');
const app = new Express();
const PORT = process.env.PORT || 5000;
const path = require('path');

// Init Mongo connection
const initDB = require('./db/init');
initDB();

// Init routing
const BodyParser = require('body-parser');
const api = require('./routes/api');
app.use(BodyParser.json());
app.use('/api', api);
app.use(Express.static(path.join(__dirname, 'client/build')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

// Start server
app.listen(PORT, (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(`Server is listening on port ${PORT}`);
});
