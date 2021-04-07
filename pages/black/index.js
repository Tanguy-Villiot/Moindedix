import styles from './black.module.css'


import React, {useState} from 'react';
import { MDBDataTableV5 } from 'mdbreact';
import {useRouter} from "next/router";
import checkServer from "../../component/checkServer";

export default function Black({table}) {

    const [rows, setRows] = useState(table)
    const router = useRouter()


    const [columns, setColumns] = React.useState([
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
        ]
    );


    console.log(router.query);

    return (
        <>
            <div className="container">

                <h1 className={styles.title}>Merci de votre participation. Grâce à vous nous s'avons qu'il y a un moins de 10 en plus à chasser de VILLES </h1>
                <MDBDataTableV5 hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} columns={columns} rows={rows} proSelect />



            </div>

            <div className={styles.curtain}>

                {router.query.keyword === undefined ?

                    <></>

                    :

                    <>

                        {router.query.keyword === "paysan" ?

                            <span className={styles.curtain_title}>Papa pourra probablement vous offrir un petit pécule pour quitter votre garconniere</span>

                            :

                            <span className={styles.curtain_title}>Si tu as la dalle, quitte la capitale !</span>



                        }

                    </>



                }



            </div>

        </>


    )
}

export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library

    const server = checkServer();

    const res = await fetch(`${server}/api/getGueux`, {
        method: "GET",
        headers: {"Content-Type": "application/json"}
    });

    const table = await res.json()

    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            table,
        },
    }
}



