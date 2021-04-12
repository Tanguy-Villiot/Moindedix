import {Button, Form, InputGroup, Navbar} from "react-bootstrap";
import Link from "next/link";
import styles from "./rejoindre.module.css";
import React, {useContext, useEffect, useState} from "react";
import {MDBCol, MDBRow} from "mdbreact";
import {useRouter} from "next/router";
import publicIp from "public-ip";
import ToastifyContext from "../../component/toastify/context";
import NavbarSite from "../../component/navbar/navbar";
import checkServer from "../../component/checkServer";
import Footer from "../../component/footer/footer";



export async function checkIp(){

    const server = checkServer();


    const ip = await publicIp.v6({
        fallbackUrls: ["https://ifconfig.co/ip"]
    });

    const responseIp = await fetch(`${server}/api/checkIp`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ip})
    });

    const find = await responseIp.json();

    return find.length > 0;

}

export default function Index(){

    const [loading, setLoading] = useState(true);
    const [find, setFind] = useState(undefined);

    const router = useRouter();
    const toastify = useContext(ToastifyContext);


    const [value, setValue] = useState({
        nom: "",
        prenom: ""
    })

    function handleChangeForm(evt) {
        const val = evt.target.value;
        setValue({
            ...value,
            [evt.target.name]: val
        });

    }


    async function handleSubmit(e) {

        e.preventDefault()

        const ip = await publicIp.v6({
            fallbackUrls: ["https://ifconfig.co/ip"]
        });


        const dep = JSON.parse(router.query.departement);

        const nom = value.nom;
        const prenom = value.prenom;
        const ville = router.query.ville;
        const departement = dep.dep_name;
        const region = dep.region_name;
        const money = router.query.money;

        const server = checkServer();


        const response = await fetch(`${server}/api/addUser`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({nom, prenom, ville, departement, region, money, ip})
        });

        if (response.ok) {
            console.log("ça marche !");

            router.push("/communaute")
        }


    }

    useEffect(() => {



        checkIp()
            .then(res => {

                if(res)
                {
                    setFind(true);

                    setLoading(false);
                }
                else
                {

                    if(router.query.money < 10000 || router.query.departement === "" || router.query.ville === "") {

                        router.push("/");

                    }

                    setLoading(false);

                }

            })


    }, [])





    return(

        <div>

            {loading ?

                <>
                    <span>Loading...</span>
                </>

            :

                <>

                    <NavbarSite />

                    <div className={"container " + styles.container}>






                        <div className={styles.point}>

                        </div>


                        {find ?

                            <>

                                <h1 className={styles.title}>Diantre, il semblerait que vous ayez <br/>déjà apposé votre candidature</h1>
                                <h3 className={styles.subtitle_find}>Vous pouvez toujours convenir de vous rendre sur la page statistique.</h3>

                                <div className={styles.statistiques_button_contain}>

                                    <div className={styles.statistiques_button}>
                                        <Link href="/statistique">
                                            <Button variant="link" className={styles.buttonStats}>
                                                Voir toutes les statistiques
                                            </Button>
                                        </Link>
                                    </div>



                                </div>

                            </>

                            :

                            <>

                                <h1 className={styles.title}>Plus qu'un petit palier, <br/>assurer avec nous votre volonté !</h1>
                                <h3 className={styles.subtitle}>Remplissez votre nom et prénom fictif pour terminer votre participation.</h3>


                                <div className={styles.content}>

                                    <form onSubmit={handleSubmit}>

                                        <MDBRow className={styles.form_row}>
                                            <MDBCol>

                                                <label htmlFor="nom">Nom</label>
                                                <InputGroup hasValidation className={styles.input}>
                                                    <Form.Control
                                                        id="nom"
                                                        type="text"
                                                        name="nom"
                                                        placeholder="Louis"
                                                        aria-describedby="inputGroupPrepend"
                                                        value={value.nom}
                                                        onChange={handleChangeForm}
                                                        required
                                                    />
                                                </InputGroup>


                                            </MDBCol>

                                            <MDBCol>


                                                <label htmlFor="prenom">Prénom</label>
                                                <InputGroup hasValidation className={styles.input}>
                                                    <Form.Control
                                                        id="prenom"
                                                        type="text"
                                                        name="prenom"
                                                        placeholder="Vignac"
                                                        aria-describedby="inputGroupPrepend"
                                                        value={value.prenom}
                                                        onChange={handleChangeForm}
                                                        required
                                                    />
                                                </InputGroup>

                                            </MDBCol>

                                        </MDBRow>
                                        <MDBRow>
                                            {value.nom === "" ?

                                                <Button variant="primary" type="submit" className={styles.button} disabled>
                                                    Valider sa participation
                                                </Button>

                                                :

                                                <>

                                                    {value.prenom === "" ?

                                                        <Button variant="primary" type="submit" className={styles.button}
                                                                disabled>
                                                            Valider sa participation
                                                        </Button>

                                                        :

                                                        <Button variant="primary" type="submit" className={styles.button}>
                                                            Valider sa participation
                                                        </Button>

                                                    }

                                                </>

                                            }
                                        </MDBRow>



                                    </form>
                                </div>

                            </>

                        }


                        <Footer />


                    </div>




                </>



            }




        </div>

    )

}

