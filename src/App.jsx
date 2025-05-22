import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import User from './User'

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>  
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Users/:Id' element={<User/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
