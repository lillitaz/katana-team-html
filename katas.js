// function remExclMarks(s) {
//   return s.replace(/!/g, "");
// }

remExclMarks = s => s.replace(/!/g, "");

//EXCLAMATION MARKS REMOVAL VARS
let exText = document.getElementById("exInput");
exText.addEventListener("input", () => {
  let endString = document.getElementById("endString");
  endString.innerHTML = exText.value.replace(/!/g, "");
});

//BMI
let height = document.getElementById("height");
let bmiRes = document.getElementById("result");
height.addEventListener("input", () => {
  let weight = document.getElementById("weight").value;
  let bm = weight / Math.pow(height.value, 2);

  if (bm < 18.5) {
    bmiRes.innerHTML = `Underweight `;
  } else if (bm > 18.5 && bm < 24) {
    bmiRes.innerHTML = `Normal`;
  } else if (bm > 24 && bm < 30.0) {
    bmiRes.innerHTML = `Overweight`;
  } else if (bm > 30) {
    bmiRes.innerHTML = `Obese`;
  }
});

//VOWELS COUNTER
let vString = document.getElementById("Vstring");
let vEnd = document.getElementById("vowels");
vString.addEventListener("input", () => {
  vEnd.innerHTML = vString.value.match(/[aeiou]/gi).length;
});
