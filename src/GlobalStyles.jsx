import {createGlobalStyle} from 'styled-components'
import btnoverlay from "./Images/cardoverlay.svg";



const GlobalStyles=createGlobalStyle`
    *{
      text-decoration: none;
      list-style-type: none;
      /* overflow-x: hidden; */
      max-width: 100%;
    }
    body{
     font-size :100% ;
     
font-family:inter;
scroll-behavior: smooth;
p{
    color:"#546285";

    font-size: 18px;
}


    }
    .overlaybutton{
    background-color: ${(props) => props.theme.colors.lightblue};
    padding-block: 1rem;
    background-image: url("${btnoverlay}");
    background-repeat: no-repeat;
  }

`
export default GlobalStyles