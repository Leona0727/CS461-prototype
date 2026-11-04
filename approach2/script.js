
function checkPassword() {
    let password = document.getElementById("password").value;

    if (password.length === 0) {
        document.getElementById("result").innerText = "Result: -";
        document.getElementById("score").innerText = "Score: -";
        document.getElementById("feedback").innerText =
            "Feedback: Please enter a password.";
        return;
    }

    let result = zxcvbn(password);

    let levels = [
        "Very Weak",
        "Weak",
        "Fair",
        "Good",
        "Strong"
    ];

    document.getElementById("result").innerText =
        "Result: " + levels[result.score];

    document.getElementById("score").innerText =
        "Score: " + result.score + "/4";

    let feedback = result.feedback.suggestions.join(" ");

    if (feedback === "") {
        feedback = "No suggestions.";
    }

    document.getElementById("feedback").innerText =
        "Feedback: " + feedback;
}
