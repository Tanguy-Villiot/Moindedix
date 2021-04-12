import nextConnect from 'next-connect';

import middleware from '../../component/bdd/databse';

const handler = nextConnect();

handler.use(middleware);

handler.post(async (req, res) => {


    let data = req.body;

    // data = JSON.parse(data);


    let doc = await req.db.collection("recensement").insertOne({


        ville: data.location.nom,
        departement: data.dep.dep_name,
        Region: data.dep.region_name,
        money: data.value,
        ip: data.ip

    })

    res.json({message : "OK"});



});

export default handler;