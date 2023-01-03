const router = require('express').Router();

router.post('/', (req, res) => {
    const {name} = req.body;
    return res.status(200).json({NAME: name});
})

module.exports = router;