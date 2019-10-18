var connection = require("./connection.js");


var orm = {
    selectAll: function (WhattoSelect, partiesName) {
        var queryString = "SELECT ?? FROM ??";
        connection.query(queryString, [WhattoSelect, partiesName], function (err, result) {
            if (err) throw err;
            console.log(result[0]);
        });
    },
    insertOne: function (WhattoSelect, partiesName) {
        var queryString = "SELECT ?? FROM ??";
        connection.query(queryString, [WhattoSelect, partiesName], function (err, result) {
            if (err) throw err;
            console.log(result[0]);
        });
    },
    updateOne: function (WhattoSelect, partiesName) {
        var queryString = "SELECT ?? FROM ??";
        connection.query(queryString, [WhattoSelect, partiesName], function (err, result) {
            if (err) throw err;
            console.log(result[0]);
        });
    },
};

module.exports = orm;


