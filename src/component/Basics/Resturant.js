import React, { useState } from 'react'
import "./style.css"
import Menu from "./menuApi.js"
import MenuCard from './MenuCard'
import Navbar from './Navbar';
// with the help of this we can access array category
// (new set) we can get not repeated category i get this in oject for convert in array use []
// ...(spread operator ) for help in get data in array form
const UniqueList = [...new Set(Menu.map((curElem)=>{
  return curElem.category
})
),"All"
];
// console.log(UniqueList)
  

function Resturant() {
  // used for Menu
  const [menuData, setMenuData]=useState(Menu)
  // used for menuList
  const [menuList, setMenuList]=useState(UniqueList)
  // console.log(menuData)
  //function
  const filter = (category) =>{
    if(category ==="All"){
      setMenuData(Menu)
      return;
    }
    const updatedList = Menu.filter((curElem )=>{
      return curElem.category===category
    })
    setMenuData(updatedList);
  }

  return (
    <>
    {/* pass filter function to navbar component */}
    <Navbar filter={filter} menuList={menuList} /> 
  
    <MenuCard menuData={menuData}/>   {/*here we are passing prop. prop pass always parent to child*/ }
    </>
  )
}

export default Resturant
