import styles from "./footer.module.css";
import {Nav, Navbar} from "react-bootstrap";
import Link from "next/link";
import React from "react";

export default function Footer(){


    return(
        <div className={styles.footer}>

            <div>

                    <Link href="/ankward">
                        <span href="/ankward" className={styles.link} style={{marginRight: "1.5em", paddingTop: "0.125rem", fontFamily: "Inter-Bold"}}>Ankward</span>
                    </Link>

            </div>

        </div>
    )

}