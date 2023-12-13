import React from 'react';
import "./styles.css";


const Card = ({ name, email, id }) => {
   return(
       <div className='bg-light-green dib br3 pa3 ma4 ml5 grow bw2 shadow-5'>
            <img  alt='cat' src= {`https://robohash.org/${id}?set=set4`} />
           <div className='text'>
             <h2> {name} </h2>
             <p> {email} </p>
           </div>
       </div>
    );
  }

export default Card;
