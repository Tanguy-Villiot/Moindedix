import {Nav, Navbar} from "react-bootstrap";
import Link from "next/link";
import styles from "./communaute.module.css";
import React from "react";
import Footer from "../../component/footer/footer";
import NavbarSite from "../../component/navbar/navbar";

export default function Index(){

    return(

        <div>
            <NavbarSite />


            <div className="container">

                <h1 className={styles.title}>Merci de votre participation. Grâce à vous nos villes seront bientôt safe</h1>
                <div className={styles.bar}>
                </div>

                <div className={styles.content}>
                    <h3 className={styles.subtitle}>Parler nous sur les réseaux sociaux, et partager votre principale motivation dans cette cause.</h3>
                    <span>Les meilleurs seront utilisées pour notre programme promotionnelle.</span>
                </div>

            </div>

            <div className={styles.curtain}>

                <span className={styles.curtain_title}>Notre coalition compte maintenant un membre de plus !</span>

            </div>


            <Footer />

        </div>

    )

}