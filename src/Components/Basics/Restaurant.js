import React from 'react';
import "./style.css";
import Menu from "./menuApi.js"
import MenuCard from './MenuCard';
import Navbar from './Navbar';


const uniqueList =[ ... new Set( Menu.map((curr)=>{
  return curr.category;
})
),
"All"
];
console.log(uniqueList);

const Restaurant = () => {
  const [menuData, setMenuData] = React.useState(Menu);
  const[menuList] =React.useState(uniqueList);

  const filterItem = (category)=>{

   if(category==="All"){
    setMenuData(Menu);
    return;
   }

    const updatedList = Menu.filter((curr) =>{
      return curr.category === category;
    }); // particular categort k type se hi milega and navbar me show karega then accordingly food of category choosen 
    setMenuData(updatedList);
  };

return(
  <>
  {/* <nav className='navbar'>
<div className='btn-group'>
<button className='btn-group__item' onClick={()=>filterItem("breakfast")}>Breakfast</button>
<button className='btn-group__item' onClick={()=>filterItem("lunch")}>Lunch</button>
<button className='btn-group__item' onClick={()=>filterItem("evening")}>Evening</button>
<button className='btn-group__item' onClick={()=>filterItem("dinner")}>Dinner</button>
<button className='btn-group__item' onClick={()=>setMenuData(Menu)}>All</button>
</div>
  </nav> */}
  {/* This is written in other js file Navbar.js for looping components instead of DRY */}
   
   < Navbar filterItem={filterItem}  menuList={menuList}/>
   {/* two props are passsed in above statement */}
   <MenuCard  menuData={menuData}/>
  </>
);
  
};

export default Restaurant
// default wala part EC6 me aa chuka he update to isliye App.js m import kari restaurant ki file