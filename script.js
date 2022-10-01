let textview = document.querySelector(".textview");

function insert(num) {
  textview.value += num;
}

function equals() {
  textview.value = eval(textview.value);
}

function clean() {
  textview.value = "";
}

function back() {
  textview.value = textview.value.slice(0, textview.value.length - 1);
}
