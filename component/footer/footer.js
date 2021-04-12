import styles from "./footer.module.css";
import {Nav, Navbar} from "react-bootstrap";
import Link from "next/link";
import React from "react";

export default function Footer(){


    return(
        <div className={styles.footer}>

            <div>

                    <Link href="/contact">
                        <a className={styles.link}><span href="/contact" className={styles.link} style={{paddingTop: "0.125rem", fontFamily: "Inter-Bold"}}>Nous contacter</span></a>
                    </Link>

            </div>

        </div>
    )

}