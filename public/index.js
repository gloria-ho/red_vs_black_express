// SET OR OVERWRITE COOKIE
function setCookie(key, value, days) {
  let date = new Date();
  // convert days to milliseconds and set cookie expiration
  date.setTime(date.getTime() + (days*1000*60*60*24));
  let expiration = 'expires=' + date.toUTCString();
  document.cookie = key + '=' + value + '; ' + expiration;
}

// RETURN SPECIFIC COOKIE KEY VALUE
function getCookie(key) {
  let target = key + '=';
  let cookieArr = document.cookie.split(';');
  // loop through the split cookie array, check against match target
  for (let i = 0; i < cookieArr.length; i++) {
    let c = cookieArr[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    // if the target is found, return the value
    if (c.indexOf(target) === 0) {
      return c.substring(target.length, c.length);
    }
  } 
  // if no key found, return an empty string
  return ''
}

// OVERWRITE COOKIE WITH NEGATIVE DAY
function clearCookie(key) {
  setCookie(key, '', -1);
}

// EXPIRE ALL COOKIES
function clearAllCookies() {
  clearCookie('red');
  clearCookie('black');
  clearCookie('last_shown_color');
}

// CHANGE SQUARE COLOR
function fillSquare(color) {
  document.querySelector('#square').style.backgroundColor = color;
}

// RANDOMIZE COLOR WITH 50/50 ODDS
function randomColor() {
  let c = Math.random();
  return (c > .5) ? 'red' : 'black';
}

// ADDING TO COLOR COUNTER
function addToCounter(color) {
  setCookie(color, parseInt(getCookie(color)) +1, 999);
}

// SHOW THE REPORT
let reportBtn = document.querySelector('#reportBtn');
let report = document.querySelector('#report');
function showReport() {
  report.innerHTML = '<h4>Total Times Seen:</h4><span class="red">Red: ' + getCookie('red') + '</span><br />' + '<span class="black">Black: ' + getCookie('black') + '</span>';
  report.classList.remove('hidden');
}

// RELOAD THE PAGE
let reloadBtn = document.querySelector('#reloadBtn');
reloadBtn.onclick = () => {
  (document.location.reload());
}
// CLEAR THE COOKIES
let clearBtn = document.querySelector('#clearBtn');
clearBtn.onclick = () => {
  clearAllCookies();
  // clear the square and instruct user to refresh the page
  fillSquare('#f8f9fa');
  // disable button click once cleared
  this.disabled=true;
  clearBtn.innerText = 'Please refresh the page to start over';
}


// check if color counters exist, create if not
if (!getCookie('red')) {
  setCookie('red', 0, 999);
}
if (!getCookie('black')) {
  setCookie('black', 0, 999);
}

let color = ''

// check if last shown color exists
if (!getCookie('last_shown_color')) {
  // randomize a color
  color = randomColor();
  // render the bg color in the square
  fillSquare(color);
  // set last shown color cookie
  setCookie('last_shown_color', color, 999)
  // add 1 to color counter
  addToCounter(color);
} else {
  color = getCookie('last_shown_color');
  document.querySelector('#welcome').innerHTML = '<h1 class="center">Welcome back, User!</h1><h2 class="center">Your last color was <span id="color" class="' + color + '">' + color.toUpperCase() + '</span>.</h2>';
  // render the same bg as the last shown color
  fillSquare(color);
  // clear last shown color cookie, no need to add to color counter here
  setCookie('last_shown_color', '', -1);
}
// render report
showReport();

// send user data
axios.post('http://localhost:3000/addImpression', {
    color: color
});