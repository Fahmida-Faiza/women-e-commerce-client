import { useEffect, useState } from "react";

// import MenuItem from "./menuItem";
import { Tab, TabList,  TabPanel,  Tabs } from "react-tabs";
import OrderTab from "../components/OrderTab"
import 'react-tabs/style/react-tabs.css'
// import MenuItem from "./MenuItem";
// import { useLoaderData } from "react-router-dom";
// import MenuItem from "./menuItem";
// import useMenu from "../hooks/useMenu"

const Order = () => {
    //   const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
  
    const [tabIndex, setTabIndex] = useState(0);
    // const [menu] = useMenu();
     const [menu, setMenu] = useState([])
    
    //  const all= menu;
    const Play = menu.filter(item => item.category === 'Play');
    const Nursery = menu.filter(item => item.category === 'Nursery');
    const KG = menu.filter(item => item.category === 'KG');
    const class_1 = menu.filter(item => item.category === 'Class - 1');
    const class_2 = menu.filter(item => item.category === 'Class - 2');
    const class_3 = menu.filter(item => item.category === 'Class - 3');
    const class_4 = menu.filter(item => item.category === 'Class - 4');
    const class_5 = menu.filter(item => item.category === 'Class - 5');
    // console.log(Nursery)

    // ///////////////////////////////////////////////////////

    // data load json file
    // const [menu, setMenu] = useState([])
  useEffect ( ()=> {
    fetch('data.json')
    .then(res=> res.json())
    .then(data =>setMenu(data))

  }, [])




//   //////////////ajaira code

    // const loadedCoffees = useLoaderData();
    // const [coffees, setCoffees] = useState(loadedCoffees)




// /////////////////////
    return (

        <>

            <div>

                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>All</Tab>
                        <Tab>Nursery</Tab>
                        <Tab>Play</Tab>
                        <Tab>KG</Tab>
                        <Tab>Class-1</Tab>
                        <Tab>Class-2</Tab>
                        <Tab>Class-3</Tab>
                        <Tab>Class-4</Tab>
                        <Tab>Class-5</Tab>
                    </TabList>
                    
                   
                    <TabPanel>
                        <OrderTab item={menu}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab item={Nursery}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab item={KG}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab item={Play}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab item={class_1}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab item={class_2}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab item={class_3}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab item={class_4}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab item={class_5}></OrderTab>
                    </TabPanel>
                </Tabs>
            </div>     
        
        {/* <div className="my-10 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3"> */}

{/* {
    menu.map(item=> <MenuItem 
        // item ta menuitem e props pathaitaysi
        key={item.id}

        item={item}
        ></MenuItem>)
} */}


       
        {/* </div> */}


        {/* ///////////// */}




            {/* <div className='grid md:grid-cols-2 gap-6 border-2 border-red-400'>

                {

                    coffees.map(item => <MenuItem
                        key={item._id}
                        item={item}

                        coffees={coffees}
                        setCoffees={setCoffees}

                    ></MenuItem>)
                }
            </div> */}




        </>
        
    );
};

export default Order;