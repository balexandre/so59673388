const express = require('express');

const routes = require('./routes'); // same as './routes/index'
const app = express();

const PORT = 5001;

app.use('/drums', routes.drums);
app.use('/pianos', routes.pianos);
app.use('/', (req, res) => { res.send({ action: 'default get' }); });

app.listen(PORT, () => { 
    require('./utilities/api-table')(app._router.stack);
    console.log(`ready on http://localhost:${PORT}`);
});
