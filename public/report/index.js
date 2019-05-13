let data = []

let getData = axios.get('http://localhost:3000/data')
  .then(function(repsonse) {
    for (item of repsonse.data) {
      data.push(item);
    }
    generateTable(data);
  });

const table = document.querySelector('#empty-table');
let row = table.insertRow(0);

function generateTable(array) {
  for (item of array) {
    let ip = row.insertCell(0);
    let red = row.insertCell(1);
    let black = row.insertCell(2);
    ip.innerText = item.ip;
    red.innerText = item.red;
    black.innerText = item.black;
  }
}

