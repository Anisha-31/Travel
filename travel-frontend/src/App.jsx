import Itinerary from "./components/Itinerary"
import Login from "./components/Login"
import SignUP from "./components/SignUP"
import Dashboards from "./components/Dashboards"
import {Router , Route , Routes , BrowserRouter} from 'react-router-dom'
function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Itinerary/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/sign-up" element={<SignUP/>}/>
      <Route path="/dashboard" element={<Dashboards/>}/>
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
