import {Navbar} from "react-bootstrap";
import Link from "next/link";
import styles from "./communaute.module.css";
import React from "react";

export default function Index(){

    return(

        <div>
            <Navbar>
                <Link href="/">
                    <Navbar.Brand href="#home" className={styles.linkToHome}>#Antimoinsde<span style={{color: "#dd2d2d"}}>10</span></Navbar.Brand>
                </Link>
                <Navbar.Toggle />

            </Navbar>


            <div className="container">

                <h1 className={styles.title}>Merci de votre participation. Grâce à vous nos villes seront bientôt safe</h1>
                <div className={styles.bar}>
                </div>

                <div className={styles.content}>
                    <h3 className={styles.subtitle}>Parler nous sur les réseaux sociaux, et partager votre principale motivation dans cette cause.</h3>
                    <span>Les meilleurs seront utilisées pour notre programme promotionnelle.</span>
                </div>

            </div>


        </div>

    )

}