import CustomButton from "../custom-button/CustomButton";
import "./cart-dropdown.styles.scss";

const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-items"></div>
    <CustomButton>Go To Checkout</CustomButton>
  </div>
);

export default CartDropdown;
