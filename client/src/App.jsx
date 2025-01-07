
import './App.css'
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import Home from './Pages/home';
import PageNotFound from './Pages/PageNotFound';

function App() {


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>
  },
  {
    path: '*',
    element: <PageNotFound></PageNotFound>
  }
])


  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
