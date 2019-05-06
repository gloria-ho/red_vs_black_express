const report = [];

// check if IP exists and return index
function checkIp(ip) {
  for (impression of report) {
    if (impression.ip === ip) {
      return report.indexOf(impression);
    }
  }
  report.push(
    {
      ip: ip,
      red: 0,
      blue: 0
    }
  );
  return report.length -1 ;
}

function addImpression(ip, color) {
  let index = checkIp(ip);
  // add impression
  report[index][color]++;
}

function getReport() {
  return report;
}

module.exports = {
  addImpression: addImpression,
  getReport: getReport
};