import nextConnect from 'next-connect';

import middleware from '../../component/bdd/databse';

const handler = nextConnect();

handler.use(middleware);

handler.post(async (req, res) => {


    let data = req.body;

    data = JSON.parse(data);

    let doc = await req.db.collection(recensement).insertOne({

        url: data.url,
        user_id: data.userId,
        competition_id: competitionId,
        title: data.valueForm.title,
        description: data.valueForm.description,
        publish: new Date(Date.now()),
        countVote: 0

    })

    res.json({message : "OK"});



});

export default handler;