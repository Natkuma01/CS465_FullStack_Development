// GET Homepage
const index = (req, res) => {
    res.render('index', { title: "Travlr Getsways"});
};

module.exports = {
    index
}