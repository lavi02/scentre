const db_data = require('../../extra/mg_collection');

exports.order_get = (req, res) => {
    db.query('', (err, rows, fields) => {
        if (!err) {
            res.send(rows);
        } else {
            res.send(err);
        }
    })
}

exports.order_post = (req, res) => {
    db.query('', (err, rows, fields) => {
        if (!err) {
            res.send(rows);
        } else {
            res.send(err);
        }
    })
}

exports.order_put = (req, res) => {
    db.query('', (err, rows, fields) => {
        if (!err) {
            res.send(rows);
        } else {
            res.send(err);
        }
    })
}