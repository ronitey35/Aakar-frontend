import React, { useContext } from 'react'
import { ThemeContext } from './ThemeProvider'

const Consumer = () => {
    const {theme,setTheme} = useContext(ThemeContext)
  return (
    <div>
        <h1>{theme}</h1>
     <button onClick={()=> setTheme('dark')}>
    CLick to change theme
   </button>
    </div>
  )
}

export default Consumer