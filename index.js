function setCookie(key, value, days) {
  let date = new Date();
  // convert days to milliseconds and set cookie expiration
  date.setTime(date.getTime() + (days*1000*60*60*24));
  let expiration = 'expires=' + date.toUTCString();
  // set cookie
  document.cookie = key + '=' + value + '; ' + expiration;
}

// check cookies for specific key match and return the value
function getCookie(key) {
  let target = key + '=';
  let cArr = document.cookie.split(';');
  // loop through the split cookie array and check against target
  for (let i = 0; i < cArr.length; i++) {
    let c = cArr[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    // if the target is found, return the value
    if (c.indexOf(target) === 0) {
      return c.substring(target.length, c.length);
    }
  } 
  // if key isn't found, return an empty string
  return ''
}

function fillCircle(color) {
  document.querySelector('#circle').style.backgroundColor = color;
}

function randomColor() {
  let c = Math.random();
  if (c > .5) {
    return 'red';
  }
  return 'blue';
}

// add to counter cookie
function addToCounter(color) {
  setCookie(color, parseInt(getCookie(color)) +1, 999)
}

// check if counters exist, create if not
if (!getCookie('red')) {
  setCookie('red', 0, 999);
}
if (!getCookie('blue')) {
  setCookie('blue', 0, 999);
}
  
// check if last shown color exists
if (!getCookie('last_shown_color')) {
  console.log('new color')
  // randomize a color
  let color = randomColor();
  // render the bg color in the circle
  fillCircle(color);
  // set last shown color cookie
  setCookie('last_shown_color', color, 999)
  addToCounter(color);
} else {
  let color = getCookie('last_shown_color');
  document.querySelector('#welcome').innerHTML = 'Welcome back, User! Your last color was <span id="color" class="' + color + '">' + color + '</span>';
  // render the same bg as the last shown color
  fillCircle(color);
  // addToCounter(color);
  // clear last shown color cookie
  setCookie('last_shown_color', '', -1);
}


// SHOW THE REPORT
let reportBtn = document.querySelector('#reportBtn');
let report = document.querySelector('#report');

// show counter cookie if counter exists
// reportBtn.onclick = () => {

  // if (getCookie('last_shown_color')) {

  report.innerHTML = '<h4>Report:</h4>Red: ' + getCookie('red') + '<br />' + 'Blue: ' + getCookie('blue');

  // } else {
    // report.innerHTML = '<h4>Report:</h4> <span class="red">Error!</span> Please refresh the page';
  // }

  report.classList.remove('hidden');
  // reportBtn.classList.add('hidden');
// }

// RELOAD THE PAGE
let reloadBtn = document.querySelector('#reloadBtn');
reloadBtn.onclick = () => {
  (document.location.reload());
}

// CLEAR THE COOKIES
let clearBtn = document.querySelector('#clearBtn');
// delete all cookies by overwriting with negative expiration date
clearBtn.onclick = () => {
  setCookie('red', '', -1);
  setCookie('blue', '', -1);
  setCookie('last_shown_color', '', -1);
  // clear the circle and instruct user to refresh the page
  fillCircle('#FFF');
  clearBtn.innerText = 'Please refresh the page to start over';
  if (reportBtn.innerText != 'Show report') {
    reportBtn.innerText = 'Please refresh the page';
  }
  reportBtn.classList.add('hidden');
}

console.log(document.cookie);