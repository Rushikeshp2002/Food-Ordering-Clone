import "./App.css";
import HeaderComp from "./components/Header";
// import { Title } from "./components/Header";
import Footer from "./components/Footer";
// import Body from "./components/Body";
import { Outlet } from "react-router-dom";



function App() {
  return (
    <div>
      <HeaderComp />
      <Outlet/>
      <Footer />
    </div>
  );
}



export default App;


