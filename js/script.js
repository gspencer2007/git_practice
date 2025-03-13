let copyright = document.getElementsByClassName('copyright')[0];

const thisYear = new Date();

copyright.innerHTML = '&copy; ' + thisYear.getFullYear() + ' Geoffrey Spencer. All rights reserved.';