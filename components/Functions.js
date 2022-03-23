import React from 'react'
import styles from '../styles/Functions.module.css'
import { BiUserVoice } from "react-icons/bi";

import { FiShare2 } from "react-icons/fi";
import { HiOutlineDocumentText } from "react-icons/hi";

function Functions() {
  return (
    <div className={styles.container}>
        <div className={styles.items}>

            <div className={styles.item}>
                <div className={styles.imgbox}>
                    <BiUserVoice size={100} color={'#0070f3'} />
                </div>
                <div className={styles.textbox}>
                    <h3>
                        Speech to Sign Langaue Recognition
                    </h3>
                    <p>
                        Fingspell&reg; uses voice regognition to recognize
                        your voice and converts it to sign language
                    </p>
                </div>
            </div>

            <div className={styles.item}>
                <div className={styles.imgbox}>
                    <BiUserVoice size={100} color={'#0070f3'} />
                </div>
                <div className={styles.textbox}>
                    <h3>
                        Speech to Sign Langaue Recognition
                    </h3>
                    <p>
                        Fingspell&reg; uses voice regognition to recognize
                        your voice and converts it to sign language
                    </p>
                </div>
            </div>

            <div className={styles.item}>
                <div className={styles.imgbox}>
                    <BiUserVoice size={100} color={'#0070f3'} />
                </div>
                <div className={styles.textbox}>
                    <h3>
                        Speech to Sign Langaue Recognition
                    </h3>
                    <p>
                        Fingspell&reg; uses voice regognition to recognize
                        your voice and converts it to sign language
                    </p>
                </div>
            </div>

            <div className={styles.item}>
                <div className={styles.imgbox}>
                <HiOutlineDocumentText size={100} color={'#0070f3'} />
                </div>
                <div className={styles.textbox}>
                    <h3>
                        Convert Documents to sign language
                    </h3>
                    <p>
                       Convert documents such as PDFs,Text files and Word Files to 
                       sign language
                    </p>
                </div>
            </div>

            <div className={styles.item}>
                <div className={styles.imgbox}>
                   <FiShare2 size={100} color={'#0070f3'} />
                </div>
                <div className={styles.textbox}>
                    <h3>
                        Share with others
                    </h3>
                    <p>
                        Share your sign language with others ,
                        it can be a deaf person or a friend who wants to have conversations with one.
                    </p>
                </div>
            </div>


        </div>
    </div>
  )
}

export default Functions