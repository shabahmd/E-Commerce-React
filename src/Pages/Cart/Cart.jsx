import { useDispatch, useSelector } from "react-redux";
import SideNav from "../../components/SideNav/SideNav";
import "./Cart.css";
import CartProductCard from "../../components/CartProductCrad/CartProductCard";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { setTotalAmt } from "../../slices/cart";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../FirebaseConfig";

function Cart() {
    const bag = useSelector((state) => state.bag);
    const user = useSelector((state) => state.user);
    const { cart, total_amt } = bag;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setTotalAmt());
    }, [cart]);

    const notify = (message) => {
        toast(message, {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            draggable: false,
            progress: undefined,
            theme: 'dark',
        });
    };

    return (
        <div className="Cart">
            <SideNav />
            <div className="CartContainer">
                {cart.length < 1 ? (
                    <div className="emptyMessage">
                        <h2>Your Cart is Empty</h2>
                        <Link to="/shop">Shop Now</Link>
                    </div>
                ) : (
                    <>
                        <h2 className="cartHeading">
                            {user.name ? `${user.name.split('')[0]}'s Cart` : "Your Cart"} ({cart.length} Items)
                        </h2>
                        <CartProductCard products={cart} />
                        <div className="subTotalSection">
                            <div className="topSec">
                                <p>Subtotal</p>
                                <span>${total_amt}</span>
                            </div>
                            <button
                                type="button"
                                className="checkoutBtn"
                                onClick={() => notify('Order placed')}
                            >
                                Checkout
                                <FontAwesomeIcon icon={faArrowRight} />
                            </button>
                        </div>
                    </>
                )}
            </div>
            <ToastContainer />
        </div>
    );
}

export default Cart;
