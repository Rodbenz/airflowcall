
var axios = require('axios');


const dageRun = (req, res, next) => {
    const eventId = req;
    let databody = JSON.stringify({});
    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `http://192.168.45.158:8080/api/v1/dags/${eventId.body.DAG}/dagRuns`,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic YWlyZmxvdzphaXJmbG93'
        },
        data: databody
    };

    axios(config)
        .then(function (response) {
            res.send(JSON.stringify(response.data))
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            res.status(403).send(error);
        });

}
const dageRunConfig = (req, res, next) => {
    const eventId = req;
    console.log(eventId);
    let databody = JSON.stringify({
        "conf": {
            "year": eventId.body.year,
            "month": eventId.body.month,
            "land_office": eventId.body.land_office
        }
    });
    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `http://192.168.45.158:8080/api/v1/dags/${eventId.body.DAG}/dagRuns`,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic YWlyZmxvdzphaXJmbG93'
        },
        data: databody
    };

    axios(config)
        .then(function (response) {
            res.send(JSON.stringify(response.data))
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            res.status(403).send(error);
        });

}
const taskInstances = (req, res, next) => {
    const eventId = req;
    console.log(eventId.body);
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `http://192.168.45.158:8080/api/v1/dags/${eventId.body.DAG}/dagRuns/${eventId.body.DAG_RUN_ID}/taskInstances?limit=100`,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic YWlyZmxvdzphaXJmbG93'
        }
    };

    axios(config)
        .then(function (response) {
            res.send(JSON.stringify(response.data))
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            res.status(403).send(error);
        });

}
const taskInstancesLog = (req, res, next) => {
    const eventId = req;
    console.log(eventId.body);
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `http://192.168.45.158:8080/api/v1/dags/${eventId.body.DAG}/dagRuns/${eventId.body.DAG_RUN_ID}/taskInstances/${eventId.body.TASK_ID}/logs/${eventId.body.TYPE_NUMBER}\n`,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic YWlyZmxvdzphaXJmbG93'
        }
    };

    axios(config)
        .then(function (response) {
            res.send(JSON.stringify(response.data))
            // console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            res.status(403).send(error);
        });

}



module.exports = {
    dageRun,
    taskInstances,
    taskInstancesLog,
    dageRunConfig
}



