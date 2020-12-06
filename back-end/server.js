const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const PORT = 4000;

let Product = require('./product.model');
let Supplier = require('./supplier.model');

app.use(bodyParser.json());

const productRoute = express.Router();
const supplierRoute = express.Router();

app.use('/products', productRoute);
app.use('/suppliers', supplierRoute);

mongoose.connect('mongodb://127.0.0.1:27017/PapeleriaPDV', {
    useNewUrlParser: true
});
const connection = mongoose.connection;

connection.once('open', function(){
    console.log('Yasta conectao a mongo compa');
});



productRoute.route('/').get(function(req,res){
    Product.find(function(err, products){
        if(err) {
            res.json({'error':err});
        }else{
            res.json(products);
        }
    });
});

productRoute.route('/add').post(function(req,res){
    let product = new Product(req.body);
    product.save().then(product => {
        res.status(200).json({'product': 'Producto guardado correctamente'});
    }).catch(err => {
        res.status(400).send('Fallo al guardar el producto');
    });
});



supplierRoute.route('/').get(function(req,res){
    Supplier.find(function(err, supplier){
        if(err) {
            res.json({'error':err});
        }else{
            res.json(supplier);
        }
    });
});

supplierRoute.route('/add').post(function(req,res){
    let supplier = new Supplier(req.body);
    supplier.save().then(supplier => {
        res.status(200).json({'supplier': 'Proveedor guardado correctamente'});
    }).catch(err => {
        res.status(400).send('Fallo al guardar el proveedor');
    });
});

app.listen(PORT, function(){
    console.log('Ya se prendio esta madre');
});