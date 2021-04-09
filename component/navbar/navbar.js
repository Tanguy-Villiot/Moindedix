import Link from "next/link";
import styles from "./navbar.module.css";
import React from "react";
import {Navbar} from "react-bootstrap";

export default function NavbarSite()
{
    return(
        <Navbar>
            <Link href="/">
                <Navbar.Brand href="#home" className={styles.linkToHome}>#Antimoinsde<span style={{color: "#dd2d2d"}}>10</span></Navbar.Brand>
            </Link>
            <Navbar.Toggle />

        </Navbar>
    )
}