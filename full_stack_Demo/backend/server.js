import express from 'express';


const app = express();

// app.get('/', (req, res) => {
//     res.send('Server is ready');
// });


// Get a lost of 5 jokes

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: 'A joke',
            content: 'This is a joke'
        },
        {
            id: 2,
            title: 'Another joke',
            content: 'This is a another joke'
        },
        {
            id: 3,
            title: 'A third joke',
            content: 'This is a third joke'
        },
        {
            id: 4,
            title: 'A veg joke',
            content: 'This is a Veg joke'
        },
        {
            id: 5,
            title: 'A Non-veg joke',
            content: 'This is a Non-Veg joke'
        }
    ];

    res.send(jokes);
});


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`);

});