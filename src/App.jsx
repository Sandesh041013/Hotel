import {Route,Routes} from "react-router-dom"
import Toolbar from "./components/Navigation/Toolbar"
import Home from "./app/Home"
import About from"./app/About"
import Stories from"./app/Stories"
import Contact from"./app/Contact"
import Menu from "./app/Menu"
import Footer from "./components/Navigation/Footer"
function App() {
  return (
    <>
    <div className="">
      <Toolbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/stories" element={<Stories/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/menu" element={<Menu/>}/>
      </Routes>
      <Footer/>
    </div>
    
     
    </>
  )
}
export default App
