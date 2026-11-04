
function checkPassword() {
    let password = document.getElementById("password").value;

    let checks = [
        password.length >= 8,
        /[A-Z]/.test(password),
        /[a-z]/.test(password),
        /[0-9]/.test(password),
        /[^A-Za-z0-9]/.test(password)
    ];

    let names = [
        "At least 8 characters",
        "Uppercase letter",
        "Lowercase letter",
        "Number",
        "Special character"
    ];

    let score = 0;
    let details = "";

    for (let i = 0; i < checks.length; i++) {
        if (checks[i]) {
            score++;
            details += "<p>" + names[i] + ": Yes</p>";
        } else {
            details += "<p>" + names[i] + ": No</p>";
        }
    }

    let result = "Weak";

    if (score >= 4) {
        result = "Strong";
    } else if (score >= 3) {
        result = "Medium";
    }

    if (password.length === 0) {
        result = "-";
        details = "<p>Please enter a password.</p>";
    }

    document.getElementById("result").innerText =
        "Result: " + result + " (" + score + "/5)";

    document.getElementById("details").innerHTML = details;
}
