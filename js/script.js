// script.js

// Ambil elemen-elemen yang dibutuhkan
const formKonversi = document.getElementById('form-konversi');
const inputSuhu = document.getElementById('suhu');
const selectJenisSuhu = document.getElementById('jenis-suhu');
const buttonKonversi = document.getElementById('btn-konversi');
const hasilKonversi = document.getElementById('hasil-konversi');

// Tambahkan event listener pada tombol konversi
buttonKonversi.addEventListener('click', (e) => {
  // Cegah form dari melakukan submit secara default
  e.preventDefault();

  // Ambil nilai suhu dan jenis suhu
  const suhu = parseFloat(inputSuhu.value);
  const jenisSuhu = selectJenisSuhu.value;

  // Lakukan konversi suhu
  let hasil;
  if (jenisSuhu === 'C') {
    // Konversi Celsius ke Fahrenheit
    hasil = (suhu * 9/5) + 32;
    hasilKonversi.textContent = `${suhu}°C = ${hasil.toFixed(2)}°F`;
  } else if (jenisSuhu === 'F') {
    // Konversi Fahrenheit ke Celsius
    hasil = (suhu - 32) * 5/9;
    hasilKonversi.textContent = `${suhu}°F = ${hasil.toFixed(2)}°C`;
  }
});