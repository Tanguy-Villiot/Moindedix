import Link from "next/link";
import styles from "./navbar.module.css";
import React from "react";
import {Nav, Navbar} from "react-bootstrap";

export default function NavbarSite()
{
    return(
        <Navbar className={styles.navbar}>
            <Link href="/">
                <Navbar.Brand href="/" className={styles.linkToHome}>#Antimoinsde<span style={{color: "#dd2d2d"}}>10</span></Navbar.Brand>
            </Link>
            <Navbar.Toggle />

            <Navbar.Collapse className="justify-content-end">
                <Nav className="ml-auto white-text">
                    <span className={"text-muted " + styles.joke + " " + styles.link} >Tout ceci est une immense boutade</span>
                </Nav>
            </Navbar.Collapse>

        </Navbar>
    )
}