import nextConnect from 'next-connect';

import middleware from '../../component/bdd/databse';

const handler = nextConnect();

handler.use(middleware);

handler.post(async (req, res) => {

    let data = req.body;

    let doc = await req.db.collection("recensement").find({ip: data.ip}).toArray(function(err, result) {
        if (err) throw err;

        console.log(result)

        return res.json(result);
    });



});

export default handler;