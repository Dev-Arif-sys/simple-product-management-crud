import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Product = () => {
    const [products,setProduct]=useState(null)
    useEffect(()=>{
        fetch('http://localhost:5000/users')
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[])

 const handleDeleteProduct=(id)=>{
     if(window.confirm('are you sure to delete it')){
        fetch(`http://localhost:5000/users/${id}`,{
            method:'DELETE'
        }).then(res=>res.json())
        .then(data=>{
            if(data.deletedCount>0){
                const restProduct=products.filter(product=>product._id!==id);
   
                setProduct(restProduct)
            }
        })
     }
     
 }
    return (
        <div className='w-25 mx-auto'>
            <h1>this is product {products?.length}</h1>
            {
                products?.map(product=>{
                    return(
                        <div className='bg-light text-center p-3 mb-4' key={product._id}>
                            <h5>{product.name}</h5>
                            <p className='text-danger'>${product.price}</p>
                            <small>{product.stock}</small>
                            <br />
                            <Link to={`users/${product._id}`} >
                            <button>update</button>
                            </Link> <button onClick={()=>handleDeleteProduct(product._id)}>Delete</button>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Product;