import nextConnect from 'next-connect';

import middleware from '../../component/bdd/databse';

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {


    let doc = await req.db.collection("recensement").find({}).toArray(function(err, result) {
        if (err) throw err;

        res.json(result);
    });



});

export default handler;