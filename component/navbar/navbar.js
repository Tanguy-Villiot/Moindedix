import Link from "next/link";
import styles from "./navbar.module.css";
import React, {useState} from "react";
import {Button, Modal, Nav, Navbar} from "react-bootstrap";

export default function NavbarSite()
{

    const [show, setShow] = useState(false);

    function handleHide(){

        setShow(false)

        localStorage["alreadyVisited"] = true;

    }


    return(
        <Navbar className={styles.navbar}>
            <Link href="/">
                <Navbar.Brand href="/" className={styles.linkToHome}>#Antimoinsde<span style={{color: "#dd2d2d"}}>10</span></Navbar.Brand>
            </Link>
            <Navbar.Toggle />

            <Navbar.Collapse className="justify-content-end">
                <Nav className="ml-auto white-text">
                    <span className={"text-muted " + styles.joke + " " + styles.link} onClick={() => {setShow(true)}}>Tout ceci est une immense boutade</span>
                </Nav>
            </Navbar.Collapse>


            <Modal show={show} onHide={handleHide}>
                <Modal.Header closeButton>
                    <Modal.Title className={styles.modal_title}>Information pour les prolétaires</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <span className={styles.modal}>
                    Cette place virtuelle se trouve être <strong>humoristique</strong>. Tout est factices et toutes les informations que vous pouvez remplir peuvent être <strong>fictives</strong>.<br/>
                    <br/>

                    Nous ne sommes d'ailleurs <strong>affiliés en aucune manière</strong> à Louis Vignac, père de François Vignac, présent sur le sol français depuis 13 générations.
                </span>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleHide}>
                        J'acquiesce
                    </Button>
                </Modal.Footer>
            </Modal>

        </Navbar>
    )
}