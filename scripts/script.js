var button = document.getElementById("start_button"),
  seconds = document.getElementById("milli_seconds");
  count=000;
  button.onclick = function() {
  count += 001;
  document.getElementById("milli_seconds").innerHTML = count;
};

