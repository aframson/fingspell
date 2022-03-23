import '../styles/globals.css'
import { AppState } from '../States/State'
import React,{useState,useEffect} from 'react'


function MyApp({ Component, pageProps }) {

   const [userData,setUserData] = useState({})

  return (
  <AppState.Provider value={{userData,setUserData}}>
     <Component {...pageProps} />
  </AppState.Provider>
  )
}

export default MyApp
