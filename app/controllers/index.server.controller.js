exports.render = function(req, res) {

    if (req.session.lastVisit) {
        console.log("Last visit : " + req.session.lastVisit);
    }
    req.session.lastVisit = new Date();

    res.render('index', {
        title: 'AH WORLD',
        userFullName: req.user ? req.user.fullName : ''
    })
};