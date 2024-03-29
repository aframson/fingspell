import React, { useState, useEffect, useContext } from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import Image from 'next/image'
import styles from '../styles/App.module.css'
import aImg from '../datasets/hand1_a_bot_seg_1_cropped.jpeg'
import bImg from '../datasets/hand1_b_bot_seg_1_cropped.jpeg'
import cImg from '../datasets/hand1_c_bot_seg_1_cropped.jpeg'
import dImg from '../datasets/hand1_d_bot_seg_1_cropped.jpeg'
import eImg from '../datasets/hand1_e_bot_seg_1_cropped.jpeg'
import fImg from '../datasets/hand1_f_bot_seg_1_cropped.jpeg'
import gImg from '../datasets/hand1_g_bot_seg_1_cropped.jpeg'
import hImg from '../datasets/hand1_h_bot_seg_1_cropped.jpeg'
import iImg from '../datasets/hand1_i_bot_seg_1_cropped.jpeg'
import jImg from '../datasets/hand1_j_bot_seg_1_cropped.jpeg'
import kImg from '../datasets/hand1_k_bot_seg_1_cropped.jpeg'
import lImg from '../datasets/hand1_l_bot_seg_1_cropped.jpeg'
import mImg from '../datasets/hand1_m_bot_seg_1_cropped.jpeg'
import nImg from '../datasets/hand1_n_bot_seg_1_cropped.jpeg'
import oImg from '../datasets/hand1_o_bot_seg_1_cropped.jpeg'
import pImg from '../datasets/hand1_p_bot_seg_1_cropped.jpeg'
import qImg from '../datasets/hand1_q_bot_seg_1_cropped.jpeg'
import rImg from '../datasets/hand1_r_bot_seg_1_cropped.jpeg'
import sImg from '../datasets/hand1_s_bot_seg_1_cropped.jpeg'
import tImg from '../datasets/hand1_t_bot_seg_1_cropped.jpeg'
import uImg from '../datasets/hand1_u_bot_seg_1_cropped.jpeg'
import vImg from '../datasets/hand1_v_bot_seg_1_cropped.jpeg'
import wImg from '../datasets/hand1_w_bot_seg_1_cropped.jpeg'
import xImg from '../datasets/hand1_x_bot_seg_1_cropped.jpeg'
import yImg from '../datasets/hand1_y_bot_seg_1_cropped.jpeg'
import zImg from '../datasets/hand1_z_bot_seg_1_cropped.jpeg'
import db from '../firebase/app'
import Convert from './convert';
import Link from 'next/link';

// alphabets and coresponding ASL alphabets images
const alphabets = {
    a: aImg,
    b: bImg,
    c: cImg,
    d: dImg,
    e: eImg,
    f: fImg,
    g: gImg,
    h: hImg,
    i: iImg,
    j: jImg,
    k: kImg,
    l: lImg,
    m: mImg,
    n: nImg,
    o: oImg,
    p: pImg,
    q: qImg,
    r: rImg,
    s: sImg,
    t: tImg,
    u: uImg,
    v: vImg,
    w: wImg,
    x: xImg,
    y: yImg,
    z: zImg,
    ' ': 'https://i.ibb.co/0jZxXxq/space.png'
}
import { AppState } from '../States/State';
import { getAuth } from "firebase/auth";
import { BiReset } from "react-icons/bi";
import { FaStop, FaMicrophone } from "react-icons/fa";

const auth = getAuth();

function App() {


    const { userData } = useContext(AppState)
    const [text, setText] = useState('Hi there lets begin')
    const [mappedResults, setMappedResults] = useState([])
    const [textArray, setTextArray] = useState([])

    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();



    const PutWordInArray = (text) => {
        const patternToMatch = /[^a-zA-Z]/g; // regular expression to exclude "'" and "," from the text" 
        let array = text.split(patternToMatch)
        setTextArray(array)
        console.log(array)
    }


    // put text in an array on spacebar press
    const onKeyPress = (text) => {
        setText(text)
        PutWordInArray(text)
    }
    useEffect(() => {
        onKeyPress(text)
    }, [])

    useEffect(() => {
        setText(transcript)
        PutWordInArray(transcript)
        console.log(transcript)
    }, [transcript])


    if (!browserSupportsSpeechRecognition) {
        return (
            <Convert>
                <h1>Browser not surported </h1>
            </Convert>
        )
    } else if (!auth.currentUser) {
        return (
            <Convert>
                <h1>Unauthorized Page </h1>
            </Convert>
        )
    } else {
        return (
            <Convert>
                {auth.currentUser && userData ? (
                    <div className={styles.userBox}>
                        <Link href={'/register'}>
                            <div className={styles.userBox_img_arr}>
                                &larr;
                            </div>
                        </Link>
                        <div className={styles.userBox_img}>
                            <Image src={!!userData && userData.photoURL} layout={'responsive'} width={100} height={100} placeholder="blur" blurDataURL={!!userData && userData.photoURL} alt=""/>
                        </div>
                        <div className={styles.userBox_name}>
                            {userData && userData.displayName}
                        </div>
                    </div>
                ) : null}
                <div className={styles.container}>
                    <div className={styles.nav}>
                        <div className={styles.con}>
                            <textarea className={styles.input} onChange={(e) => onKeyPress(e.target.value)} placeholder="Type here..." value={text} />
                        </div>
                        <div className={styles.pane}>
                            <div className={styles.pane_con}>
                                <button className={styles.importbutt}>
                                    Import
                                    &darr;
                                </button>
                                <button className={styles.savebutt}>
                                    Save
                                    &darr;
                                </button>
                                <button  onClick={SpeechRecognition.startListening} className={styles.rec}>
                                    <span style={{padding:5}}>Voice</span>
                                    <FaMicrophone size={10} color={'white'} />
                                </button>
                              
                            </div>
                            <div className={styles.imp}>

                                <p>
                                    you can convert files such us text , pdf , and word files into sign language by using the import button
                                </p>
                                <p>
                                    you can save your converted files by using the save button
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.textbox}>
                        <div className={styles.tb}>
                            {textArray.map((word, index) => (
                                <span key={index} className={styles.eachwords}>
                                    {word.split('').map((letter, index) => (
                                        <Image key={index} width={50} height={50} src={alphabets && alphabets[letter.toLowerCase()]} alt={letter} placeholder={'blur'} blurDataURL={alphabets && alphabets[letter]} />
                                    ))}
                                </span>
                            ))}
                        </div>
                    </div>

                </div>
                {listening ? 
                <div className={styles.record}>
               
                <div onClick={SpeechRecognition.stopListening} className={styles.record_con}>
                    <center>
                        <FaStop size={25} color={'white'} />
                    </center>
                </div>
                <div className={styles.record_con}>
                    <center>
                        <FaMicrophone size={25} color={'white'} />
                    </center>
                </div>
                <div onClick={resetTranscript} className={styles.record_con}>
                    <center>
                        <BiReset size={25} color={'white'} />
                    </center>
                </div>
            </div>
                : null}
                
            </Convert>
        )
    }
}

export default App