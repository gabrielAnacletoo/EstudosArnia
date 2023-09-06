function MakeProduct(product){
if(!(product.name && product.price)){
    throw new Error("Missing parameters for MakeProduct")
}
return {
    ...product,
    startRating: 0,
    createdAt: new Date()
}
}

module.exports = {MakeProduct}