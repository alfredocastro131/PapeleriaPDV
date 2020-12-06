const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Supplier = new Schema({
    supplier_name: {
        type: String
    },
    supplier_register_date: {
        type: Date
    },
    supplier_products_provides: [
        {type: mongoose.Schema.Types.ObjectId, ref: 'Product'}
    ]
}, {collection: 'Supplier'});

module.exports = mongoose.model('Supplier', Supplier);