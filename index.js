const productarr = [
{
"id":1,
"sku":"abc",
"productName":"name 1",
"category":1
},
{
"id":2,
"sku":"def",
"productName":"name 2",
"category":2
},
{
"id":3,
"sku":"ghi",
"productName":"name 1",
"category":2
},
{
"id":4,
"sku":"klm",
"productName":"name 1",
"category":3
},
{
"id":5,
"sku":"xyz",
"productName":"name 1",
"category":1
}]
const pricingarr = [
{
"sku":"abc",
"price":10,
},
{
"sku":"def",
"price":20,
},
{
"sku":"ghi",
"price":30,
},
{
"sku":"klm",
"price":40,
},
{
"sku":"xyz",
"price":50,
}
]

const result = productarr.map ( product => {
    const price = pricingarr.find(reqsku => product.sku == reqsku.sku)
    return {
      id : product.id,
      sku : product.sku,
      productName : product.productName,
      category : product.category,
      price : price.price
    }
})
console.log(result)