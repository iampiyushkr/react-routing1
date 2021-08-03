import { Route, Switch } from 'react-router-dom';
import './App.css';
import Nav from './component/Navbar';
import Allpro from "./component/All-Product"
import ProductDetail from "./component/ProductDetail"
import Navbar1 from "./component/Navbar1"
function App() {

    const Home=()=>{
       return <p>Home</p> 
    }
  const Contact = () => {
    return <p>Contact</p>
  }
    const About=()=>{
       return <p>about</p> 
    }
  const Service = () => {
    return <p>service</p>
  }
   const Login = () => {
    return <p>Login</p>
  }
  
  return (
    <div className="App">
      <Nav />
       <hr />
      <hr />
      <Navbar1/>
      <Switch>
     <Route exact path="/"><Home/></Route>
      <Route exact path="/contact"><Contact /></Route>
       <Route exact path="/about"><About/></Route>
      <Route exact path="/service"><Service /></Route>
        <Route exact path="/login"><Login /></Route>

        {/* ............................................................................................ */}

        <Route exact path="/home">Home</Route>
        <Route exact path="/allproduct/"><Allpro /></Route>
        <Route exact path="/allproduct/:id">
          
          <ProductDetail/>
        </Route>
        
        <Route>Page Not Found</Route>
      </Switch>
     
    </div>
  );
 
}

export default App;
