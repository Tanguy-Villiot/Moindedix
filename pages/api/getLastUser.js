import nextConnect from 'next-connect';

import middleware from '../../component/bdd/databse';

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {


    let doc = await req.db.collection("user").find({}).sort({_id:-1}).limit(100).toArray(function(err, result) {
        if (err) throw err;

        console.log(result)

        return res.json(result);
    });



});

export default handler;