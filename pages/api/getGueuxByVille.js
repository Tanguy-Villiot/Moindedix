import nextConnect from 'next-connect';

import middleware from '../../component/bdd/databse';

const handler = nextConnect();

handler.use(middleware);

handler.post(async (req, res) => {

    let data = req.body;

    let results = []

    let doc = await req.db.collection("recensement").find({ville: data.ville}).toArray(async function(err, result) {
        if (err) throw err;

        results = result

        let doc2 = await req.db.collection("user").find({ville: data.ville}).toArray(function(errer, resulte) {
            if (errer) throw err;

            results = [
                resulte,
                results
            ]

            // console.log(JSON.parse(results))

            return res.json(results);


        });

    });





});

export default handler;