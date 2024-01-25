import styled from 'styled-components'
import Search from '../components/Search'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Contact from '../components/Contact'
import useFetch from "../useFetch"


const Container = styled.div`
    
`
const Loading = styled.div`
   color:yellow;
`
const Error = styled.div`
   color:yellow;
`

const Home = () => {
  const {data:products, isPending, error} = useFetch('http://localhost:8000/products');
  
  return (
    <Container>
        <Search/>
        {error && <Error>{error}</Error> }
       {isPending && <Loading>loading...</Loading> }
        {products && <Products products={products} />}
        <Contact/>
        <Newsletter/>
        
    </Container>
  )
}

export default Home