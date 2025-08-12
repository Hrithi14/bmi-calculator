let gender = "Female";

document.getElementById("maleBtn").addEventListener("click", function() {
  gender = "Male";
  this.classList.add("active");
  document.getElementById("femaleBtn").classList.remove("active");
});

document.getElementById("femaleBtn").addEventListener("click", function() {
  gender = "Female";
  this.classList.add("active");
  document.getElementById("maleBtn").classList.remove("active");
});

document.getElementById("calcBtn").addEventListener("click", function() {
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;

  if(age && weight && height) {
    let bmi = (weight / ((height / 100) ** 2)).toFixed(1);

    // Determine BMI status
    let status = "";
    if(bmi < 16) status = "Very severely underweight";
    else if(bmi < 18.5) status = "Underweight";
    else if(bmi < 25) status = "Normal body weight";
    else if(bmi < 30) status = "Overweight";
    else status = "Obese";

    // Show result
    document.getElementById("bmiValue").textContent = `BMI: ${bmi}`;
    document.getElementById("bmiStatus").textContent = `${status} (${gender})`;
    document.getElementById("resAge").textContent = age;
    document.getElementById("resWeight").textContent = weight;
    document.getElementById("resHeight").textContent = height;

    document.getElementById("resultBox").classList.remove("hidden");
  } else {
    alert("Please fill in all fields.");
  }
});
