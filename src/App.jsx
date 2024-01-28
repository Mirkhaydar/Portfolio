import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import HEADER from './components/header.jsx'
import HOME from './components/home.jsx'
import FOOTER from './components/footer.jsx'
import CONTACTS from './components/contacts.jsx'
import RESUME from './components/resume.jsx'

function App() {
  

  return (
    <>
      <Router>
        <HEADER />
        <Routes>
          <Route path='/' element={<HOME />} />
          <Route path='/Portfolio/resume' element={<RESUME/>}/>
          <Route path='/Portfolio/contacts' element={<CONTACTS />} />
        </Routes>
        <FOOTER />
      </Router>


    </>
  )
}

export default App
