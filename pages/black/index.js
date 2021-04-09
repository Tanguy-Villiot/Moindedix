import styles from './black.module.css'

import React, {useState} from 'react';
import {MDBCol, MDBDataTableV5, MDBRow} from 'mdbreact';
import {useRouter} from "next/router";
import checkServer from "../../component/checkServer";
import {Nav, Navbar, Button, Accordion, Card, Form, InputGroup} from "react-bootstrap";
import Link from "next/link";
import Autocomplete from "@material-ui/lab/Autocomplete";
import {TextField} from "@material-ui/core";

export default function Black() {



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

                    <></>

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


