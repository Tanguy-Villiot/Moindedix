import {Button, Nav, Navbar} from "react-bootstrap";
import Link from "next/link";
import styles from "./communaute.module.css";
import React from "react";
import Footer from "../../component/footer/footer";
import NavbarSite from "../../component/navbar/navbar";

export default function Index(){

    return(

        <div>
            <div className={styles.curtain}>

                <span className={styles.curtain_title}>Vous n'êtes sûrement pas franco-gaullois, ni présent sur le sol français depuis treize générations, mais votre participation est chère à nos yeux</span>

            </div>


            <NavbarSite />


            <div className="container">

                <h1 className={styles.title}>Quelle est la suite ?</h1>

                <div className={styles.content}>

                    <div className={styles.step_contains}>
                        <div className={styles.step}>
                            <span className={styles.step_nbr}>1</span>
                        </div>

                        <div className={styles.step_content}>


                                <span className={styles.step_text}>Venez discutailler avec nous sur ce qu'on appele plus communément les "réseaux sociaux" et partager vos motivations dans cette cause noble<span style={{color: "#0004ff"}}>*</span></span>
                            <br/>
                        <Link href="https://www.instagram.com/ankward.fr/">
                            <><br/><span className={styles.reseaux}><img src="/communaute/instagram.svg" className={styles.imgReseaux} alt="instagram" /> @ankward.fr</span></>
                        </Link>
                            <Link href="https://twitter.com/AnkwardCreation">
                                <><span className={styles.reseaux}><img src="/communaute/twitter.svg" className={styles.imgReseaux} alt="instagram" /> @AnkwardCreation</span></>
                            </Link>
                        </div>

                    </div>

                    <div className={styles.step_contains}>
                        <div className={styles.step} style={{backgroundColor: "#fcdede"}}>
                            <span className={styles.step_nbr}>2</span>
                        </div>

                        <div className={styles.step_content}>

                            <span className={styles.step_text}>Faite nous honneur de votre présence sur la page statistique afin de voir l'ampleur du mouvement.</span>

                            <div className={styles.statistiques_button_contain}>

                                <div className={styles.statistiques_button}>
                                    <Link href="/statistique">
                                        <Button variant="link" className={styles.buttonStats}>
                                            Voir toutes les statistiques
                                        </Button>
                                    </Link>
                                </div>

                            </div>

                        </div>

                    </div>

                    <div className={styles.step_contains}>
                        <div className={styles.step} style={{backgroundColor: "#e0fcde"}}>
                            <span className={styles.step_nbr}>3</span>
                        </div>

                        <div className={styles.step_content}>

                            <span className={styles.step_text}>Réunissons vous entre entre personne du même caste et organiser des battus afin de bouter les moins de <span style={{color: "#dd2d2d"}}>10</span> à venir sur le site.</span>

                        </div>

                    </div>




                    <span className={styles.asterix}><span style={{color: "#0004ff"}}>*</span> Les meilleurs arguments seront utilisées pour notre programme promotionnelle.</span>
                </div>

            </div>




            <Footer />

        </div>

    )

}