import styled from "styled-components"
//import products from '../db.json'
//import Product from "./Product"
//import Admin from '../'
import { StarOutline } from "@mui/icons-material"
import { Link } from "react-router-dom"
import { useHistory } from 'react-router-dom'

const Container = styled.div`
   padding: 20px;
   display: flex;
   flex-wrap: wrap;
   background-color: black;
`
const ProductContainer = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 200px;
  height: 200px;
  position: relative;
  display: flex;
  flex-direction: column;
  color: white;
  padding: 10px 0;
`
const Shape = styled.div`
  display: flex;
  background-color: #45454c;
  height: 160px;
  width: 160px;
  border-radius: 10px;
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  cursor: pointer;
`

const Image = styled.img`
   height: 75%;
   position: absolute;
   top: 25%;
   left: -40px;
   z-index: 2;
`
const Info = styled.div`
   position: absolute;
   bottom: 0;
   z-index: 4;
   width: 70%;
   left: 0;
   right: 0;
   margin: auto;
`
const ProductTitle = styled.div`
   font-size: 14px;
`
const ProductPrice = styled.div`
   font-size: 18px;
   color: #c9c91f;
`
const Products = ({products}) => {
    //console.log(products);

  return (
    <Container>  
                 {products.map((product)=>(
                  <ProductContainer key={product.id } >
                     <Link to={`/products/${product.id}`}>
                  <Shape>
                
                 {product.images && <Image src={product.images[0].url } alt="picture" />}       
                  <StarOutline style={{ position:"absolute",right: "0" }}  />
                   </Shape>
                    <Info>
                        <ProductTitle>{ product.title }</ProductTitle>
                        <ProductPrice> { product.price} </ProductPrice>
                    </Info>
                    </Link>
                    </ProductContainer>
                ))}
            
    </Container>
  )
}

export default Products