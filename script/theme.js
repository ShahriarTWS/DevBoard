const colors = ["#FF5733", "#33B5E5", "#FFC107", "#8BC34A", "#9C27B0", "#FF9800", "#E91E63", "#00BCD4", "#4CAF50", "#3F51B5"];


document.getElementById("bg-color-change")
    .addEventListener("click", function (event) {
        event.preventDefault();
        let i = Math.floor(Math.random() * colors.length)
        document.body.style.backgroundColor = colors[i];

    })