const db_data = require('../../extra/mg_collection');

exports.servey_get = async (req) => {
    await db_data.sc.find(
        {'id': req.id}.exec((err, data) => { 
            if (!err) 
                return data;
            else return err; 
        })
    )
}

exports.servey_post = (req, res) => {
    db.query('', (err, rows, fields) => {
        if (!err) {
            res.send(rows);
        } else {
            res.send(err);
        }
    })
}

exports.servey_put = (req, res) => {
    db.query('', (err, rows, fields) => {
        if (!err) {
            res.send(rows);
        } else {
            res.send(err);
        }
    })
}

exports.servey_delete = (req, res) => {
    db.query('', (err, rows, fields) => {
        if (!err) {
            res.send(rows);
        } else {
            res.send(err);
        }
    })
}
