import styles from './light.module.css'
import {Button} from "react-bootstrap";
import {useRouter} from "next/router";

export default function Light(){

    const router = useRouter();

    console.log(router.query.departement)

    if(router.query.money < 10000)
    {
        router.push("/");
    }


    function handleClick(){

        return router.push({
            pathname: '/rejoindre',
            query: {
                money: router.query.money,
                departement: router.query.departement,
                ville: router.query.ville
            },
        })

    }


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