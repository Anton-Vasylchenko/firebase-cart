import { useDispatch } from 'react-redux';
import cart, { cartActions } from '../../store/cart-slice';

import classes from './CartItem.module.css';

const CartItem = (props) => {
  const dispatch = useDispatch();

  const { quantity, total, info, id } = props.item;

  const onPlusHandler = () => {
    dispatch(cartActions.incrementQuantity(id));
  }

  const onMinusHandler = () => {
    dispatch(cartActions.decrementQuantity(id));
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{info.title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${info.price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={onMinusHandler}>-</button>
          <button onClick={onPlusHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
