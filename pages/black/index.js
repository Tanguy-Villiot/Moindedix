import styles from './black.module.css'

import React, {useEffect} from 'react';
import {Navbar} from "react-bootstrap";
import Link from "next/link";
import {useRouter} from "next/router";

export default function Black() {

    const router = useRouter();

    useEffect(() =>{


        if(router.query.keyword === undefined)
        {
            router.push('/')
        }



        },
        [],
    );

    return (
        <>
            <div>
                <Navbar>
                    <Link href="/">
                        <Navbar.Brand href="#home" className={styles.linkToHome}>#Antimoinsde<span style={{color: "#dd2d2d"}}>10</span></Navbar.Brand>
                    </Link>
                    <Navbar.Toggle />

                </Navbar>


            </div>

            <div className="container">


            </div>

            <div className={styles.curtain}>

                {router.query.keyword === undefined ?

                    <>
*
                    </>

                    :

                    <>

                        {router.query.keyword === "paysan" ?

                            <span className={styles.curtain_title}>Papa pourra probablement vous offrir un petit pécule pour quitter votre garconniere</span>

                            :

                            <span className={styles.curtain_title}>Si tu as la dalle, quitte la capitale !</span>



                        }

                    </>



                }



            </div>

        </>


    )
}


