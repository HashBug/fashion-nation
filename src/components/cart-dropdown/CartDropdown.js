import { connect } from "react-redux";
import CustomButton from "../custom-button/CustomButton";
import CartItem from "../cart-item/Cartitem";
import "./cart-dropdown.styles.scss";

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton>Go To Checkout</CustomButton>
  </div>
);

const mapStateToprops = ({ cart: { cartItems } }) => ({
  cartItems,
});

export default connect(mapStateToprops)(CartDropdown);
