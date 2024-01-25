import { useState } from "react"
import styled from "styled-components"
import Products from '../components/Products'
import axios from 'axios'
import useFetch from "../useFetch"
//import e from "cors"

const Container = styled.div`
    margin: 20px auto;
`
const FormContainer = styled.div`
    width: 300px;
    height: 300px;
    margin: 20px auto;
`
const Wrapper = styled.div`
  padding: 30px 20px;
  background-color: whitesmoke;
  display: flex;
  flex-direction: column;
`
const Title = styled.div`
  text-align: center;
  font-weight: 500;
  color: #636161;
`
const Input = styled.input`
    padding: 10px;
    margin: 10px 0;
`
const Button = styled.button`
    border: none;
    padding: 10px;
    margin: 10px 0;
    background-color: #00b241;
    color: white;
    cursor: pointer;
`
const UploadPhoto = styled.button`
    border: none;
    padding: 10px;
    margin: 10px 0;
    background-color: #0d0d0e;
    color: white;
    cursor: pointer;
`
const ProductContainer = styled.div`
  background-color: black;

`
const Loading = styled.div`
   color:yellow;
`
const Error = styled.div`
   color:yellow;
`
const Value = styled.div`

`
const Images = styled.img`

`


const Admin = () => {
    const [images,setImages] = useState([]);
    const [title,setTitle] = useState('');
    const [price,setPrice] = useState('');
    const [imageToRemove,setImageToRemove] = useState(null);
    
    const {data:products, isPending, error} = useFetch('http://localhost:8000/products');

    function handleRemoveImg(imgObj) {
      setImageToRemove(imgObj.public_id);
      axios
      .delete(`http://localhost:8080/${imgObj.public_id}`)
      .then(()=> {
        setImageToRemove(null);
        setImages((prev)=> prev.filter((img)=> img.public_id !== imgObj.public_id));   
      })
     .catch((e)=> console.log(e));
    };

    function handleOpenWidget(){
      
     var myWidget = window.cloudinary.createUploadWidget({
       cloudName: 'dlrairakf', 
       uploadPreset: 'lxj2vtgv',
     }, (error, result) => { 
         if (!error && result && result.event === "success") { 
           // console.log('Done! Here is the image info: ', result.info); 
           setImages( (prev) => [...prev,{url: result.info.url, public_id: result.info.public_id}]);
         }
       }      
     );
     myWidget.open();
    }


   const handleClick = ()=>{
     const product = {images, title, price};

    fetch('http://localhost:8000/products', {
      method: 'POST',
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify(product)
    })
    .then(()=>{
      console.log('new product added');
   
    })
   }

  return (
    <Container>
      <FormContainer >
    <Wrapper>
    <Title>ADD NEW PRODUCTS</Title>
     <Input placeholder="product name"
       required
       value= {title}
       onChange= { (e)=>setTitle(e.target.value) }
     />
     <Input placeholder="product price" 
     required
     value= {price}
     onChange= { (e)=>setPrice(e.target.value) }
     />
     <UploadPhoto onClick={()=> handleOpenWidget()}>upload pictures</UploadPhoto>
     {!isPending && <Button onClick={handleClick} >ADD PRODUCT</Button>}
     {isPending && <Button disabled >Adding PRODUCT...</Button>}
      </Wrapper>
     </FormContainer>
     <ProductContainer>
      {error && <Error>{error}</Error> }
     {isPending && <Loading>loading...</Loading> }

      {products && <Products products={products} 
       imageToRemove={ imageToRemove } handleRemoveImg={handleRemoveImg} 
       />  
       }
     </ProductContainer>
     
    </Container>
  )
}

export default Admin