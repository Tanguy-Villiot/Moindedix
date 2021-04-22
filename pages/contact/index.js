import styles from './ankward.module.css'
import {Button, Form} from "react-bootstrap";
import {useRouter} from "next/router";
import React from "react";


export default function Ankward(){

    const router = useRouter();


    function handleClick(){

        router.push('/');

    }

    return(

        <div className={"container " + styles.container}>

            <div className={styles.logo}>

                <img className={styles.logo} src="/Logo getout.png"/>

            </div>

            <div className={"p-5 " + styles.content}>

                <h3 className={styles.text}><a href="https://www.instagram.com/ankward.fr" target="_blank" className={styles.link}><img src="/communaute/instagram.svg" className={styles.imgReseaux} alt="instagram" /><span style={{fontFamily: "Inter-Bold"}}>@Ankward.fr</span></a></h3>

                <h3 className={styles.text}><a href="mailto: creation@ankward.fr" target="_blank" className={styles.link}><span style={{fontFamily: "Inter-Bold"}}><img src="/gmail.svg" className={styles.imgReseaux} alt="email" />creation@ankward.fr</span></a></h3>

            </div>

            <div className={styles.button}>
                <Button variant="primary" type="submit" onClick={handleClick} className={styles.but}>
                    Retourner à l'accueil
                </Button>

            </div>

        </div>

    )

}