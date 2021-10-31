import Button from '@restart/ui/esm/Button';
import React,{useRef} from 'react';
import { Form } from 'react-bootstrap';

const Addproduct = () => {
  const nameRef=useRef();
  const priceRef=useRef()
  const stockRef=useRef()

  const handleAddProduct=(e)=>{
     const name=nameRef.current.value
     const price=priceRef.current.value;
     const stock=stockRef.current.value;
     const newProduct={name,price,stock}

     fetch('http://localhost:5000/users',{
       method:"POST",
       headers:{
         'content-type':'application/json'
       },
       body:JSON.stringify(newProduct)
     })
     .then(res=>res.json())
     .then(data=>{
       if(data?.insertedId){
         alert('Product added successfully')
          nameRef.current.value=''
         priceRef.current.value=''
         stockRef.current.value=''
       }

     })
  e.preventDefault()
  console.log('inside submit')
  }

    return (
        <div className='w-50 mx-auto'>
            <h1>this is add product</h1>
            <Form onSubmit={handleAddProduct}>
  <Form.Group  className="mb-3" >
    <Form.Label>Product name</Form.Label>
    <Form.Control type="text" ref={nameRef} placeholder="Enter product name" />
    
  </Form.Group>

  <Form.Group className="mb-3" >
    <Form.Label>Price</Form.Label>
    <Form.Control type="number" ref={priceRef} placeholder="Price" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Stock product</Form.Label>
    <Form.Control type="number" ref={stockRef} placeholder="stock product" />
  </Form.Group>
  
 <input className='btn btn-primary' type='submit' value='Add Product'></input>
  
  
</Form>
        </div>
    );
};

export default Addproduct;