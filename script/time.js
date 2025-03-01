
function updateDateTime() {
    const options = { weekday: "short", month: "short", day: "2-digit", year: "numeric" };
    const today = new Date().toLocaleDateString("en-US", options).replace(",", "");
    const currentTime = new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true });

    document.getElementById("week-day").innerHTML = today.split(" ")[0] + " ,";
    document.getElementById("date").innerHTML = today.split(" ").slice(1).join(" ");

    if (!localStorage.getItem("fixedTime")) {
        localStorage.setItem("fixedTime", currentTime);
    }
    document.getElementById("time").innerHTML = localStorage.getItem("fixedTime");
}

updateDateTime();
