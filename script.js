document.getElementById("convert-btn").addEventListener("click", () => {
  const numberInput = document.getElementById("number");
  const number = parseInt(numberInput.value);
  const output = document.getElementById("output");

  if (isNaN(number) || number < 1) {
    output.textContent = number < 1 ? "Please enter a number greater than or equal to 1" : "Please enter a valid number";
    return;
  }

  if (number >= 4000) {
    output.textContent = "Please enter a number less than or equal to 3999";
    return;
  }

  function convertToRoman(num) {
    var ref = [['M', 1000], ['CM', 900], ['D', 500], ['CD', 400], ['C', 100], ['XC', 90], ['L', 50], ['XL', 40], ['X', 10], ['IX', 9], ['V', 5], ['IV', 4], ['I', 1]];
    var res = [];
    ref.forEach(function(p) {
      while (num >= p[1]) {
        res.push(p[0]);
        num -= p[1];
      }
    });
    return res.join('');
  }

  output.textContent = convertToRoman(number);
});