const { Sequelize, DataTypes } = require('sequelize');
const db = new Sequelize('customer', 'root', 'Varshini1998@', {
    host: 'localhost',
    dialect: 'mysql'
});
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
app.delete("/:id", (req, res, next) => {
    const { id } = req.params;
    User.destroy({
        where: {
            id: 1
        }
    }).then(data => res.send({
        success: "true",
        message: "delete method",
        data,
    })).catch(err => console.log(err));
});
app.listen(3000, function () {
    console.log("started on port:3000");
})
const User = db.define('User', {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING
    },
    address: {
        type: DataTypes.STRING
    },
    age: {
        type: DataTypes.INTEGER
    },
},
);
db.sync({
    force: true
})
    .then(() => {
        const jane = User.bulkCreate([
            {
                firstName: "varshy",
                lastName: "varsh",
                address: "trchy",
                age: 22,
            }, {
                firstName: "surya",
                lastName: "selvam",
                address: "pdkt",
                age: 22,
            },
        ])
    })
db.sync()