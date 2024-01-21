import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import useCart from "../hooks/useCart";


const MenuItem = ({item}) => {
    // order.jsx thikh e item receive krtysy
    const {image, price, title, description , _id }=item;
    const [, refetch] =useCart()
    // user
    const {user}= useContext(AuthContext)
    // 
    const location= useLocation()
    const navigate= useNavigate()
    const handleAddToCart= food =>{
       if(user && user.email){
        // send cart item to the database
           const cartItem = {
               menuId: _id,
               email: user.email,
              title,
               image,
               price
           }
           axios.post('http://localhost:5000/carts', cartItem)
               .then(res => {
                   console.log(res.data)
                   if (res.data.insertedId) {
                       Swal.fire({
                           position: "top-end",
                           icon: "success",
                           title: `${title} added to your cart`,
                           showConfirmButton: false,
                           timer: 1500
                       });
                       // refetch cart to update the cart items count
                       refetch();
                   }

               })
       
       }
       else{
           Swal.fire({
               title: "You are not Logged In",
               text: "Please login to add to the cart?",
               icon: "warning",
               showCancelButton: true,
               confirmButtonColor: "#3085d6",
               cancelButtonColor: "#d33",
               confirmButtonText: "Yes, login!"
           }).then((result) => {
               if (result.isConfirmed) {
                   //   send the user to the login page
                   navigate('/login', {state:{from:location}})
               }
           });
       }
    }
    return (
        <div className="">
            <div className="card w-72 mx-auto lg:w-96 bg-base-100 shadow-xl mb-10">
                <figure><img src={image} alt={title} className="w-96 h-56"/></figure>   {/* I add className here*/}
                <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white">{price}</p>

                <div className="card-body flex flex-col items-center ">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <button
                            onClick={() => (handleAddToCart(item))}


                            className="btn btn-primary border-0 mt-4">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuItem;