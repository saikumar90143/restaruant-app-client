
import './App.css';
import Header from './components/header/Header';
import Navbar from './components/header/Navbar';
import { Routes,Route } from 'react-router-dom';
import Home from './components/pages/home/Home';
import Contact from './components/pages/Contact/Contact';
import Faq from './components/pages//FAQ/Faq';
import Company from './components/pages/Company/Company';
import Order from './components//pages/order/Order';
import GlobalStyles from './GlobalStyles';
import { ThemeProvider } from 'styled-components';
import AOS from 'aos'
import 'aos/dist/aos.css'
import Footer from './components/footer/Footer';
import SingleItem from './components/pages/Singleitem/SingleItem';
import Addtocart from './components/pages/AddtoCart/Addtocart';
AOS.init()

function App() {

  const theme={
    colors:{
      lightblue:"#35b8be",
      navlink:"#28224b",
      textdark:"red"
    }
  }
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <Header/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/orderpage' element={<Order/>}></Route>
        <Route path='/companypage' element={<Company/>}></Route>
        <Route path='/faqpage' element={<Faq/>}></Route>
        <Route path='/contactpage' element={<Contact/>}></Route>
        <Route path='/singleitem/:id' element={<SingleItem/>}></Route>
        <Route path='/cartpage' element={<Addtocart/>}></Route>
      </Routes>
      <Footer/>
      <GlobalStyles/>
    </div>
    </ThemeProvider>
  );
}

export default App;
