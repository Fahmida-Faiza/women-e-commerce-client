import { useState } from "react";
import { useEffect } from "react";
import MenuItem from "./menuItem";


const Order = () => {

    // data load json file
    const[menu,setMenu]= useState([])
  useEffect ( ()=> {
    fetch('data.json')
    .then(res=> res.json())
    .then(data =>setMenu(data))

  }, [])
    return (
        <div>

{
    menu.map(item=> <MenuItem 
        key={item.id}
        item={item}
        ></MenuItem>)
}



            <h1>order page</h1>
            {/* <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={Image.jpg} alt="Shoes" /></figure>
                <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white">$560</p>
                <div className="card-body flex flex-col items-center ">
                    <h2 className="card-title"></h2>
                    <p></p>
                    <div className="card-actions justify-end">
                        <button
                            // onClick={() => (handleAddToCart(item))}


                            className="btn btn-primary border-0 mt-4">Add to Cart</button>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default Order;