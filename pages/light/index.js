import styles from './light.module.css'
import {Button} from "react-bootstrap";
import {useRouter} from "next/router";
import {useEffect} from "react";


export default function Light(){

    const Router = useRouter();


    useEffect(() =>{


        if (Router.query.money < 10000 || Router.query.money === undefined) {
             Router.push('/')

        }


        },
        [],
    );



    function handleClick(){

        return Router.push({
            pathname: '/rejoindre',
            query: {
                money: Router.query.money,
                departement: Router.query.departement,
                ville: Router.query.ville
            },
        })

    }


    return (

        <>

            {Router.query.money === undefined ?

            <>
            </>

                :


                <div className={styles.main}>

                    <div className={styles.content}>

                        <h3 className={styles.title}>Vous êtes éligible !</h3>

                        <Button variant="primary" className={styles.button} onClick={handleClick}>
                            Rejoindre la communauté
                        </Button>
                    </div>


                </div>


            }


        </>



    )


}