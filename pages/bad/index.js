import styles from './black.module.css'

import React, {useEffect, useState} from 'react';
import {Button} from "react-bootstrap";
import Link from "next/link";
import {useRouter} from "next/router";
import Footer from "../../component/footer/footer";
import NavbarSite from "../../component/navbar/navbar";

import publicIp from "public-ip";
import checkServer from "../../component/checkServer";



export default function Black() {

    const [loading, setLoading] = useState(true)

    const router = useRouter();

    useEffect(() =>{


        if(router.query.keyword === undefined)
        {
            router.push("/")

        }
        else
        {
            setLoading(false);
        }


        },
        [],
    );

    return (
        <>
            <NavbarSite />

            {loading ?

            <>


                </>

            :

                <>


                    <div className="container">

                        <div className={styles.titlecontainer}>
                            <img src="/bad/stop.svg" className={styles.stop} alt="france"/>

                            {router.query.keyword === "renegat" ?

                                <h1 className={styles.title}>Vous n'êtes <span style={{color: "#dd2d2d"}}>toujours</span> pas éligible ! Nous ne sommes pas étonnés.</h1>


                                :

                                <h1 className={styles.title}>Vous n'êtes pas éligible ! Nous ne sommes pas étonnés.</h1>
                            }
                        </div>


                        {router.query.keyword === "paysan" ?

                            <>

                        <span className={styles.subtitle}>Notre communauté souhaiterait cependant vous remercier. <br/>
                            En effet, être un moins de 10 doit être une tare, mais le fait que vous soyez loin de nos villes lumières est tout à votre honneur.</span>

                            </>

                            :
                            <>

                                {router.query.keyword === "renegat" ?

                                    <>

                                <span className={styles.subtitle}>Vous évertuer à vouloir faire partis de notre caste ne vous en donne pas le pouvoir !<br/>
                                    Rejoignez plutôt les vôtres dans un de vos bouis-bouis dévergondés de principe.
                                    </span>

                                    </>

                                    :

                                    <>

                        <span className={styles.subtitle}>Nos villes françaises se doivent d'être nettoyé ! <br/>
                        Vous serez beaucoup plus à votre place dans l'une des centaines de bourgades appauvrie à proximité.
                            </span>

                                    </>

                                }

                            </>



                        }



                        {router.query.keyword === "renegat" ?



                            <div className={styles.button_renegat}>
                                <Link href="/statistique">
                                    <Button variant="link" className={styles.buttonStats} style={{display: "block", margin: "auto"}}>
                                        Voir toutes les statistiques
                                    </Button>
                                </Link>
                            </div>


                            :


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


                        }


                        <div className={styles.reseauxContain}>

                            <h3 className={styles.reseaux_title}>Venez tout de même discutailler avec nous, nous trouverons peut-être une solution</h3>

                            <Link href="https://www.instagram.com/ankward.fr/">
                                <a target="_blank" className={styles.a}><br/><span className={styles.reseaux}><img src="/communaute/instagram.svg" className={styles.imgReseaux} alt="instagram" /> @ankward.fr</span></a>
                            </Link>
                            <Link href="https://twitter.com/AnkwardCreation">
                                <a target="_blank" className={styles.a}><span className={styles.reseaux}><img src="/communaute/twitter.svg" className={styles.imgReseaux} alt="instagram" /> @AnkwardCreation</span></a>
                            </Link>
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

                                    <>
                                        {router.query.keyword === "renegat" ?


                                            <span className={styles.curtain_title}>Votre intelligence est d'une simplicité déconcertante.<br/>
                                            Vous pensiez tout de même pas nous duper ?</span>

                                            :


                                            <span className={styles.curtain_title}>Si tu as la dalle, quitte la capitale ! <br/><span
                                                className={styles.curtain_subtitle}>Ou tout autre ville respectueuses, vous n'êtes pas un sauvage.</span></span>
                                        }

                                    </>




                                }

                            </>



                        }



                    </div>



                </>

            }




        </>


    )
}


