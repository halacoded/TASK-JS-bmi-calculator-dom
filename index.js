function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻

  // **1. Challenge 1 :**

  // 1. Go to the index.js file and use the variables to calculate the BMI, the equation for BMI is (weight (kg) / height^2(m)), don't forget to convert cm to m
  // 2. Show the results in an alert
  height = height / 100;
  let BMI = weight / (height * height);
  alert(BMI);

  //   **2. Challenge 2 :**

  // 1. Using the result you calculated in Challenge 1 and check the BMI state
  //     1. Below 18.5 Underweight
  //     2. 18.5 – 24.9 Healthy Weight
  //     3. 25.0 – 29.9 Overweight
  //     4. 30.0 and Above Obesity
  // 2. Show the BMI state in an alert

  // if (BMI < 18.5) {
  //   alert("Underweight");
  // } else if (BMI >= 18.5 && BMI <= 24.9) {
  //   alert("Healthy");
  // } else if (BMI >= 25 && BMI <= 29.9) {
  //   alert("Overweight");
  // } else {
  //   alert("Obesity");
  // }

  //   **. Challenge 3: `OPTIONAL 🌶🌶`**

  // 1. Using the result you calculated in challenge 1 check the BMI state BUT based on age

  if (age >= 19 && age <= 24) {
    if (BMI >= 19 && BMI <= 24) {
      alert("Healthy");
    } else {
      alert("Not healthy");
    }
  } else if (age >= 25 && age <= 34) {
    if (BMI >= 20 && BMI <= 25) {
      alert("Healthy");
    } else {
      alert("Not healthy");
    }
  } else if (age >= 35 && age <= 44) {
    if (BMI >= 21 && BMI <= 26) {
      alert("Healthy");
    } else {
      alert("Not healthy");
    }
  } else if (age >= 45 && age <= 54) {
    if (BMI >= 22 && BMI <= 27) {
      alert("Healthy");
    } else {
      alert("Not healthy");
    }
  } else if (age >= 55 && age <= 64) {
    if (BMI >= 23 && BMI <= 28) {
      alert("Healthy");
    } else {
      alert("Not healthy");
    }
  } else {
    if (BMI >= 24 && BMI <= 29) {
      alert("Healthy");
    } else {
      alert("Not healthy");
    }
  }
}
