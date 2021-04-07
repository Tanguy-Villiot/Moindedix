import styles from '../styles/Home.module.css'
import Link from 'next/link'
import {Button, Form, InputGroup, Nav, Navbar} from "react-bootstrap";
import {useState} from "react";
import {useRouter} from "next/router";

export default function Home() {

    const router = useRouter();

    const location = [
        {
            name: 'C',
            year: 1972
        },
        {
            name: 'C#',
            year: 2000
        },
        {
            name: 'C++',
            year: 1983
        },
        {
            name: 'Clojure',
            year: 2007
        },
        {
            name: 'Elm',
            year: 2012
        },
        {
            name: 'Go',
            year: 2009
        },
        {
            name: 'Haskell',
            year: 1990
        },
        {
            name: 'Java',
            year: 1995
        },
        {
            name: 'Javascript',
            year: 1995
        },
        {
            name: 'Perl',
            year: 1987
        },
        {
            name: 'PHP',
            year: 1995
        },
        {
            name: 'Python',
            year: 1991
        },
        {
            name: 'Ruby',
            year: 1995
        },
        {
            name: 'Scala',
            year: 2003
        }
    ];


    const [value, setValue] = useState();
    const [adress, setAdress] = useState('');




    function handleChange(evt){

        const val = evt.target.value;

        setValue(val);



    }

    function handleSubmit(e){

        e.preventDefault()

        console.log(value);

        if(value > 10000)
        {

            return router.push("/light");
        }
        else
        {

            return router.push("/black");

        }



    }

    const handleChangeAdress = (evt) => {
        const val = evt.target.value;
        setAdress(val);
    };



    return (
    <div className={styles.container}>



        <div className={styles.content}>

            <h1 className={styles.title}>#Antimoinsde<span style={{color: "#dd2d2d"}}>10</span></h1>
            <h3 className={styles.subtitle}>Redorons de nos villes de prestiges Françaises !</h3>


        </div>


      <div className={"container " + styles.home}>

          <Form onSubmit={handleSubmit}>
              <Form.Label className={styles.label}>MENTIONNER VOTRE SALAIRE</Form.Label>
              <InputGroup hasValidation className={styles.input}>
                  <InputGroup.Prepend>
                      <InputGroup.Text id="inputGroupPrepend">€</InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                      type="number"
                      name="money"
                      placeholder="120000"
                      aria-describedby="inputGroupPrepend"
                      value={value}
                      onChange={handleChange}
                      required
                  />
              </InputGroup>
              <Form.Label className={styles.label}>VILLE</Form.Label>
              <InputGroup hasValidation className={styles.input2}>
                  <Form.Control
                      type="text"
                      name="adress"
                      placeholder="Paris"
                      aria-describedby="inputGroupPrepend"
                      value={adress}
                      onChange={handleChangeAdress}
                      required
                  />
              </InputGroup>



              <Button variant="primary" type="submit" className={styles.button}>
                  Submit
              </Button>
          </Form>

      </div>



            <div className={styles.footer + " fixed-bottom"}>

                <div>
                    <Navbar>
                        <Link href="/">
                            <Navbar.Brand href="#home" className={styles.link} style={{marginRight: "1.5em", paddingTop: "0.125rem", fontFamily: "Inter-Bold"}}>Ankward</Navbar.Brand>
                        </Link>
                        <Navbar.Toggle />

                        <Navbar.Collapse className="justify-content-end">
                            <Nav className="ml-auto white-text">
                                <Link href="/reveal">
                                    <Nav.Link href="#link" className={styles.link}>Contact</Nav.Link>
                                </Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>


                </div>

            </div>
        </div>
  )
}
