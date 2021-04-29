import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';

import Film from '../Film';



const Pelicula=()=> {
       
      const {id}= useParams()
      const [data,dataNuevo]=useState([]);


      useEffect( async ()=>{
         const res = await fetch(`http://www.omdbapi.com/?i=${id}&apikey=9af0b419`);
         const datanew= await res.json()
         dataNuevo(datanew)
      }

      )


      return (
         <div>
            <Film movie={data}/>
         </div>
      )
   
}
export default Pelicula;