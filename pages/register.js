import React, { useState, useEffect, useContext } from 'react'
import styles from '../styles/Register.module.css'
import Image from 'next/image'
import fin from '../assets/fin2.png'
import Link from 'next/link'
import Footer from './footer'
import db from '../firebase/app'
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { AppState } from "../States/State"
import Dots from "react-activity/dist/Bounce";
import "react-activity/dist/Bounce.css";

const provider = new GoogleAuthProvider();
const auth = getAuth();


function Register() {

    const { userData, setUserData } = useContext(AppState)

    const [isReg, setIsReg] = useState(false)
    const [loading, setLoading] = useState(false)


    // sign out user 
    const signOut = () => {
        auth.signOut()
    }



    const SignUp = () => {
        setLoading(true)
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                console.log('user details ==>', user)
                console.log('user token ==>', token)
                const usersData = {
                    email: user.email,
                    uid: user.uid,
                    displayName: user.displayName,
                    photoURL: user.photoURL
                }
                setUserData(usersData)
                setLoading(false)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                setLoading(false)
                // ...
            });
    }

    //check if user exists already by Email
    useEffect(() => {
        setLoading(true)
        console.log('user', userData)
        auth.onAuthStateChanged(user => {
            if (user) {
                const usersData = {
                    email: user.email,
                    uid: user.uid,
                    displayName: user.displayName,
                    photoURL: user.photoURL
                }
                setUserData(usersData)
                setLoading(false)
            }
            else {
                // User is signed out.
                // ...
                console.log('user is signed out')
                setUserData({})
                setLoading(false)

            }
        });
    }, [])


    return (
        <div className={styles.container}>
            <div className={styles.regcont}>

                {loading ? (
                    <center>
                        <Dots size={30} color={'black'} />
                    </center>
                ) : (
                    <>
                        {auth.currentUser ? (
                            <div className={styles.imgboxu}>
                                <Image layout='responsive' width={50} height={50} src={userData && userData.photoURL} placeholder="blur" blurDataURL={userData && userData.photoURL} />
                            </div>
                        ) : (
                            <div className={styles.imgbox}>
                                <Image layout='responsive' width={50} height={50} src={fin} placeholder="blur" />
                            </div>
                        )}
                        <div className={styles.textbox}>
                            {userData && userData.displayName ? <span>{userData.displayName}</span> : <span>Fingspell&reg;</span>}
                        </div>
                        <div className={styles.textbox2}>
                            <p style={{ fontSize: 13 }}>
                                Data collected from signing in is used to keep track of
                                the number of users using this application, all rights are reserved to the owner of the application.
                                find more on or

                                <span style={{ color: '#0070f3' }}>
                                    <Link href="/terms">
                                        <a target="_blank"> Terms and Conditions</a>
                                    </Link>
                                </span>

                            </p>
                        </div>
                        {auth.currentUser ? (
                            <>
                                <Link href="/app">
                                    <button style={{ backgroundColor: 'black' }} className={styles.butt}>
                                        Continue &rarr;
                                    </button>
                                </Link>
                                <button onClick={() => signOut()} style={{ backgroundColor: '#f1f1f1',color:'black' }} className={styles.butt}>
                                &larr; Sign out 
                                </button>
                            </>
                        ) : (
                            <button onClick={() => SignUp()} className={styles.butt}>
                                Signin With Google
                            </button>
                        )}
                    </>
                )}



            </div>
            <Footer />
        </div>
    )
}

export default Register