import nextConnect from 'next-connect';

import middleware from '../../component/bdd/databse';

const handler = nextConnect();

handler.use(middleware);

handler.post(async (req, res) => {


    let data = req.body;

    // data = JSON.parse(data);


    let doc = await req.db.collection("user").insertOne({


        nom: data.nom,
        prenom: data.prenom,
        departement: data.departement,
        region: data.region,
        money: data.money,
        ip: data.ip

    })


    res.json({message : "OK"});



});

export default handler;