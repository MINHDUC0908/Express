
class NewsController
{
    index(req, res) {
        res.render('new');
    }
    show(req, res) {
        res.json('new');
    }
}

module.exports = new NewsController;
