
var axios = require('axios');


const dageRun =  (req, res, next) => {
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
        data : databody
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


module.exports = {
    dageRun,
}



