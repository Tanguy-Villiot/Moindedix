import styles from '../styles/Home.module.css'
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import Footer from "../component/footer/footer";
import Head from 'next/head'

export default function Home() {

    const router = useRouter();

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

    const [value, setValue] = useState();

    const [dep, setDep] = useState(departement[0])
    const [commune, setCommune] = useState(undefined);
    const [location, setLocation] = useState(undefined);




    function handleChange(evt){

        const val = evt.target.value;

        setValue(val);



    }

    async function handleSubmit(e) {

        e.preventDefault()

        console.log(value);

        if (value > 10000) {

            return router.push("/light");
        } else {

            const response = await fetch("../api/addMoindix", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({adress, value})
            });

            if (response.ok) {
                console.log("ça marche !");

                return router.push("/bad");
            }



        }


    }


    async function getcommune(dep) {

        console.log(dep)

        fetch(`https://geo.api.gouv.fr/departements/${dep}/communes`)
            .then(res => res.json())
            .then(result => {

                setCommune(result)

            })




    }




    useEffect(() =>{



            getcommune(dep.num_dep)


        },
        [dep],
    );





    return (
    <div className={styles.container}>

        <Head>
            <title>AntiMoinsDeDix</title>
            <meta name="Content-Type" content="UTF-8"/>
            <meta name="Content-Language" content="fr"/>
            <meta name="Description" content="Redonnons ensemble l'éclat d'antan à nos villes françaises !"/>
            <meta name="Keywords" content="AntiMoinsDeDix"/>
            <meta name="Copyright" content="Ankward"/>
            <meta name="Author" content="Ankward"/>
            <meta name="Identifier-Url" content="antimoinsdedix.fr"/>
            <meta name="Revisit-After" content="1 day"/>
            <meta name="Robots" content="all"/>
            <meta name="Rating" content="general"/>
            <meta name="Distribution" content="global"/>
            <meta name="Category" content="internet"/>
        </Head>



        <div className={styles.content}>

            <h1 className={styles.title}>#Antimoinsde<span style={{color: "#dd2d2d"}}>10</span></h1>
            <h3 className={styles.subtitle}>Redorons de prestiges nos villes Françaises !</h3>


        </div>


      <div className={"container " + styles.home}>

          <div className={styles.bar}>
          </div>

          <h1 className={styles.maintenance}>SITE EN MAINTENANCE. REVENEZ BIENTÔT METTRE LES GUEUX DEHORS !</h1>


          <div className={styles.next}>

              <h3 className={styles.next_title}>En attendant, n'hésiter pas à nous envoyer un message pour manifester votre soutien à cette noble cause</h3>

              <span className={styles.listLabel}><InstagramIcon/> </span><a href="https://www.instagram.com/ankward.fr/" target="_blank"><span className={styles.listLink}>@ankward.fr</span></a><br/>
              <span className={styles.listLabel}><MailOutlineIcon/> </span><a href="mailto: dehors@antimoinsdedix.fr" target="_blank"><span className={styles.listLink}>dehors@antimoinsdedix.fr</span></a><br/>
              <span className={styles.listLabel}><TwitterIcon/> </span><a href="https://twitter.com/AnkwardCreation" target="_blank"><span className={styles.listLink}>@AnkwardCreation</span></a><br/>




          </div>

      </div>


            <div className={styles.footer}>

                <Footer />

            </div>
        </div>
  )
}
