import React,{useContext} from 'react'
import styles from '../styles/footer.module.css'
import Image from 'next/image'
import apps from '../assets/app.jpeg'
import play from '../assets/goo.png'
import fin3 from '../assets/fin3.png'
import { AppState } from '../States/State';

function Footer() {

 const {config} = useContext(AppState)


    return (
        <>
            <div className={styles.fa}>
                <div className={styles.title3}>
                    <div className={styles.imgbox3}>
                        <Image layout='responsive' src={fin3} placeholder="blur" />
                    </div>
                    <div className={styles.textbox3}>
                        Fingspell&reg;
                    </div>
                </div>
            </div>
            <div className={styles.container}>

                <div className={styles.section}>
                    <h3>Developers</h3>
                    <p>
                        <a href="https://richardobiri.live" rel="noreferrer" target="_blank" className={styles.link}>
                            Richard Obiri
                        </a>
                    </p>
                    <p>
                        <a href="tel:" className={styles.link}>
                            Randy Odoom
                        </a>
                    </p>
                    <p>
                        <a href="tel:" className={styles.link}>
                            Gloria Araba
                        </a>
                    </p>

                </div>
                <div className={styles.section}>
                    <h3>Download Mobile App</h3>
                    <p>
                        <div style={{ height: 50, width: 120, cursor: 'pointer' }}>
                            <Image layout='responsive' src={apps} alt="img" placeholder="blur" />
                        </div>
                    </p>

                    <p>
                        <div style={{ height: 50, width: 120, marginTop: 10, cursor: 'pointer' }}>
                            <Image layout='responsive' src={play} alt="img" placeholder="blur" />
                        </div>
                    </p>
                </div>
                <div className={styles.section}>
                    <h3>Acknowledgement</h3>
                    <p style={{ width: 200 }}>
                        Developed under the Supervision of <a href="https://richardobiri.live" rel="noreferrer" className={styles.link}>Dr. Ellis Eghan</a>
                    </p>

                    <p style={{ width: 200 }}>
                        A final year project of the
                        <a href="https://richardobiri.live" className={styles.link}>
                            University of Cape Coast Ghana
                        </a>
                    </p>

                </div>
                <div className={styles.section}>
                    <h3>Version</h3>
                    <p>
                        {config.version}
                    </p>

                </div>
                <div className={styles.section}>
                    <h3>Users</h3>
                    <p style={{ color: '#0070f3', fontSize: 30 }}>
                        {config.userCount}
                    </p>

                </div>
            </div>
        </>

    )
}

export default Footer