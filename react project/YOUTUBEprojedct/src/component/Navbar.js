import "../styling/navbar.css";
const Navbar = (props) => {
  return (
    <nav>
      <div className="nav_box">
        <span className="my_shop" onClick={()=>props.setShow(true)}>My Shopping</span>
        <div className="cart"  onClick={()=>props.setShow(false)}>
          <span>
            <i className="fas fa-cart-plus"></i>
          </span>
           <span>{props.size}</span>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
