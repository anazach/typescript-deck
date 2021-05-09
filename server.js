const express = require('express');
const app = express();

app.use(express.static('dist'));

app.get('/about', (req, res) => {
   res.send('Card game')
});

app.listen(9192, () => {
   console.log('Server on  9192')
});
