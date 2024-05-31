import React from 'react'

const MenuCard = ({menuData}) => {
    // console.log(menuData)
    // const myStyle={color:"brown"};//an object is created in JS
    return (
        <> 
        <section className='main-card--cointainer'>
        {
            menuData.map((curElem)=>{

                //destructuring so same piece of code me bar bar curElem likhne ki need nahi he 

       const {id, name,category,image}=curElem;

               return(
                <>
               {/* <div className="card-container" key={curElem.id}> */}
               {/* After destructuring we don't need to write curElem.id instead write id only */}
               <div className="card-container" key={id}> 
               
              <div className="card">
                <div className="card-body">
                <span className="card-number card-circle subtle">{id}</span>
                <span className="card-author subtle" style={{color:"red"}}>{category}</span>
                <h2 className='card-title'>{name}</h2>
                <span className='card-description subtle'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dolorum obcaecati fugiat est odio architecto porro omnis facere hic temporibus.</span>
                <div className='card-read'>Read</div>
    
            </div>
            <img src={image} alt="images" className='card-media'/>
    
            <span className='card-tag subtle' style={{color:"Black"}}>Order Now</span>
    
        </div>
        </div>    
    
                </>
               ) 
            })
        }
        </section>
        


     
        </>
      )
}

export default MenuCard;