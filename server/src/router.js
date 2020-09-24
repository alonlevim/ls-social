module.exports = (router) => {
    router.get('/', (req, res) =>{
        res.send('Working!!!');
    });

    return router;
};