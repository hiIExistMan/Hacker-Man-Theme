//console.log(Math);
let r = Math.floor(Math.random()*6);
let img = document.createElement("img");
img.src = `../images/img${r}.jpg`;
img.width = innerWidth;
img.height = innerHeight;
document.body.appendChild(img);
function search(url) {
  var serviceCall2 = `https://www.google.com/search?q=${url}`;
  if(serviceCall2.trim().length > 0) chrome.tabs.create({"url": serviceCall2});
}

let input = document.querySelector("input");
input.style["font-size"] = "24pt";
input.style.position = "absolute";
input.style.left = "30%";
input.style.top = "45%";
input.style.width = "40%";
input.style.bottom = "45%";

input.addEventListener("keyup", e => {
  if(e.key == "Enter") {
    search(input.value);
  }
});