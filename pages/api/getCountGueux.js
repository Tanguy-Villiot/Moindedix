import nextConnect from 'next-connect';

import middleware from '../../component/bdd/databse';

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {


    let count = await req.db.collection("recensement").countDocuments({});

    return await res.json(count);



});

export default handler;