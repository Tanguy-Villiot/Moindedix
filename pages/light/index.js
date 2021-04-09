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


    //VIEW METHODS

    function Render(){

        if (Router.query.money < 10000 || Router.query.money === undefined) {
            return(
                <>
                </>
            )
        } else {
            return (
                <div className={styles.main}>

                    <div className={styles.button}>

                        <h3 className={styles.title}>Vous faites parti de notre caste !</h3>

                        <Button variant="primary" style={{border: '1px solid grey'}} onClick={handleClick}>
                            Rejoindre la communauté
                        </Button>
                    </div>


                </div>

            )
        }

    }

    return(
        <Render />
    )


}