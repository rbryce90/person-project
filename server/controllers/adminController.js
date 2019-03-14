module.exports = {
    getAdmins : (req, res, next) => {
        const db = req.app.get('db');
        db.get_admins().then( (admins) => {
            res.status(200).json(admins);
        })
    }

}