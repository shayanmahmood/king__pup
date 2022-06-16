
document.querySelector(".btn").addEventListener("click", function () {
    var age = prompt("What is Your Dog Age?(Plz Add Number)");
    var ageCount = (age - 2) * 4 + 21;
    console.log(ageCount);
    alert("Your Age IS" + " " + ageCount);
    if (ageCount > 0) {
        document.querySelector("p").innerHTML = "Results:" + " " + "Your Age IS" + " " + age + " " + " and Your Dog Age IS" + " " + ageCount;
        
    }
    else {
        document.querySelector("p").innerHTML = "Plz Enter A Number";
    }
    if (ageCount > age) {
     document.querySelector(".main--text-box--heading").textContent = "Your Age IS" + " " + age + " " + " and Your Dog Age IS" + " " + ageCount;
    }
    else{
        document.querySelector(".main--text-box--heading").textContent = "Your Age IS" + " " + age + " " + " and Your Dog Age IS" + " " + ageCount;
    }
})

