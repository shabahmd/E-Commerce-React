import { useDispatch, useSelector } from "react-redux"
import SideNav from "../../components/SideNav/SideNav"
import "./Cart.css"
import CartProductCard from "../../components/CartProductCrad/CartProductCard"
import { Link } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { useEffect } from "react"
import { setTotalAmt } from "../../slices/cart"
import { doc, updateDoc } from "firebase/firestore"
import { db } from "../../FirebaseConfig"


function Cart() {


    const bag = userSelectors(state => state.bag)
    const user = userSelectors(state => state.user)
    const { cart, total_qty, total_amt } = bag
    const dispatch = useDispatch()



    useEffect(() => {
        dispatch(setTotalAmt())
    }, [cart])
})



const notify = (message) => {
    toast(message, {


        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: false,
        progress: undefined,
        them: 'dark'



    })
}



}