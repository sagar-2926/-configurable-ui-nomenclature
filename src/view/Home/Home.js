import React from 'react'
import './Home.css';
import  config from '../../utils/config.json';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
console.log(config);

function Home() {
  return (
    <>
    <div className='main-container'>
    <h1 className='text-center'>{config.title}</h1>
    <p className='text-center'>{config.description}</p>
    <h2>Services</h2>
    <div className="main-card">
     
    {
      config.services.map((serviceData,index) =>{
        const {title, description,price} = serviceData;
        return(
          <div className="card d-flex" key= {index}>
            <div className="card-body">
              <p className='title'>{title}</p>
              <p className='description'>{description}</p>
              <p className='price'> Price: {price}</p>

             </div>
           </div>
          
        )
      })
    }


     </div>
    
    </div>
    
    </>
     
  
  )
}

export default Home