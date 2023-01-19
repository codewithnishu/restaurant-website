import React from 'react'

function navbar({filter, menuList }) {
  return (
    <>
        {/* navbar create here */}
    <nav className="navbar">
      <div className="btn-group">
        {
          menuList.map((curElem)=>{
            return(
            <button className="btn-group__item" onClick={() =>filter(curElem)}>{curElem}</button>  
            )
          })}
     {/* onClick event fire here apply filter function breakfast pass as a argument identify that user click on breakfast */}
        {/* <button className="btn-group__item" onClick={() =>filter("breakfast")}>Breakfast</button>  
        <button className="btn-group__item" onClick={() =>filter("lunch")}>Lunch</button>
        <button className="btn-group__item" onClick={() =>filter("evening")}>Evening</button>
        <button className="btn-group__item" onClick={() =>filter("dinner")}>Dinner</button> */}
        {/* <button className="btn-group__item" onClick={() =>setMenuData(Menu)}>All</button> */}

      </div>
    </nav>
    </>
  )
}

export default navbar
