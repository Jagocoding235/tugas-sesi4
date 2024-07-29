function saklar() {
  let toggle1 = document.getElementById("default-toggle1");
  let toggle2 = document.getElementById("default-toggle2");
  let toggle3 = document.getElementById("default-toggle3");

  let lampu1 = document.getElementById("lampu1");
  let lampu2 = document.getElementById("lampu2");
  let lampu3 = document.getElementById("lampu3");

  lampu1.src = toggle1.checked ? "asset/img/on.gif" : "asset/img/off.gif";
  // itu namanya operator ternary susunanya yaitu condition ? valueIftrue : valueIffalse
  lampu2.src = toggle2.checked ? "asset/img/on.gif" : "asset/img/off.gif";
  lampu3.src = toggle3.checked ? "asset/img/on.gif" : "asset/img/off.gif";
}

function toggleAllLights() {
  let toggleAll = document.getElementById("toggle-all-lights");
  let isChecked = toggleAll.checked;

  // Set all individual toggles
  document.getElementById("default-toggle1").checked = isChecked;
  //  ini tuh untuk menyinkronkan dengan tombol yang default-toggle1
  document.getElementById("default-toggle2").checked = isChecked;
  document.getElementById("default-toggle3").checked = isChecked;

  // Update images based on new status memanggil fungsi saklar
  saklar();

  // Update toggle status text
  document.getElementById("toggle-status").textContent = isChecked
    ? "ON"
    : "OFF";
}

function saklar2() {
  let toggle4 = document.getElementById("default-toggle4");
  let lampu4 = document.getElementById("lampu4");

  lampu4.src = toggle4.checked ? "asset/img/on.gif" : "asset/img/off.gif";
}

function saklar3() {
  let toggle5 = document.getElementById("default-toggle5");
  let toggle6 = document.getElementById("default-toggle6");

  let lampu5 = document.getElementById("lampu5");
  let lampu6 = document.getElementById("lampu6");

  lampu5.src = toggle5.checked ? "asset/img/on.gif" : "asset/img/off.gif";
  lampu6.src = toggle6.checked ? "asset/img/on.gif" : "asset/img/off.gif";
}
// buat tombol ruang tidur
function nyala1() {
  let toggleALL2 = document.getElementById("toggle-lampu-tidur");
  let isChecked2 = toggleALL2.checked;

  document.getElementById("default-toggle5").checked = isChecked2;
  document.getElementById("default-toggle6").checked = isChecked2;

  saklar3();
}

function saklar4() {
  let toggle7 = document.getElementById("default-toggle7");
  let toggle8 = document.getElementById("default-toggle8");
  let toggle9 = document.getElementById("default-toggle9");
  let toggle10 = document.getElementById("default-toggle10");

  let lampu7 = document.getElementById("lampu7");
  let lampu8 = document.getElementById("lampu8");
  let lampu9 = document.getElementById("lampu9");
  let lampu10 = document.getElementById("lampu10");

  lampu7.src = toggle7.checked ? "asset/img/on.gif" : "asset/img/off.gif";
  lampu8.src = toggle8.checked ? "asset/img/on.gif" : "asset/img/off.gif";
  lampu9.src = toggle9.checked ? "asset/img/on.gif" : "asset/img/off.gif";
  lampu10.src = toggle10.checked ? "asset/img/on.gif" : "asset/img/off.gif";
}
// saklar keseluruhan ruang keluarga
function nyala2() {
  let toggleALl3 = document.getElementById("toggle-lampu-keluarga");
  let isChecked3 = toggleALl3.checked;

  document.getElementById("default-toggle7").checked = isChecked3;
  document.getElementById("default-toggle8").checked = isChecked3;
  document.getElementById("default-toggle9").checked = isChecked3;
  document.getElementById("default-toggle10").checked = isChecked3;

  saklar4();
}
