function changeText() {
    var text;
    text=prompt("Type a message (e.g. Carry On):");
    document.getElementById("message").innerHTML=text;
  }

  function changeColor() {
    document.getElementById("poster").style.backgroundColor = "#3050D0";
  }