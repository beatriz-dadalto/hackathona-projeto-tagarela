
let anoFooter = document.getElementById('ano-atual');

year = new Date();
anoFooter.innerText = year.getFullYear();

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})