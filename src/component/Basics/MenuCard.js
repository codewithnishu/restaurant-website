import React from 'react'

function MenuCard({menuData}) {
     {/* const myStyle = {color:"blue"}               css pass with object*/} 
  return (
    <>
    {/*{menuData.map(()=>{})}             map function array* syntax*/}
    <section className='Main-card--cointainer'>
   {menuData.map((curElem)=>{
    // destructure current element
    const {id, image,  category, price, description}=curElem
    return(
        <>
        <div className="card-container" key={id}>
        <div className="card">
          <div className="card-body">
            <span className='card-number card-circle subtle'>{id}</span>
            <span className="card-author subtle">{category}</span>
           { /*<span className="card-author subtle" style={{color:"red"}}>Breakfast</span>  inline css*/}
           { /*<span className="card-author subtle" style = {myStyle}>Breakfast</span>        apply css object          */}
           <h2 className="card-tittle">{curElem.name}</h2>
           <span className="card-description subtle" >{description}</span>
           <div className="card-read">Read</div>
           <div>
            <img src={image}alt="images" />
           </div>
           <span className="card-tag subtle">Order Now</span>
         </div>
        </div>
      </div>   
      </>
    )
   })} 
    {/*here we create nested component this component pass to resturant component*/}
   
    </section>
    </>
  )
}

export default MenuCard
