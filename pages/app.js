import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from '../styles/App.module.css'
import { BiImport } from "react-icons/bi";
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
import Convert from './convert';

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
function App() {

    const [text, setText] = useState('Hi there lets begin')
    const [mappedResults, setMappedResults] = useState([])
    const [textArray, setTextArray] = useState([])

    const PutWordInArray = (text) => {
        let array = text.split(' ')
        setTextArray(array)
        console.log(array)
    }

    const extractPDF = () => {
        pdfExtract.extract('../his.pdf', options, (err, data) => {
            if (err) return console.log(err);
            console.log(data);
        });
    }

    // put text in an array on spacebar press
    const onKeyPress = (text) => {
        setText(text)
        PutWordInArray(text)
    }

    // set words to mapped alphabets
    const mapAlphabets = (text) => {
        let mapped = text.split('').map(letter => {
            return alphabets[letter]
        })
    }

    useEffect(() => {
        onKeyPress(text)
    }, [])

    return (
        <Convert>
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
                                    <Image key={index} width={50} height={50} src={alphabets[letter.toLowerCase()]} alt={letter} placeholder={'blur'} blurDataURL={alphabets[letter]} />
                                ))}
                            </span>
                        ))}
                    </div>
                </div>

            </div>
        </Convert>
    )
}

export default App