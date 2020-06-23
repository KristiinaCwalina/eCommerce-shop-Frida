import React from 'react';
import data from '../data';


function Products (props){
   
    const productId =+ props.match.params.id;
   
    const product = data.products.find (p=>p.id===productId);
   
    
    return <div>
        <h1>{product.name}</h1>
    </div>
}

export default Products;