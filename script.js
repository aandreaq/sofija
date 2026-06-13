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


function sendViber() {
    const ime = document.getElementById("ime").value;
    const email = document.getElementById("email").value;
    const poruka = document.getElementById("poruka").value;

    const dolazak = document.querySelector('input[name="come"]:checked')?.value;

    const text =
        "RSVP poruka:%0A" +
        "Ime: " + ime + "%0A" +
        "Email: " + email + "%0A" +
        "Dolazak: " + dolazak + "%0A" +
        "Poruka: " + poruka;

    const broj = "381600900014"; 

    window.open("viber://chat?number=" + broj + "&text=" + text, "_blank");
}
