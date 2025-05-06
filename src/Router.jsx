import App from './App'
import Home from './pages/Home/Home'
import Error from './pages/Error/Error'
import About from './pages/About/About'
import Lodgment from './pages/Lodgment/Lodgment'

import { createBrowserRouter } from 'react-router-dom'

const Router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', index: true, element: <Home /> },
      { path: '/logement/:id', element: <Lodgment /> },
      { path: '/About', element: <About /> },
      { path: '*', element: <Error /> },
    ],
  },
])

export default Router