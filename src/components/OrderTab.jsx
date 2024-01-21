// import { useLoaderData } from "react-router-dom";
// import { useState } from "react";
import MenuItem from "./MenuItem";

const OrderTab = ({ item }) => {
    // ...........................................

    // const loadedCoffees = useLoaderData();
    // const [coffees, setCoffees] = useState(loadedCoffees)

    // ...........................................
 
    return (
        <div >

           
                    <div className='grid md:grid-cols-3 gap-10'>
                        {
                            item.map(item => <MenuItem
                                key={item._id}
                                item={item}

                            ></MenuItem>)
                        }
           
                    </div>
                    {/* .......................................................... */}
{/* 
            <div className='grid md:grid-cols-2 gap-6 border-2 border-red-400'>

                {

                    coffees.map(item => <MenuItem
                        key={item._id}
                        item={item}

                        coffees={coffees}
                        setCoffees={setCoffees}

                    ></MenuItem>)
                }
            </div> */}
                    {/* .......................................................... */}

             
        </div>
    );
};

export default OrderTab;