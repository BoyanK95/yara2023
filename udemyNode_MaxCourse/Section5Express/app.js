const express = require('express');

const app = express();
/**First part */
// app.use((req, res, next) => {
//     console.log('First Middleware');
//     next();
// });

// app.use((req, res, next) => {
//     console.log('Second Middleware!');
//     res.send('<p>Assignment solved (almost)</p>')
// });

/**Second part */
app.use('/user', (req, res, next) => {
    console.log('Middleware users');
    res.send('<h1>Users middleware</h1>');
});

app.use('/', (req, res, next) => {
    console.log('Normal middleware');
    res.send('<h1>Normal middleware!</h1>')
});

app.listen(3000);
