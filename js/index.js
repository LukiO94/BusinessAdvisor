console.log("inicjalizacja");

var stepIndex = 1;

const backButtonClicked = () => {
    console.log("Kliknięto back");
    if (stepIndex !== 1) {
        document.getElementById("dots").classList.remove("step" + stepIndex);
        document.getElementById("step" + stepIndex + "Content").classList.add("hidden");
        document.getElementById("step" + (stepIndex - 1) + "Content").classList.remove("hidden");
        stepIndex--;
    }
}

const nextButtonClicked = () => {
    console.log("Kliknięto next");
    if (stepIndex !== 6) {
        stepIndex++;
        document.getElementById("dots").classList.add("step" + stepIndex);
        document.getElementById("step" + (stepIndex - 1) + "Content").classList.add("hidden");
        document.getElementById("step" + stepIndex + "Content").classList.remove("hidden");
    }
}

const employeesCountButtonClicked = (evt) => {
    console.log("employeesCountButtonClicked");
    let employeesCountButtons = document.getElementsByClassName("hoverButton");
    for (let i = 0; i < employeesCountButtons.length; i++) {
        employeesCountButtons[i].classList.remove("hoverButtonClicked");
    }
    evt.currentTarget.classList.add("hoverButtonClicked");
    document.getElementById("nextButton").classList.remove("nextButtonDisabled");
}

document.getElementById("backButton").addEventListener("click", backButtonClicked);
document.getElementById("nextButton").addEventListener("click", nextButtonClicked);

const employeesCountButtons = document.getElementsByClassName("hoverButton");
for (let i = 0; i < employeesCountButtons.length; i++) {
    employeesCountButtons[i].addEventListener("click", employeesCountButtonClicked);
}