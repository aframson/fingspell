import React, { useState, useEffect, useContext } from 'react';
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Convert from './convert'
import fin2 from '../assets/fin2.png'
import apps from '../assets/app.jpeg'
import play from '../assets/goo.png'
import { Parallax } from 'react-parallax'
import Functions from '../components/Functions'
import { AppState } from '../States/State';
import db from '../firebase/app'
import { getAuth } from "firebase/auth";
const auth = getAuth();

export default function Home() {

  const { config, userData } = useContext(AppState)

  return (
    <Convert>
      <div className={styles.container}>
        {auth.currentUser && userData ? (
          <div className={styles.userBox}>
            <Link href={'/register'}>
              <div className={styles.userBox_img_arr}>
                &rarr;
              </div>
            </Link>
            <div className={styles.userBox_img}>
              <Image src={!!userData && userData.photoURL} layout={'responsive'} width={100} height={100} placeholder="blur" blurDataURL={!!userData && userData.photoURL} />
            </div>
            <div className={styles.userBox_name}>
              {userData && userData.displayName}
            </div>

          </div>
        ) : null}

        <div className={styles.title}>
          <center>
            <div className={styles.imgbox}>
              <Image layout='responsive' src={fin2} placeholder="blur" />
            </div>
          </center>
          <div className={styles.textbox}>
            {config.name}&reg;
          </div>
        </div>
        <div className={styles.textbox2}>
          <p>
            {config.subTitle}
          </p>
          <p className={styles.textboxsub}>
            {config.description}
          </p>
          <p style={{ fontSize: 14 }}>
            {config.version}
          </p>

          <div className={styles.title2}>
            <div className={styles.imgbox2}>
              <Image layout='responsive' src={apps} placeholder="blur" />
            </div>
            <div style={{ margin: 9 }} className={styles.imgbox2}>
              <Image layout='responsive' src={play} placeholder="blur" />
            </div>
          </div>
          <Link href='/register'>
            <button className={styles.start}>Get Started &rarr;</button>
          </Link>
        </div>



        <Parallax
          bgImage={'https://400languages.com/wp-content/uploads/2019/06/american-sign-language-asl-interpreting-AFLS-400languages-pexels.jpeg'}
          strength={-500}
          blur={{ min: -2, max: 3 }}
          style={{ width: '100%', height: '70vh' }}
        >
          <div className={styles.regbox}>
            <h2>
              Become part of this great community
            </h2>
            Help with your creative ideas ideas to create a better world by contributing ideas or reasearch.
            to build up systems to support the development of the sign language.
            <div className={styles.regsub}>
              <Link href='/register'>
                <a className={styles.register}>Contribute &rarr;</a>
              </Link>
            </div>

          </div>
        </Parallax>

        <center>
          <div style={{ fontSize: 50, paddingTop: 100 }} className={styles.textbox}>
            Functions
          </div>
        </center>
        <Functions />

        <Parallax
          bgImage={'https://extended.unco.edu/images/programs/asl-interpreting/asl-english-interpretation-ba-main-banner.jpg'}
          strength={-500}
          blur={{ min: -2, max: 3 }}
          style={{ width: '100%', height: '70vh' }}
        >
          <div className={styles.regbox}>
            <h2 style={{ color: '#0070f3' }}>
              Register to Get Started
            </h2>
            Help with your creative ideas ideas to create a better world by contributing ideas or reasearch.
            to build up systems to support the development of the sign language.
            <div style={{ backgroundColor: '#0070f3' }} className={styles.regsub}>
              <Link href='/register'>
                <a className={styles.register}>Get Started &rarr;</a>
              </Link>
            </div>

          </div>
        </Parallax>




      </div>

    </Convert>
  )
}
