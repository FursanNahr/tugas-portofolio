const express = require('express');
const app = express();
const conn = require('./config/db');
const cors = require('cors');
app.use(cors());

app.use(express.json());

app.get('/get-recent_works', function (req, res) {
    const queryStr = "SELECT id, title, description, image_url, DATE_FORMAT(date, '%d/%m/%y') as date FROM recent_works WHERE deleted_at IS NULL";

    conn.query(queryStr, (err, results) => {
        if (err) {
            console.log(err);
            res.error(err.sqlMessage, res);
        } else {
            res.status(200).json({
                "success": true,
                "message": "Sukses menampilkan data",
                "data": results
            })
        }
    })
})

app.post('/store-recent_works', function (req, res) {
    const param = req.body;
    const title = param.title;
    const description = param.description;
    const imageUrl = param.image_url;  // Ubah ini
    const date = param.date;
    const [day, month, year] = date.split('/');
    const formattedDate = `20${year}-${month}-${day}`;
    const now = new Date();

    const queryStr = "INSERT INTO recent_works (title, description, image_url, date, created_at) VALUES (?, ?, ?, ?, ?)";
    const values = [title, description, imageUrl, formattedDate, now];


    conn.query(queryStr, values, (err, results) => {
        if (err) {
            console.log(err);
            res.status(500).json({
                "success": false,
                "message": err.sqlMessage,
                "data": null
            });
        } else {
            res.status(200).json({
                "success": true,
                "message": "Sukses menyimpan data",
                "data": results
            })
        }
    })
})

app.get('/get-recent_works-by-id', function (req, res) {
    const param = req.query;
    const id = param.id;

    const queryStr = "SELECT id, title, description, image_url, DATE_FORMAT(date, '%d/%m/%y') as date FROM recent_works WHERE deleted_at IS NULL AND id = ?";
    const values = [id];

    conn.query(queryStr, values, (err, results) => {
        if (err) {
            console.log(err);
            res.status(500).json({
                "success": false,
                "message": err.sqlMessage,
                "data": null
            });
        } else {
            res.status(200).json({
                "success": true,
                "message": "Sukses menampilkan data",
                "data": results
            })
        }
    })
})

app.post('/update-recent_works', function (req, res) {
    const param = req.body;
    const id = param.id;
    const title = param.title;
    const description = param.description;
    const imageUrl = param.image_url;  // Ubah ini
    const date = param.date;
    const [day, month, year] = date.split('/');
    const formattedDate = `20${year}-${month}-${day}`;

    const queryStr = "UPDATE recent_works SET title = ?, description = ?, image_url = ?, date = ? WHERE id = ? AND deleted_at IS NULL";
    const values = [title, description, imageUrl, formattedDate, id];

    conn.query(queryStr, values, (err, results) => {
        if (err) {
            console.log(err);
            res.status(500).json({
                "success": false,
                "message": err.sqlMessage,
                "data": null
            });
        } else {
            res.status(200).json({
                "success": true,
                "message": "Sukses mengubah data",
                "data": results
            })
        }
    })
})

app.post('/delete-recent_works', function (req, res) {
    const param = req.body;
    const id = param.id;
    const now = new Date();

    const queryStr = "UPDATE recent_works SET deleted_at = ? WHERE id = ?";
    const values = [now, id];

    conn.query(queryStr, values, (err, results) => {
        if (err) {
            console.log(err);
            res.status(500).json({
                "success": false,
                "message": err.sqlMessage,
                "data": null
            });
        } else {
            res.status(200).json({
                "success": true,
                "message": "Sukses menghapus data",
                "data": results
            })
        }
    })
})

app.listen(3000);