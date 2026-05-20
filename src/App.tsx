import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import "react-router-dom";
import Home from "./pages/landing/Home.tsx";
import "bootstrap/dist/css/bootstrap.css"
function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/home' element={<Home/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
