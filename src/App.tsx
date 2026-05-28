import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import "react-router-dom";
import Home from "./pages/landing/Home.tsx";
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import AllCategory from './pages/landing/AllCategory.tsx';
import Menubar from './component/common/Menubar.tsx';
import TrendingNewsPage from './pages/landing/TrendingNewsPage.tsx';
import Login from './pages/landing/Login.tsx';
import Registration from './pages/landing/Registration.tsx';
function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/all-category' element={<AllCategory/>}/>
      <Route path='/trending-news' element={<TrendingNewsPage/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Registration/>}/>
    </Routes>
      <Menubar/>
    </BrowserRouter>
    </>
  )
}

export default App
