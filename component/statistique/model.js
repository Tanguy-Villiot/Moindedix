import checkServer from "../checkServer";

const server = checkServer();


export async function getGueux(){

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

    return table;


}


export async function getLastUser(){

    const resUser = await fetch(`${server}/api/getLastUser`, {
        method: "GET",
        headers: {"Content-Type": "application/json"}
    });

    const resJsonUser = await resUser.json()

    const tableUser = {
        rows: [
            resJsonUser
        ]
    }

    return tableUser;

}


export async function getCountUser(){


    const res1 = await fetch(`${server}/api/getCountUser`, {
        method: "GET",
        headers: {"Content-Type": "application/json"}
    });

    const countUser = await res1.json()

    return countUser;

}


export async function getCountGueux(){

    const res2 = await fetch(`${server}/api/getCountGueux`, {
        method: "GET",
        headers: {"Content-Type": "application/json"}
    });

    const countGueux = await res2.json()

    return countGueux;

}
