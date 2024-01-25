import './App.css';
import Account from './pages/Account';
import Register from './pages/Register';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Admin from './pages/Admin';
import Links from './components/Links';
import Navbar from './components/Navbar';
import ProductDetails from './pages/ProductDetails';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';
import { CurrentUserRole, UserRoles } from './pages/Account' 


function App() {
    
  return (
    <div className="App">
    
      <Navbar/>
      <Links/>
      <Routes>
        <Route  path="/" element={<PublicElement> <Home/></PublicElement> } />
        <Route  path="/account" element={ <PublicElement><Account/></PublicElement> } />
        <Route  path="/products/:id" element={ <PublicElement><ProductDetails/></PublicElement> } />
        <Route  path="/Register" element={ <PublicElement><Register/></PublicElement> } />
        <Route  path="/admin" element={<AdminElement> <Admin/></AdminElement> } />
        <Route  path="*" element={ <NotFound/> } />
      </Routes> 
      <Footer/>
      
    </div>
  );
}

function PublicElement({children}) {
  return <>{children} </>
}
function AdminElement({children}) {
  if(CurrentUserRole === UserRoles.Admin) {
    return <>{children} </>
  }else {
    return <div>Oops!You are not allowed to access this page</div>
  }
  
}

export default App;
