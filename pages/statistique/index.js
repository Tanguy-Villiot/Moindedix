import styles from './statistique.module.css';
import {Accordion, Button, Card, Form, Navbar} from "react-bootstrap";
import {MDBCol, MDBDataTableV5, MDBRow} from "mdbreact";
import {TextField} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import React, {useState} from "react";
import {useRouter} from "next/router";
import checkServer from "../../component/checkServer";
import Link from "next/link";
import NavbarSite from "../../component/navbar/navbar";
import Footer from "../../component/footer/footer";
import {map} from "react-bootstrap/ElementChildren";

export default function Statistique({table, countUser, countGueux}){

    const departement = [
        {
            num_dep: "01",
            dep_name: "Ain",
            region_name: "Auvergne-Rhône-Alpes"
        },
        {
            num_dep: "02",
            dep_name: "Aisne",
            region_name: "Hauts-de-France"
        },
        {
            num_dep: "03",
            dep_name: "Allier",
            region_name: "Auvergne-Rhône-Alpes"
        },
        {
            num_dep: "04",
            dep_name: "Alpes-de-Haute-Provence",
            region_name: "Provence-Alpes-Côte d'Azur"
        },
        {
            num_dep: "05",
            dep_name: "Hautes-Alpes",
            region_name: "Provence-Alpes-Côte d'Azur"
        },
        {
            num_dep: "06",
            dep_name: "Alpes-Maritimes",
            region_name: "Provence-Alpes-Côte d'Azur"
        },
        {
            num_dep: "07",
            dep_name: "Ardèche",
            region_name: "Auvergne-Rhône-Alpes"
        },
        {
            num_dep: "08",
            dep_name: "Ardennes",
            region_name: "Grand Est"
        },
        {
            num_dep: "09",
            dep_name: "Ariège",
            region_name: "Occitanie"
        },
        {
            num_dep: 10,
            dep_name: "Aube",
            region_name: "Grand Est"
        },
        {
            num_dep: 11,
            dep_name: "Aude",
            region_name: "Occitanie"
        },
        {
            num_dep: 12,
            dep_name: "Aveyron",
            region_name: "Occitanie"
        },
        {
            num_dep: 13,
            dep_name: "Bouches-du-Rhône",
            region_name: "Provence-Alpes-Côte d'Azur"
        },
        {
            num_dep: 14,
            dep_name: "Calvados",
            region_name: "Normandie"
        },
        {
            num_dep: 15,
            dep_name: "Cantal",
            region_name: "Auvergne-Rhône-Alpes"
        },
        {
            num_dep: 16,
            dep_name: "Charente",
            region_name: "Nouvelle-Aquitaine"
        },
        {
            num_dep: 17,
            dep_name: "Charente-Maritime",
            region_name: "Nouvelle-Aquitaine"
        },
        {
            num_dep: 18,
            dep_name: "Cher",
            region_name: "Centre-Val de Loire"
        },
        {
            num_dep: 19,
            dep_name: "Corrèze",
            region_name: "Nouvelle-Aquitaine"
        },
        {
            num_dep: 21,
            dep_name: "Côte-d'Or",
            region_name: "Bourgogne-Franche-Comté"
        },
        {
            num_dep: 22,
            dep_name: "Côtes-d'Armor",
            region_name: "Bretagne"
        },
        {
            num_dep: 23,
            dep_name: "Creuse",
            region_name: "Nouvelle-Aquitaine"
        },
        {
            num_dep: 24,
            dep_name: "Dordogne",
            region_name: "Nouvelle-Aquitaine"
        },
        {
            num_dep: 25,
            dep_name: "Doubs",
            region_name: "Bourgogne-Franche-Comté"
        },
        {
            num_dep: 26,
            dep_name: "Drôme",
            region_name: "Auvergne-Rhône-Alpes"
        },
        {
            num_dep: 27,
            dep_name: "Eure",
            region_name: "Normandie"
        },
        {
            num_dep: 28,
            dep_name: "Eure-et-Loir",
            region_name: "Centre-Val de Loire"
        },
        {
            num_dep: 29,
            dep_name: "Finistère",
            region_name: "Bretagne"
        },
        {
            num_dep: "2A",
            dep_name: "Corse-du-Sud",
            region_name: "Corse"
        },
        {
            num_dep: "2B",
            dep_name: "Haute-Corse",
            region_name: "Corse"
        },
        {
            num_dep: 30,
            dep_name: "Gard",
            region_name: "Occitanie"
        },
        {
            num_dep: 31,
            dep_name: "Haute-Garonne",
            region_name: "Occitanie"
        },
        {
            num_dep: 32,
            dep_name: "Gers",
            region_name: "Occitanie"
        },
        {
            num_dep: 33,
            dep_name: "Gironde",
            region_name: "Nouvelle-Aquitaine"
        },
        {
            num_dep: 34,
            dep_name: "Hérault",
            region_name: "Occitanie"
        },
        {
            num_dep: 35,
            dep_name: "Ille-et-Vilaine",
            region_name: "Bretagne"
        },
        {
            num_dep: 36,
            dep_name: "Indre",
            region_name: "Centre-Val de Loire"
        },
        {
            num_dep: 37,
            dep_name: "Indre-et-Loire",
            region_name: "Centre-Val de Loire"
        },
        {
            num_dep: 38,
            dep_name: "Isère",
            region_name: "Auvergne-Rhône-Alpes"
        },
        {
            num_dep: 39,
            dep_name: "Jura",
            region_name: "Bourgogne-Franche-Comté"
        },
        {
            num_dep: 40,
            dep_name: "Landes",
            region_name: "Nouvelle-Aquitaine"
        },
        {
            num_dep: 41,
            dep_name: "Loir-et-Cher",
            region_name: "Centre-Val de Loire"
        },
        {
            num_dep: 42,
            dep_name: "Loire",
            region_name: "Auvergne-Rhône-Alpes"
        },
        {
            num_dep: 43,
            dep_name: "Haute-Loire",
            region_name: "Auvergne-Rhône-Alpes"
        },
        {
            num_dep: 44,
            dep_name: "Loire-Atlantique",
            region_name: "Pays de la Loire"
        },
        {
            num_dep: 45,
            dep_name: "Loiret",
            region_name: "Centre-Val de Loire"
        },
        {
            num_dep: 46,
            dep_name: "Lot",
            region_name: "Occitanie"
        },
        {
            num_dep: 47,
            dep_name: "Lot-et-Garonne",
            region_name: "Nouvelle-Aquitaine"
        },
        {
            num_dep: 48,
            dep_name: "Lozère",
            region_name: "Occitanie"
        },
        {
            num_dep: 49,
            dep_name: "Maine-et-Loire",
            region_name: "Pays de la Loire"
        },
        {
            num_dep: 50,
            dep_name: "Manche",
            region_name: "Normandie"
        },
        {
            num_dep: 51,
            dep_name: "Marne",
            region_name: "Grand Est"
        },
        {
            num_dep: 52,
            dep_name: "Haute-Marne",
            region_name: "Grand Est"
        },
        {
            num_dep: 53,
            dep_name: "Mayenne",
            region_name: "Pays de la Loire"
        },
        {
            num_dep: 54,
            dep_name: "Meurthe-et-Moselle",
            region_name: "Grand Est"
        },
        {
            num_dep: 55,
            dep_name: "Meuse",
            region_name: "Grand Est"
        },
        {
            num_dep: 56,
            dep_name: "Morbihan",
            region_name: "Bretagne"
        },
        {
            num_dep: 57,
            dep_name: "Moselle",
            region_name: "Grand Est"
        },
        {
            num_dep: 58,
            dep_name: "Nièvre",
            region_name: "Bourgogne-Franche-Comté"
        },
        {
            num_dep: 59,
            dep_name: "Nord",
            region_name: "Hauts-de-France"
        },
        {
            num_dep: 60,
            dep_name: "Oise",
            region_name: "Hauts-de-France"
        },
        {
            num_dep: 61,
            dep_name: "Orne",
            region_name: "Normandie"
        },
        {
            num_dep: 62,
            dep_name: "Pas-de-Calais",
            region_name: "Hauts-de-France"
        },
        {
            num_dep: 63,
            dep_name: "Puy-de-Dôme",
            region_name: "Auvergne-Rhône-Alpes"
        },
        {
            num_dep: 64,
            dep_name: "Pyrénées-Atlantiques",
            region_name: "Nouvelle-Aquitaine"
        },
        {
            num_dep: 65,
            dep_name: "Hautes-Pyrénées",
            region_name: "Occitanie"
        },
        {
            num_dep: 66,
            dep_name: "Pyrénées-Orientales",
            region_name: "Occitanie"
        },
        {
            num_dep: 67,
            dep_name: "Bas-Rhin",
            region_name: "Grand Est"
        },
        {
            num_dep: 68,
            dep_name: "Haut-Rhin",
            region_name: "Grand Est"
        },
        {
            num_dep: 69,
            dep_name: "Rhône",
            region_name: "Auvergne-Rhône-Alpes"
        },
        {
            num_dep: 70,
            dep_name: "Haute-Saône",
            region_name: "Bourgogne-Franche-Comté"
        },
        {
            num_dep: 71,
            dep_name: "Saône-et-Loire",
            region_name: "Bourgogne-Franche-Comté"
        },
        {
            num_dep: 72,
            dep_name: "Sarthe",
            region_name: "Pays de la Loire"
        },
        {
            num_dep: 73,
            dep_name: "Savoie",
            region_name: "Auvergne-Rhône-Alpes"
        },
        {
            num_dep: 74,
            dep_name: "Haute-Savoie",
            region_name: "Auvergne-Rhône-Alpes"
        },
        {
            num_dep: 75,
            dep_name: "Paris",
            region_name: "Île-de-France"
        },
        {
            num_dep: 76,
            dep_name: "Seine-Maritime",
            region_name: "Normandie"
        },
        {
            num_dep: 77,
            dep_name: "Seine-et-Marne",
            region_name: "Île-de-France"
        },
        {
            num_dep: 78,
            dep_name: "Yvelines",
            region_name: "Île-de-France"
        },
        {
            num_dep: 79,
            dep_name: "Deux-Sèvres",
            region_name: "Nouvelle-Aquitaine"
        },
        {
            num_dep: 80,
            dep_name: "Somme",
            region_name: "Hauts-de-France"
        },
        {
            num_dep: 81,
            dep_name: "Tarn",
            region_name: "Occitanie"
        },
        {
            num_dep: 82,
            dep_name: "Tarn-et-Garonne",
            region_name: "Occitanie"
        },
        {
            num_dep: 83,
            dep_name: "Var",
            region_name: "Provence-Alpes-Côte d'Azur"
        },
        {
            num_dep: 84,
            dep_name: "Vaucluse",
            region_name: "Provence-Alpes-Côte d'Azur"
        },
        {
            num_dep: 85,
            dep_name: "Vendée",
            region_name: "Pays de la Loire"
        },
        {
            num_dep: 86,
            dep_name: "Vienne",
            region_name: "Nouvelle-Aquitaine"
        },
        {
            num_dep: 87,
            dep_name: "Haute-Vienne",
            region_name: "Nouvelle-Aquitaine"
        },
        {
            num_dep: 88,
            dep_name: "Vosges",
            region_name: "Grand Est"
        },
        {
            num_dep: 89,
            dep_name: "Yonne",
            region_name: "Bourgogne-Franche-Comté"
        },
        {
            num_dep: 90,
            dep_name: "Territoire de Belfort",
            region_name: "Bourgogne-Franche-Comté"
        },
        {
            num_dep: 91,
            dep_name: "Essonne",
            region_name: "Île-de-France"
        },
        {
            num_dep: 92,
            dep_name: "Hauts-de-Seine",
            region_name: "Île-de-France"
        },
        {
            num_dep: 93,
            dep_name: "Seine-Saint-Denis",
            region_name: "Île-de-France"
        },
        {
            num_dep: 94,
            dep_name: "Val-de-Marne",
            region_name: "Île-de-France"
        },
        {
            num_dep: 95,
            dep_name: "Val-d'Oise",
            region_name: "Île-de-France"
        },
        {
            num_dep: 971,
            dep_name: "Guadeloupe",
            region_name: "Guadeloupe"
        },
        {
            num_dep: 972,
            dep_name: "Martinique",
            region_name: "Martinique"
        },
        {
            num_dep: 973,
            dep_name: "Guyane",
            region_name: "Guyane"
        },
        {
            num_dep: 974,
            dep_name: "La Réunion",
            region_name: "La Réunion"
        },
        {
            num_dep: 976,
            dep_name: "Mayotte",
            region_name: "Mayotte"
        }
    ];

    const régions = [
        "Auvergne-Rhône-Alpes",
        "Bourgogne-Franche-Comté",
        "Bretagne",
        "Centre-Val de Loire",
        "Corse",
        "Grand Est",
        "Hauts-de-France",
        "Île-de-France",
        "Normandie",
        "Nouvelle-Aquitaine",
        "Occitanie",
        "Pays de la Loire",
        "Provence-Alpes-Côte d'Azur"
    ]

    const [dep, setDep] = useState(departement[0])
    const [region, setRegion] = useState(régions[0])
    const [commune, setCommune] = useState(undefined);
    const [ville, setVille] = useState("Paris");

    //RESULTATS
    const [result, setResult] = useState(undefined)

    const router = useRouter()


    let lastMoinsDix = {
            columns: [
                {
                    label: 'Ville',
                    field: `ville`,
                    width: 150,
                    attributes: {
                        'aria-controls': 'DataTable',
                        'aria-label': 'Name',
                    },
                },
                {
                    label: 'Department',
                    field: 'departement',
                    width: 270,
                },
                {
                    label: 'Région',
                    field: 'Region',
                    width: 200,
                },
                {
                    label: 'Salaire',
                    field: 'money',
                    sort: 'asc',
                    width: 100,
                }
            ],
        }



    const rows = table.rows[0];

    lastMoinsDix = {
        ...lastMoinsDix,
        rows
    }



    function handleSubmit(){

    }


    //EFFECTS METHODS

    async function handleClickVille(e) {

        e.preventDefault();

        const server = checkServer();

        const res = await fetch(`${server}/api/getGueuxByVille`, {
            method: "Post",
            body:JSON.stringify({ ville }),
            headers: {"Content-Type": "application/json"},

        });

        let resul = [
            {
                type: "ville"
            }
        ]

        resul.push(await res.json())


        setResult(resul);
    }

    async function handleClickDepartement(e) {

        e.preventDefault();

        const server = checkServer();

        const departement = dep.dep_name;

        const res = await fetch(`${server}/api/getGueuxByDepartement`, {
            method: "Post",
            body:JSON.stringify({ departement }),
            headers: {"Content-Type": "application/json"},

        });

        let resul = [
            {
                type: "departement"
            }
        ]

        resul.push(await res.json())

        setResult(resul);
    }

    async function handleClickRegion(e) {

        e.preventDefault();

        const server = checkServer();

        const res = await fetch(`${server}/api/getGueuxByRegion`, {
            method: "Post",
            body:JSON.stringify({ region }),
            headers: {"Content-Type": "application/json"},

        });

        let resul = [
            {
                type: "région"
            }
        ]

        resul.push(await res.json())

        console.log(resul);

        setResult(resul);
    }

    //VIEW METHODS

    function BOUTONVILLE(){

        if(ville == "")
        {
            return (
                <Button variant="primary" type="submit" className={styles.button} disabled>
                    Valider
                </Button>
            )
        }
        else
        {
            return (
                <Button variant="primary" type="submit" className={styles.button}>
                    Valider
                </Button>
            )
        }

    }

    function BOUTONDEP(){

        if(dep == null)
        {
            return (
                <Button variant="primary" type="submit" className={styles.button} disabled>
                    Valider
                </Button>
            )
        }
        else
        {
            return (
                <Button variant="primary" type="submit" className={styles.button}>
                    Valider
                </Button>
            )
        }

    }

    function BOUTONREGION(){

        if(region == null)
        {
            return (
                <Button variant="primary" type="submit" className={styles.button} disabled>
                    Valider
                </Button>
            )
        }
        else
        {
            return (
                <Button variant="primary" type="submit" className={styles.button}>
                    Valider
                </Button>
            )
        }

    }

    return(
        <div>
            <NavbarSite />
            <div className="container">

                <h1 className={styles.title}>Toutes nos statistiques</h1>
                <h3 className={styles.subtitle}>Ouvrez bien vos esgourdes, ce que vous allez voir peut-être choquant.</h3>

                <div className={styles.preStats}>
                        <div className={styles.preStats_item}>

                            <h3 className={styles.preStats_title}>Membres de la coalition</h3>

                            <span className={styles.preStats_stat}>{countUser}</span>

                        </div>

                        <div className={styles.preStats_item}>

                            <h3 className={styles.preStats_title}>Moins de 10 repéré</h3>

                            <span className={styles.preStats_stat}>{countGueux}</span>


                        </div>
                </div>

                <Accordion defaultActiveKey="1">
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                <img src="/statistique/down-chevron.svg" alt="down arrows" className={styles.Accordion_img}/>Statistiques Moins de <span style={{color: "#dd2d2d"}}>10</span>
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <div className={styles.Moinsdedix}>


                                <h3 className={styles.Moinsdedix_last}>Derniers moins de 10 enregistrés</h3>

                                <MDBDataTableV5 hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} data={lastMoinsDix} proSelect />

                                <MDBRow>
                                    <MDBCol>
                                        <h3 className={styles.search}>Trouver les gueux par ville !</h3>

                                        <Form onSubmit={handleClickVille}>
                                            <MDBRow>
                                                <MDBCol>
                                                    <TextField
                                                        variant="standard"
                                                        label="Ville"
                                                        value={ville}
                                                        onChange={(event) => {
                                                            setVille(event.target.value);
                                                        } }
                                                        className={styles.field}
                                                    />
                                                </MDBCol>

                                            </MDBRow>

                                            <BOUTONVILLE />


                                        </Form>
                                    </MDBCol>
                                    <MDBCol>
                                        <h3 className={styles.search} style={{color: "#ddb12d"}}>Trouver les gueux par région !</h3>

                                        <Form onSubmit={handleClickRegion}>
                                            <MDBRow>
                                                <MDBCol>
                                                    <Autocomplete
                                                        // multiple
                                                        options={régions}
                                                        // getOptionLabel={(option) => option.dep_name}
                                                        onChange={(event, newValue) => {
                                                            setRegion(newValue);
                                                        }}
                                                        value={region}
                                                        renderInput={params => (
                                                            <TextField
                                                                {...params}
                                                                variant="standard"
                                                                label="Région"
                                                                className={styles.field}
                                                            />
                                                        )}
                                                    />
                                                </MDBCol>
                                            </MDBRow>

                                            <BOUTONREGION />
                                        </Form>

                                    </MDBCol>

                                    <MDBCol>
                                        <h3 className={styles.search} style={{color: "#5cdd2d"}}>Trouver les gueux par département !</h3>


                                        <Form onSubmit={handleClickDepartement}>
                                            <MDBRow>
                                                <MDBCol>
                                                    <Autocomplete
                                                        // multiple
                                                        options={departement}
                                                        getOptionLabel={(option) => option.dep_name}
                                                        onChange={(event, newValue) => {


                                                            console.log(newValue);
                                                            setDep(newValue);
                                                        }}
                                                        value={dep}
                                                        renderInput={params => (
                                                            <TextField
                                                                {...params}
                                                                variant="standard"
                                                                label="Département"
                                                                className={styles.field}
                                                            />
                                                        )}
                                                    />
                                                </MDBCol>


                                            </MDBRow>

                                            <BOUTONDEP />
                                        </Form>
                                    </MDBCol>


                                </MDBRow>
                                <MDBRow>

                                    <MDBCol>

                                        {result === undefined ?

                                            <>
                                            </>

                                            :

                                            result.length === 0 ?

                                                <div className={styles.Results}>
                                                    <span className={styles.Results_content}>Aucun pauvre trouvé. La pureté il est conservé.</span>
                                                </div>

                                                :



                                                <div className={styles.Results}>
                                                    <span>Il y a {result[1].length} gueux dans {result[0].type === "departement" ? "ce " :  "cette "}{result[0].type}</span>
                                                </div>
                                        }

                                    </MDBCol>


                                </MDBRow>
                            </div>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>

                <Accordion defaultActiveKey="1" className={styles.accordion}>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                <img src="/statistique/down-chevron.svg" alt="down arrows" className={styles.Accordion_img}/>Statistiques membres du partis
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <>
                            </>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>

                <h1 className={styles.news}>De nouvelles statistiques arrivent tout les jours !</h1>


            </div>
            <Footer />
        </div>
    )

}
export async function getServerSideProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library

    const server = checkServer();

    const res = await fetch(`${server}/api/getGueux`, {
        method: "GET",
        headers: {"Content-Type": "application/json"}
    });

    const resJson = await res.json()

    const table = {
        rows: [
            resJson
        ]
    }


    const res1 = await fetch(`${server}/api/getCountUser`, {
        method: "GET",
        headers: {"Content-Type": "application/json"}
    });

    const countUser = await res1.json()

    const res2 = await fetch(`${server}/api/getCountGueux`, {
        method: "GET",
        headers: {"Content-Type": "application/json"}
    });

    const countGueux = await res2.json()

    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            table,
            countUser,
            countGueux,
        },
    }
}


