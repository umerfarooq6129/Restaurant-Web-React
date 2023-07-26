import React, { useState } from 'react'
import './style.css'
import Menu from './menuApi'
import MenuData from './menuData'
import Navbar from './navbar'

const uniqueList = [
    ...new Set(
        Menu.map((curElem)=>{
            return curElem.category;
        })
    ),"All",
]
const Resturant = () => {

    const [menuData, newmenuData] = useState(Menu)
    const [menuList, setmenuList] =useState(uniqueList)

    console.log(uniqueList);

    const filterItem = (category) =>{
        if(category==="All"){
            setmenuList(Menu);
            return;
        }
        const updatedItem = Menu.filter((curElem)=>{
            return curElem.category === category;
        })
        newmenuData(updatedItem);
    }

    return (
        <>
            <Navbar filterItem={filterItem} menuList={menuList}/>
            <MenuData menuData={menuData} />
        </>
    )
}

export default Resturant
