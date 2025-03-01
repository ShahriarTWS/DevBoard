const colors = [
    "#FF5733", "#33B5E5", "#FFC107", "#8BC34A", "#9C27B0",
    "#FF9800", "#E91E63", "#00BCD4", "#4CAF50", "#3F51B5",
    "#FF6347", "#4682B4", "#7FFF00", "#D2691E", "#9400D3",
    "#20B2AA", "#F4A460", "#2E8B57", "#FF1493", "#00CED1",
    "#50514F", "#F25F5C", "#FFE066", "#247BA0", "#70C1B3",
    "#773344", "#22577a", "#38a3a5"
];




document.getElementById("bg-color-change")
    .addEventListener("click", function (event) {
        event.preventDefault();
        let i = Math.floor(Math.random() * colors.length)
        document.body.style.backgroundColor = colors[i];

    })


    
