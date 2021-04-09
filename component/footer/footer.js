import styles from "./footer.module.css";
import {Nav, Navbar} from "react-bootstrap";
import Link from "next/link";
import React from "react";

export default function Footer(){


    return(
        <div className={styles.footer}>

            <div>
                <Navbar>
                    <Link href="/ankward">
                        <Navbar.Brand href="#home" className={styles.link} style={{marginRight: "1.5em", paddingTop: "0.125rem", fontFamily: "Inter-Bold"}}>Ankward</Navbar.Brand>
                    </Link>
                    <Navbar.Toggle />

                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="ml-auto white-text">
                            <span className={"text-muted " + styles.joke + " " + styles.link} >Tout ceci est une immense boutade</span>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>


            </div>

        </div>
    )

}