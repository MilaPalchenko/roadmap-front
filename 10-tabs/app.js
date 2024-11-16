
function openTab(event, tabName) { 
  let tabContent = document.querySelectorAll(".tab-content");
  tabContent.forEach(content => content.style.display = "none");

  var tabBtn = document.querySelectorAll(".tab-btn"); 
  tabBtn.forEach(btn => btn.classList.remove('active'));

  document.getElementById(tabName).style.display = "block";
  event.currentTarget.classList.add('active');

}
  document.addEventListener("DOMContentLoaded", function() { 
    document.querySelector(".tab-content").style.display = 'block';
  });