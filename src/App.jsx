import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import HomePage from './Home/home'
import Navbar from './Navbar/navbar'
import About from './About/about'
import Contact from './Contact/contact'
import Flames from './Projects/FLAMES/Flames'
import ProjectsHome from './Projects/ProjectHome/ProjectsHome'

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/projects' element={<ProjectsHome/>}/>
        <Route path='/projects/flames' element={<Flames/>}/>
      </Routes>
    </Router>
  )
}

export default App