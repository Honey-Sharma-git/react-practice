import { Fragment } from "react";
const ProductList = (props) => {
  const { products } = props;
  return (
    <Fragment>
      <ul>
        <li>Id: {products[0].id}</li>
        <li>Name: {products[0].name}</li>
        <li>Price: {products[0].price}</li>
      </ul>
      <ul>
        <li>Id: {products[1].id}</li>
        <li>Name: {products[1].name}</li>
        <li>Price: {products[1].price}</li>
      </ul>
      <ul>
        <li>Id: {products[2].id}</li>
        <li>Name: {products[2].name}</li>
        <li>Price: {products[2].price}</li>
      </ul>
    </Fragment>
  );
};
export { ProductList };
