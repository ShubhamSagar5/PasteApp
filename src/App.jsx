
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Main from './components/Main'
import Paste from './components/Paste'
import ViewPaste from './components/ViewPaste'

function App() {

  const appRouter = createBrowserRouter([
    {
      path:'/',
      element:<Main/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:"/pastes",
          element:<Paste/>
        },
        {
          path:"/pastes/:id",
          element:<ViewPaste/>
        }
      ]
    }
  ])

  return (
    <> 
    <RouterProvider router={appRouter}/>

    </>
  )
}

export default App
