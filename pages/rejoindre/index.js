import {Button, Form, InputGroup, Navbar} from "react-bootstrap";
import Link from "next/link";
import styles from "./rejoindre.module.css";
import React, {useContext, useState} from "react";
import {MDBCol, MDBRow} from "mdbreact";
import {useRouter} from "next/router";
import publicIp from "public-ip";
import ToastifyContext from "../../component/toastify/context";
import NavbarSite from "../../component/navbar/navbar";
import checkServer from "../../component/checkServer";

export const getClientIp = async () => await publicIp.v4({
    fallbackUrls: [ "https://ifconfig.co/ip" ]
});

export default function Index({find}){

    const router = useRouter();
    const toastify = useContext(ToastifyContext);


    (async () => {
        console.log(await publicIp.v6({
            fallbackUrls: [ "https://ifconfig.co/ip" ]
        }));
    })();

    if(router.query.money < 10000 || router.query.departement === "" || router.query.ville === "")
    {
        router.push("/");
    }


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

        const response = await fetch("../api/addUser", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({nom, prenom, ville, departement, region, money, ip})
        });

        if (response.ok) {
            console.log("ça marche !");

            router.push("/communaute")
        }


    }



    //VIEW METHODS

    function BOUTON(){

        if(value.nom === "" || value.prenom === "")
        {
            return (
                <Button variant="primary" type="submit" className={styles.button} disabled>
                    Valider sa participation
                </Button>
            )
        }
        else
        {
            return (
                <Button variant="primary" type="submit" className={styles.button}>
                    Valider sa participation
                </Button>
            )
        }

    }


    return(

        <div>
            <NavbarSite />

            <div className={"container " + styles.container}>






                <div className={styles.point}>

                </div>


                {find.length > 0 ?

                    <>

                    <h1 className={styles.title}>Diantre, il s'emblerait que vous ayez <br/>déjà apposer votre candidature</h1>
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

                    <h1 className={styles.title}>Plus qu'un petit palier, <br/>affirmer avec nous votre volonté !</h1>
                    <h3 className={styles.subtitle}>Remplissez votre nom et prénom fictif pour terminer votre participation.</h3>


                    <div className={styles.content}>

                    <Form onSubmit={handleSubmit}>

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

                    <BOUTON />
                    </Form>
                    </div>

                    </>

                }




            </div>


        </div>

    )

}
export async function getServerSideProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library

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


    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            find,
        },
    }
}
