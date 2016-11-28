
document.getElementById("joke1a").classList.add("hide");
document.getElementById("btn-n1").classList.add("hide");

document.getElementById("joke2").classList.add("hide");
document.getElementById("btn-2").classList.add("hide");
document.getElementById("joke2a").classList.add("hide");
document.getElementById("btn-n2").classList.add("hide");

document.getElementById("joke3").classList.add("hide");
document.getElementById("btn-3").classList.add("hide");
document.getElementById("joke3a").classList.add("hide");
document.getElementById("btn-n3").classList.add("hide");

document.getElementById("joke4").classList.add("hide");
document.getElementById("btn-4").classList.add("hide");
document.getElementById("joke4a").classList.add("hide");

document.getElementById("btn-1").addEventListener("click", function() {
  document.getElementById("joke1a").classList.add("show");
  document.getElementById("btn-n1").classList.add("show");
});

document.getElementById("btn-n1").addEventListener("click", function () {
  document.getElementById("joke2").classList.add("show");
  document.getElementById("btn-2").classList.add("show");
});

document.getElementById("btn-2").addEventListener("click", function () {
  document.getElementById("joke2a").classList.add("show");
  document.getElementById("btn-n2").classList.add("show");
});

document.getElementById("btn-n2").addEventListener("click", function () {
  document.getElementById("joke3").classList.add("show");
  document.getElementById("btn-3").classList.add("show");
});

document.getElementById("btn-3").addEventListener("click", function () {
  document.getElementById("joke3a").classList.add("show");
  document.getElementById("btn-n3").classList.add("show");
});

document.getElementById("btn-n3").addEventListener("click", function () {
  document.getElementById("joke4").classList.add("show");
  document.getElementById("btn-4").classList.add("show");
});

document.getElementById("btn-4").addEventListener("click", function () {
  document.getElementById("joke4a").classList.add("show");
});
