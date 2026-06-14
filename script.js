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



function sendForm() {

    const ime = document.getElementById("ime").value;
    const email = document.getElementById("email").value;
    const poruka = document.getElementById("poruka").value;

    const dolazak = document.querySelector('input[name="come"]:checked')?.value;


    if (!ime || !dolazak) {
        alert("Molimo popunite ime i izaberite da li dolazite ❄️");
        return;
    }


    fetch("https://script.google.com/macros/s/AKfycbxrTdF7IC9eAGSsyf94iiisEucS2PObzsbh3rnR9AhTvYjLBEBR5DBp8NO3rEIiEPo/exec", {
        method: "POST",
        body: JSON.stringify({
            ime: ime,
            email: email,
            dolazak: dolazak,
            poruka: poruka
        })
    })
    .then(() => {

        alert("Hvala na potvrdi! ❄️💙");

        document.getElementById("ime").value = "";
        document.getElementById("email").value = "";
        document.getElementById("poruka").value = "";

    })
    .catch(() => {
        alert("Došlo je do greške, pokušajte ponovo.");
    });

}
