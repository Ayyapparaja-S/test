import express from 'express';

const router = express.Router();

router.route('/').get((req, res)=> {
    res.send('Server Created Successfully from router')
})


export default router;