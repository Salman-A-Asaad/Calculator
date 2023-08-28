let buttons = document.getElementsByTagName("button");
let display = document.getElementsByClassName("display")[0];
let calcButton = Array.from(buttons);
calcButton.forEach((element) => {
  element.addEventListener("click", doForResult);
});

function doForResult(element) {
  if (element.currentTarget.innerHTML == "AC") {
    display.innerHTML = "";
  } else if (element.currentTarget.innerHTML == "DC") {
    display.innerHTML = display.innerHTML.slice(
      0,
      display.innerHTML.length - 1
    );
  } else if (element.currentTarget.innerHTML == "=") {
    if (display.innerHTML.endsWith("/0") || display.innerHTML.endsWith("/00")) {
      alert("Can not division on '0'");
      display.innerHTML = "";
    } else {
      display.innerHTML = eval(display.innerHTML);
    }
  } else {
    display.innerHTML += element.currentTarget.innerHTML;
  }
}
