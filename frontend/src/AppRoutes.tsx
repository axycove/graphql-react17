// Dependencies
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// Components
import HomePage from './pages/home'
import DashboardPage from './pages/dashboard'
import LoginPage from './pages/login'
import Error404 from './pages/error404'

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/dashboard' element={<DashboardPage />} />
      <Route path='/login' element={<LoginPage currentUrl='/' />} />
      <Route element={<Error404 />} />
    </Routes>
  </Router>
)

export default AppRoutes
