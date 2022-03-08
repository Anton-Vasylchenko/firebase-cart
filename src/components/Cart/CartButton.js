import classes from './CartButton.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/ui-slice';

const CartButton = (props) => {
  const dispatch = useDispatch();

  const { items } = useSelector(state => state.cart);

  const onToggleCartHandler = () => {
    dispatch(uiActions.toggleVisibility());
  }

  const totalCount = items.reduce((total, { quantity }) => total + quantity, 0);

  return (
    <button onClick={onToggleCartHandler} className={classes.button}>
      <span>My Cart</span>
      {totalCount > 0 && <span className={classes.badge}>{totalCount}</span>}
    </button>
  );
};

export default CartButton;
