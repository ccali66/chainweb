const fetch = require("node-fetch");
const Headers = require("node-fetch").Headers;
/*
window.onload = function () {
  console.log("長照單位");

//   var table;
//   var rowCount;
  var stompClient = null;

//   connect();
};
*/
async function launchTx(patientName, hospitalName) {
  console.log("launch tx");
  var data = {
    source: {
      chainName: "src",
    },
    destination: {
      chainName: "dest",
    },
    txType: "Req",
    txContent: "/" + 'A123456789' + "/record.pdf",
  };

  console.log(data);

  // 發起跨鏈交易
  
  const response = await fetch("http://140.118.9.226:5000/blockchain/smartcontract/0x22C5593339251514dcFaE16d5D1d3db882554145", {
        method: "GET",
        headers: new Headers({
        "Content-Type": "application/json",
        }),
        body: JSON.stringify(data),
    });

    const r1 = response.clone();
    const results = await Promise.all([response.json(), r1.text()]);
    var res = JSON.stringify(results[0]);
    console.log('REQUEST:'+res);
/*
  fetch("http://140.118.9.225/transaction/launch", {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json",
    }),
    body: JSON.stringify(data),
  }).then((response) => {
      if (response.status == 201) {
        return response.json();
      }
  }).then((jsonData) => {
      console.log('jsonData:'+JSON.parse(jsonData));

      //var resContent = document.getElementById("res-content");
      //resContent.innerHTML = "<p>" + jsonData.txContent + "<p/>";

  }).catch((err) => {
      console.log("錯誤:", err);
  });*/
}

module.exports = {launchTx};