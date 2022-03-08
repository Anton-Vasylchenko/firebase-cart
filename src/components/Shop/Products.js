import ProductItem from './ProductItem';
import classes from './Products.module.css';

const dummyProducts = [
  {
    id: 1,
    title: 'Test11',
    price: 6,
    description: 'This is a first product - amazing11!'
  },
  {
    id: 7,
    title: 'Test22',
    price: 12,
    description: 'This is a first product - amazing22!'
  }
]

const Products = (props) => {

  const productsList = dummyProducts.map(product => (
    <ProductItem
      key={product.id}
      item={product}
    />
  ))

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {productsList}
      </ul>
    </section>
  );
};

export default Products;
