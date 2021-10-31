import userEvent from '@testing-library/user-event';
import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useParams } from 'react-router';

const UpdateProduct = () => {
   const [product,setProduct]=useState(null);
   const {id}=useParams();
  
   useEffect (()=>{
    fetch(`http://localhost:5000/users/${id}`)
    .then(res=>res.json())
    .then(data=>setProduct(data))
     
   },[])

   const handleNameChange=(e)=>{
       const name=e.target.value;
       const updateProduct={...product}
       updateProduct['name']=name;
       setProduct(updateProduct)
   }
   const handlePriceChange=(e)=>{
    const price=e.target.value;
    const updateProduct={...product}
    updateProduct['price']=price;
    setProduct(updateProduct)
}

const handleStockChange=(e)=>{
    const stock=e.target.value;
    const updateProduct={...product}
    updateProduct['stock']=stock;
    setProduct(updateProduct)
}

const HandleUpdateProduct=(e)=>{
    fetch(`http://localhost:5000/users/${id}`,{
        method:'PUT',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(product)
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.modifiedCount>0){
        
            window.location.reload()
        }
    })
    e.preventDefault();
}


    return (
        <div className='text-center'>
         <div>
             <h5>{product?.name}</h5>
             <p>{product?.price}</p>
             <small>{product?.stock}</small>
         </div>
         <div className='w-25 mx-auto'>
             <Form onSubmit={HandleUpdateProduct}>
             
               <Form.Group  className="mb-3" >
                 <Form.Label>Product name</Form.Label>
                 <Form.Control type="text" onChange={handleNameChange}  value={product?.name ||""} />
                 
               </Form.Group>
             
               <Form.Group className="mb-3" >
                 <Form.Label>Price</Form.Label>
                 <Form.Control type="number"  onChange={handlePriceChange}  value={product?.price ||""} />
               </Form.Group>
             
               <Form.Group className="mb-3" controlId="formBasicPassword">
                 <Form.Label>Stock product</Form.Label>
                 <Form.Control type="number"  onChange={handleStockChange} value={product?.stock||""} />
               </Form.Group>
               
              <input className='btn btn-primary' type='submit' value='Add Product'></input>
               
               
             </Form>
         </div>
        </div>
    );
};

export default UpdateProduct;