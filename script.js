document
.getElementById("showPassword")
.addEventListener("change", function(){

    let passwordField =
    document.getElementById("password");

    if(this.checked){
        passwordField.type = "text";
    }
    else{
        passwordField.type = "password";
    }

});


function auditPassword(){

    let password =
    document.getElementById("password").value;

    let score = 0;

    let issues = [];

    if(password.length >= 8){
        score++;
    }else{
        issues.push("Password is shorter than 8 characters");
    }

    if(/[A-Z]/.test(password)){
        score++;
    }else{
        issues.push("Missing uppercase letter");
    }

    if(/[a-z]/.test(password)){
        score++;
    }else{
        issues.push("Missing lowercase letter");
    }

    if(/[0-9]/.test(password)){
        score++;
    }else{
        issues.push("Missing number");
    }

    if(/[!@#$%^&*]/.test(password)){
        score++;
    }else{
        issues.push("Missing special character");
    }

    let strength = "";
    let color = "";
    let width = "";

    if(score <= 2){

        strength = "Weak";
        color = "red";
        width = "30%";

    }
    else if(score <= 4){

        strength = "Medium";
        color = "orange";
        width = "70%";

    }
    else{

        strength = "Strong";
        color = "#00ff41";
        width = "100%";
    }

    document.getElementById(
        "strengthFill"
    ).style.width = width;

    document.getElementById(
        "strengthFill"
    ).style.background = color;

    document.getElementById(
        "strengthText"
    ).innerHTML =
    `Password Strength: <strong>${strength}</strong>`;

    document.getElementById(
        "results"
    ).innerHTML =

    `
    <h3>Security Report</h3>

    <p>Security Score: ${score}/5</p>

    <p>
    <strong>Issues Found:</strong>
    <br>
    ${issues.length ?
      issues.join("<br>")
      :
      "No major issues detected"}
    </p>
    `;
}