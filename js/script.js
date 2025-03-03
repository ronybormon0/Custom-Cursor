var main = document.querySelector(".main");
var cursor = document.querySelector(".cursor");

var imageDiv = document.querySelector(".image");

main.addEventListener("mousemove", function (dets) {
  gsap.to(cursor, {
    x: dets.x,
    y: dets.y,
    ease: "back.out",
    duration: 1,
  });
});

imageDiv.addEventListener("mouseenter", function (dets) {
  //overlay deiv er karon a ata kaj kore na
  //   cursor.innerHTML = `<a href="https://adhayanrony.github.io/Portfolio" target="_blank" style="color: white; text-decoration: none;">View More</a>`;
  cursor.innerHTML = "View More";

  gsap.to(".cursor", {
    scale: 5,
    duration: 0,
    // ease: "power1.out",
    backgroundColor: "Black",
    color: "White",
  });
});

imageDiv.addEventListener("mouseleave", function (dets) {
  cursor.innerHTML = "";
  gsap.to(".cursor", {
    scale: 1,
    backgroundColor: "",
    color: "",
  });
});
// "View More" এ ক্লিক করলে নির্দিষ্ট লিংকে যাবে
imageDiv.addEventListener("click", function () {
  var link = "https://adhayanrony.github.io/Portfolio"; // এখানে তোমার কাঙ্ক্ষিত লিংক বসাও
  window.open(link, "_blank"); // নতুন ট্যাবে লিংক ওপেন হবে
});
