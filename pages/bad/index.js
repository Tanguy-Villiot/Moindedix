import styles from './black.module.css'

import React, {useEffect} from 'react';
import {Button} from "react-bootstrap";
import Link from "next/link";
import {useRouter} from "next/router";
import Footer from "../../component/footer/footer";
import NavbarSite from "../../component/navbar/navbar";

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
            <NavbarSite />

            <div className="container">

                <h1 className={styles.title}>Vous n'êtes pas éligible ! Nous ne sommes pas étonnés.</h1>


                {router.query.keyword === "paysan" ?

                    <>

                        <span className={styles.subtitle}>Notre communauté souhaiterait cependant vous remercier. <br/>
                            En effet, être un moins de 10 doits être une tarre, mais le fait que vous soyez loin de nos villes lumières est tout à votre honneur.</span>

                    </>

                    :

                    <>

                        <span className={styles.subtitle}>Nos villes françaises se doivent d'être nettoyé ! <br/>
                        Vous serez beaucoup plus à votre place dans l'une des centaines de bourgades appauvrie à proximité.
                            </span>

                    </>

                }


                <div className={styles.also}>

                    <div>
                        <h2 className={styles.also_title}>Votre profil a été enregistré.</h2>

                        <span className={"text-muted "+ styles.also_subtitle}>Grâce à vous nous savons ou se trouve un moins de 10 en plus.</span>

                    </div>


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


                <Footer />


            </div>

            <div className={styles.curtain}>

                {router.query.keyword === undefined ?

                    <>

                    </>

                    :

                    <>

                        {router.query.keyword === "paysan" ?

                            <span className={styles.curtain_title}>Papa pourra probablement vous offrir un petit pécule pour quitter votre garconniere</span>

                            :

                            <span className={styles.curtain_title}>Si tu as la dalle, quitte la capitale ! <br/><span className={styles.curtain_subtitle}>Ou tout autre ville respectueuses, nous ne sommes pas des sauvages.</span></span>



                        }

                    </>



                }



            </div>

        </>


    )
}


