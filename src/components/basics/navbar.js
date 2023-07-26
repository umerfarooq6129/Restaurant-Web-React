import React from 'react'

const Navbar = ({ filterItem, menuList }) => {
    return (
        <>
            <nav className="navbar">
                <div className="butn-group">

                    {
                        menuList.map((curElem) => {
                            return (
                                <>
                                    <button className="btn-group__item" onClick={()=>filterItem(curElem)}>{curElem}</button>
                                </>
                            )
                        })
                    }
                    {/* <button className="btn-group__item" onClick={()=>filterItem("breakfast")}>Breakfast</button>
                <button className="btn-group__item" onClick={()=>filterItem("lunch")}>Lunch</button>
                <button className="btn-group__item" onClick={()=>filterItem("evening")}>Evening</button>
                <button className="btn-group__item" onClick={()=>filterItem("dinner")}>Dinner</button> */}
                    {/* <button className="btn-group__item" onClick={()=>newmenuData(Menu)}>All</button> */}
                </div>
            </nav>
        </>
    )
}

export default Navbar
