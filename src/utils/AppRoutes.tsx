import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import OurVehicle from '../pages/OurVehicle'
import OurPackage from '../pages/OurPackage'
import PassengerFeed from '../pages/PassengerFeed'
import Contact from '../pages/Contact'
import Control from './Control'

const AppRoutes = () =>
  <BrowserRouter>
  <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/ourvehicle' element={<Control item={<OurVehicle/>}/>} />
      <Route path='/package' element={<Control item={<OurPackage/>}/>} />
      <Route path='/passengerfeed' element={<Control item={<PassengerFeed/>}/>} />
      <Route path='/contact' element={<Contact/>} />
  </Routes> 
  </BrowserRouter>

export default AppRoutes