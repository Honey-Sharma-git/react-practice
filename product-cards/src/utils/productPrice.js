export function productPrice(product) {
  const price = (product.productPrice * 1.21).toFixed();
  return Intl.NumberFormat("en-IN").format(price);
}
export function priceFormatter(product) {
  return Intl.NumberFormat("en-IN").format(product.productPrice);
}
