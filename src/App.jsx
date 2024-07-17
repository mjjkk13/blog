import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomeScrens from './Screens/Home/HomeScrens'
import {ThemeContext} from './context/ThemeContext'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AddNewScreen from './Screens/NewIdea/AddNewScreen'

const router=createBrowserRouter([
  {
    path:'/',
    element:<HomeScrens/>
},
{
  path:'/new',
  element:<AddNewScreen/>
}
])
function App() {
  const [count, setCount] = useState(0)
  const [theme, setTheme] = useState('retro')
  return (
    <ThemeContext.Provider value={{theme,setTheme}}>
      <div className='flex flex-col items-center p-4 md:p-10'
      data-theme={theme}>
      <div className='max-w-2xl w-full items-center'>
        <RouterProvider router={router}/>
        </div>
      
      </div>
    </ThemeContext.Provider>
  )
}

export default App
