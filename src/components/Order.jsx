import { useEffect, useState } from "react";

// import MenuItem from "./menuItem";
import { Tab, TabList,  TabPanel,  Tabs } from "react-tabs";
import OrderTab from "../components/OrderTab"
import 'react-tabs/style/react-tabs.css'
// import MenuItem from "./menuItem";
// import useMenu from "../hooks/useMenu"

const Order = () => {
    //   const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
  
    const [tabIndex, setTabIndex] = useState(0);
    // const [menu] = useMenu();
     const [menu, setMenu] = useState([])
    
    //  const all= menu;
    const eyeliner = menu.filter(item => item.category === 'eyeliner');
    const kajal = menu.filter(item => item.category === 'kajal');
    const dress = menu.filter(item => item.category === 'dress');
    const shoes= menu.filter(item => item.category === 'shoes');
    const cap = menu.filter(item => item.category === 'cap');

    // ///////////////////////////////////////////////////////

    // data load json file
    // const [menu, setMenu] = useState([])
  useEffect ( ()=> {
    fetch('data.json')
    .then(res=> res.json())
    .then(data =>setMenu(data))

  }, [])
    return (

        <>

            <div>

                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>All</Tab>
                        <Tab>Kajal</Tab>
                        <Tab>Eyeliner</Tab>
                        <Tab>Dress</Tab>
                        <Tab>Shoes</Tab>
                        <Tab>Cap</Tab>
                    </TabList>
                    
                   
                    <TabPanel>
                        <OrderTab item={menu}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab item={kajal}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab item={cap}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab item={dress}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab item={eyeliner}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab item={shoes}></OrderTab>
                    </TabPanel>
                </Tabs>
            </div>     
        
        <div className="my-10 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3">

{/* {
    menu.map(item=> <MenuItem 
        // item ta menuitem e props pathaitaysi
        key={item.id}

        item={item}
        ></MenuItem>)
} */}






       
        </div>

        </>
        
    );
};

export default Order;