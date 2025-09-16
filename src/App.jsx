import {BrowserRouter, Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Projects from './pages/Projects'
import Contacts from './pages/Contacts'
import Hero from './component/Hero'


function App() {
 
  return (
    <>
    <BrowserRouter>
    <Routes >
      <Route path='/' element={<Home/>}>
       <Route path='/' element={<Hero/>}  />

      <Route path='*' element={<NotFound/>}  />
       <Route path='contact' element={<Contacts/>}  />
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
