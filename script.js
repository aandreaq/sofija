function snow() {
    const snow = document.createElement("div");
    snow.classList.add("snowflake");
    snow.innerHTML = "❄";

    snow.style.left = Math.random() * 100 + "vw";
    snow.style.animationDuration = (Math.random() * 6 + 8) + "s"; // SPORO
    snow.style.fontSize = Math.random() * 10 + 10 + "px";

    document.getElementById("snow").appendChild(snow);

    setTimeout(() => snow.remove(), 12000);
}

setInterval(snow, 400);

