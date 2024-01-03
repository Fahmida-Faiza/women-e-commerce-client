import MenuItem from "./menuItem";

const OrderTab = ({ item }) => {
 
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

             
        </div>
    );
};

export default OrderTab;