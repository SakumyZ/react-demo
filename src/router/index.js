import { Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Form from '../pages/Form'
import UseMemo from '../pages/UseMemoDemo'

const routes = [
  { path: '/home', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/form', element: <Form /> },
  { path: '/useMemo', element: <UseMemo /> },
  { path: '/', element: <Navigate to="/home" /> }
]

export default routes
