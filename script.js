function changeColour() {
    let colour = document.getElementById("stoplightButton").classList;
    if (colour.contains("btn-danger")) {
        document.getElementById("stoplightButton").className = "btn btn-warning btn-lg";
        return;
    } else if (colour.contains("btn-warning")) {
        document.getElementById("stoplightButton").className = "btn btn-success btn-lg";
        return;
    } else if (colour.contains("btn-success")) {
        document.getElementById("stoplightButton").className = "btn btn-danger btn-lg";
        return;
    }
}

function automatedStoplight() {
    setInterval(changeColour, 10000);
}
