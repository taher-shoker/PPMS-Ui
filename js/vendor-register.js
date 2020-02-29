
const realFileBtn = $("#togary-file");
const customBtn = $(".custom-button");
const customTxt = $(".custom-text");

customBtn.on("click", function() {
  realFileBtn.click();
});

realFileBtn.on("change", function() {
  if (realFileBtn.value) {
    customTxt.innerHTML = realFileBtn.value.match(
      /[\/\\]([\w\d\s\.\-\(\)]+)$/
    )[1];
  } else {
    customTxt.innerHTML = "No file chosen, yet.";
  }
});
 
/**************************************** */
