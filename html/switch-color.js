  var on = false;
  const btn = document.getElementById('change-color')
  btn.addEventListener("click", () => {
    on = !on;
    if (on == true) {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
    else {
    document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    }
  });