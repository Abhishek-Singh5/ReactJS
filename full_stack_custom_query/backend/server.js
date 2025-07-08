import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

app.get('/api/products', (req, res) => {
    const products = [
        {
            id: 1,
            name: 'table wooden',
            price: 200,
            image: ''
        },
        {
            id: 2,
            name: 'car',
            price: 20000,
            image: ''
        },
        {
            id: 3,
            name: 'bike',
            price: 10000,
            image: ''
        },
        {
            id: 4,
            name: 'Air conditionar',
            price: 5000,
            image: ''
        },
        {
            id: 5,
            name: 'Gun',
            price: 2000,
            image: ''
        },
    ]

    // http://localhost:3000/api/products?search=metal

    if(req.query.search){
        const filterProducts = products.filter(product => product.name.includes(req.query.search))
        res.send(filterProducts);
        return;
    }


    setTimeout(() => {
        res.send(products);
    }, 3000)
})


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
} )

