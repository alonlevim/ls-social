const Authentication = require("../controllers/Authentication");

module.exports = (router) => {
    router.get('/feed', (req, res) => {
        res.json([{
            idUser: 1,
            userName: "Alon",
            description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
            img: 'https://image.cnbcfm.com/api/v1/image/105828578-1554223245858gettyimages-149052633.jpeg?v=1554223281&w=740&h=416',
            createdAt: 1600963765207,
            updatedAt: 1600963765207
        }]);
    });

    router.post('/add-user', Authentication.addUser);

    return router;
};