import { useSelector, useDispatch } from 'react-redux';

import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const { cartVisible } = useSelector(state => state.ui);
  const { items } = useSelector(state => state.cart);

  const cartItemsList = items.map(item => <CartItem key={item.id} item={item} />)

  return (
    <>
      {cartVisible &&
        <Card className={classes.cart}>
          <h2>Your Shopping Cart</h2>
          <ul>
            {cartItemsList.length ? cartItemsList : <p className={classes.empty}>Cart is empty</p>}
          </ul>
        </Card>}
    </>
  );
};

export default Cart;
