import 'regenerator-runtime/runtime'
import '../styles/globals.css'
import { AppState } from '../States/State'
import React,{useState,useEffect} from 'react'




function MyApp({ Component, pageProps }) {

   const Config = {
      version:'v1.0.0 Beta',
      userCount:13,
      name:'Fingspell',
      description:`
      Fingspell® is a free and open source application that 
      converts text into sign language , voice to signlanguage and sign language to text. 
      It uses the ASL (American Sign Language) 
      alphabet to convert text into sign language.This standard 
      is what the GSL (Ghanaian Sign Language) is based on.`,
      subTitle:'The official Sign langaue Application'
   }

   const [userData,setUserData] = useState({})
   const [config,setConfig] = useState(Config)


 
  return (
  <AppState.Provider value={{userData,setUserData,config}}>
     <Component {...pageProps} />
  </AppState.Provider>
  )
}

export default MyApp
