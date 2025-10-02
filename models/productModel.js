const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const productSchema = new mongoose.Schema({
productName:{
     type : String,
    required : true
},
category:{
    type : String,
    required : true
},
price:{
     type : Number,
    required : true,
    min : 0
},
quantity: {
     type: Number,
      required: true, 
      min: 0
},
color: {
     type: String, 
     required: true 
},
image:{
    type : String
},
productId:{
    type : Number
}

});
// Auto-increment productId
productSchema.plugin(AutoIncrement, { inc_field: "productId", start_seq: 645341 });

module.exports = mongoose.model("Product", productSchema);