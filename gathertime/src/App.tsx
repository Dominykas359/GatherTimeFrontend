import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AppRoutes } from './utilities/Routes'
import Registration from './components/authentication/Registration'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate to={AppRoutes.CALENDAR} />} />
        
        <Route path={AppRoutes.SIGN_UP} element={<Registration />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
