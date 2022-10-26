// Need to calculate discount percentage of product

var listingPrice = 999;
var sellingPrice = 199;
var discountPercentage = Math.round(((listingPrice - sellingPrice) / listingPrice ) *100 );

console.log(
    `
    discount percentage :${discountPercentage}%`
)