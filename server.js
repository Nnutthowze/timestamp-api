const express = require('express');
const app = express();
const utils = require('./utils/views_data');
const time = require('./utils/time');
const port = process.env.PORT || 8080;

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', (req, res) => res.render('index', utils.home));

app.get('/:timestamp', (req, res) => {
    var timestamp = req.params.timestamp;
    var unix = time.getUnixTimestamp(timestamp);
    var natural = time.getNaturalTimestamp(timestamp);
    
    if (isNaN(unix) && isNaN(Date.parse(natural))) { 
        return res.json({ unix: null, natural: null }); 
    }
    
    if (isNaN(Date.parse(natural))) {
        natural = time.getNaturalTimestamp(unix); 
    } else {
        unix = Number(timestamp);
    }
    
    return res.json({ unix, natural });
});

app.get('*', (req, res) => res.render('404', utils.notFound));

app.listen(port, () => console.log('bootstrapped'));
