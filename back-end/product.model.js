const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Product = new Schema({
    product_description: {
        type: String
    },
    product_total_buy_price: {
        type: Number
    },
    product_package_cuantity: {
        type: Number
    },
    product_cuantity_per_package: {
        type: Number
    },
    product_total_cuantity: {
        type: Number
    },
    product_sell_unit_price: {
        type: Number
    },
    product_sell_package_price: {
        type: Number
    },
    product_register_date: {
        type: Date
    },
    product_supplier: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Supplier'
    }
}, {collection: 'Product'});

module.exports = mongoose.model('Product', Product);