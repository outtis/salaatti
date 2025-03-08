// Lista salaattiresepteistä
const reseptit = [
    {
        nimi: "Välimerellinen salaatti",
        ainekset: ["Kirsikkatomaatit", "Kurkut", "Feta-juusto", "Oliivit", "Punainen sipuli", "Oliiviöljy", "Balsamiviinietikka"],
        ohje: "Sekoita kaikki ainekset kulhoon, lisää oliiviöljy ja balsamiviinietikka ja sekoita hyvin."
    },
    {
        nimi: "Caesar-salaatti",
        ainekset: ["Romaine-salaatti", "Krutongit", "Parmesaani", "Caesar-kastike", "Kanafileet (grillatut)"],
        ohje: "Revi salaatti, lisää krutongit ja parmesaani. Sekoita kastike ja grillattu kana joukkoon."
    },
    {
        nimi: "Kesäinen hedelmäsalaatti",
        ainekset: ["Vesimeloni", "Mansikat", "Minttu", "Feta-juusto", "Lime"],
        ohje: "Paloittele hedelmät, lisää feta ja minttu. Purista limemehua päälle ja tarjoile."
    },
    {
        nimi: "Kvinoasalaatti",
        ainekset: ["Kvinoa", "Kurkut", "Paprika", "Avokado", "Kikherneet", "Sitruunamehu", "Oliiviöljy"],
        ohje: "Keitä kvinoa ja anna jäähtyä. Sekoita muiden ainesten kanssa."
    },
    {
        nimi: "Pähkinäinen vihersalaatti",
        ainekset: ["Salaattisekoitus", "Pähkinät", "Kurpitsansiemenet", "Vuohenjuusto", "Hunaja", "Oliiviöljy"],
        ohje: "Sekoita kaikki ainekset ja valuta päälle hunajaa ja oliiviöljyä."
    },
    {
        nimi: "Vihreä papusalaatti",
        ainekset: ["Vihreät pavut", "Punasipuli", "Kirsikkatomaatit", "Oliiviöljy", "Sitruunamehu"],
        ohje: "Keitä pavut ja yhdistä muihin aineksiin. Lisää oliiviöljy ja sitruunamehu."
    },
    {
        nimi: "Kreikkalainen salaatti",
        ainekset: ["Tomaatit", "Kurkut", "Punasipuli", "Feta", "Oliivit", "Oliiviöljy", "Oregano"],
        ohje: "Paloittele ainekset ja sekoita. Lisää päälle oliiviöljy ja oregano."
    },
    {
        nimi: "Pinaatti-mansikkasalaatti",
        ainekset: ["Tuore pinaatti", "Mansikat", "Balsamico", "Feta", "Pekaanipähkinät"],
        ohje: "Yhdistä kaikki ainekset kulhoon ja lisää balsamico-kastike."
    },
    {
        nimi: "Broccoliini-salaatti",
        ainekset: ["Broccoliini", "Mantelit", "Kuivatut karpalot", "Punasipuli", "Ranskankerma", "Sitruunamehu"],
        ohje: "Höyrytä broccoliini ja sekoita muiden ainesten kanssa."
    },
    {
        nimi: "Linssejä ja salaattia",
        ainekset: ["Keitetyt linssit", "Rucola", "Kirsikkatomaatit", "Punasipuli", "Oliiviöljy", "Sitruunamehu"],
        ohje: "Sekoita kaikki ainekset kulhoon ja lisää oliiviöljy sekä sitruunamehu."
    },
    {
        nimi: "Granaattiomena ja avokadosalaatti",
        ainekset: ["Avokado", "Granaattiomena", "Rucola", "Pistaasipähkinät", "Oliiviöljy"],
        ohje: "Sekoita kaikki ainekset ja valuta päälle oliiviöljyä."
    },
    {
        nimi: "Avokado-kurkkusalaatti",
        ainekset: ["Avokado", "Kurkut", "Punasipuli", "Korianteri", "Lime"],
        ohje: "Paloittele ainekset ja purista limemehua päälle."
    },
    {
        nimi: "Tomaatti-mozzarellasalaatti",
        ainekset: ["Tomaatit", "Mozzarella", "Basilika", "Oliiviöljy", "Balsamiviinietikka"],
        ohje: "Asettele tomaatit ja mozzarella lautaselle. Lisää basilika ja oliiviöljy sekä balsamiviinietikka."
    },
    {
        nimi: "Pasta-salaatti",
        ainekset: ["Keitetty pasta", "Kirsikkatomaatit", "Rucola", "Parmesaani", "Oliiviöljy", "Sitruunamehu"],
        ohje: "Sekoita keitetty pasta ja muut ainekset yhteen."
    },
    {
        nimi: "Chèvre-salaatti",
        ainekset: ["Vuohenjuusto", "Salaattisekoitus", "Punajuuret", "Saksanpähkinät", "Hunaja"],
        ohje: "Paahda punajuuret ja lisää ne vuohenjuuston ja muiden ainesten kanssa."
    },
    {
        nimi: "Kana-avokadosalaatti",
        ainekset: ["Grillattu kana", "Avokado", "Rucola", "Kirsikkatomaatit", "Sitruunamehu", "Oliiviöljy"],
        ohje: "Sekoita grillattu kana muiden ainesten kanssa."
    },
    {
        nimi: "Nizzan salaatti",
        ainekset: ["Salaattisekoitus", "Keitetyt kananmunat", "Tonnikala", "Oliivit", "Vihreät pavut", "Kirsikkatomaatit", "Punasipuli"],
        ohje: "Asettele ainekset lautaselle ja tarjoile."
    },
    {
        nimi: "Perunasalaatti",
        ainekset: ["Keitetyt perunat", "Tilli", "Punasipuli", "Maustekurkku", "Majoneesi"],
        ohje: "Sekoita keitetyt perunat ja muut ainekset."
    },
    {
        nimi: "Kikherne-fetasalaatti",
        ainekset: ["Kikherneet", "Feta", "Punasipuli", "Kurkut", "Paprika", "Oliiviöljy", "Sitruunamehu"],
        ohje: "Sekoita kaikki ainekset kulhoon ja tarjoile."
    },
    {
        nimi: "Itämainen couscous-salaatti",
        ainekset: ["Couscous", "Kurkut", "Paprika", "Rusinat", "Minttu", "Sitruunamehu", "Oliiviöljy"],
        ohje: "Keitä couscous ja yhdistä muihin aineksiin."
    },
    {
        nimi: "Sitruunainen pinaattisalaatti",
        ainekset: ["Tuore pinaatti", "Sitruunamehu", "Oliiviöljy", "Valkosipuli", "Pähkinät"],
        ohje: "Sekoita kaikki ainekset yhteen ja tarjoile."
    },
    {
        nimi: "Makea maissisalaatti",
        ainekset: ["Maissi", "Avokado", "Kurkut", "Kirsikkatomaatit", "Punasipuli", "Lime"],
        ohje: "Yhdistä ainekset ja lisää lime-mehu."
    },
    {
        nimi: "Meloni-fetasalaatti",
        ainekset: ["Vesimeloni", "Hunajameloni", "Feta", "Minttu", "Sitruunamehu"],
        ohje: "Paloittele melonit, lisää feta ja minttu. Purista sitruunamehua päälle."
    },
    {
        nimi: "Raikas vihersalaatti",
        ainekset: ["Salaattisekoitus", "Kurkut", "Herneet", "Kevätsipuli", "Oliiviöljy", "Balsamiviinietikka"],
        ohje: "Sekoita kaikki ainekset ja tarjoile."
    },
    {
        nimi: "Savulohisalaatti",
        ainekset: ["Savulohi", "Salaattisekoitus", "Kurkut", "Kirsikkatomaatit", "Punasipuli", "Sitruunamehu"],
        ohje: "Yhdistä kaikki ainekset ja purista sitruunamehua päälle."
    },
    {
        nimi: "Avokado-mangosalaatti",
        ainekset: ["Avokado", "Mango", "Punasipuli", "Korianteri", "Lime"],
        ohje: "Sekoita avokado ja mango, lisää punasipuli ja korianteri. Purista limemehua."
    },
    {
        nimi: "Kvinoa-kesäkurpitsasalaatti",
        ainekset: ["Keitetty kvinoa", "Kesäkurpitsa", "Minttu", "Feta", "Oliiviöljy"],
        ohje: "Sekoita keitetty kvinoa ja muut ainekset."
    },
    {
        nimi: "Tonnikala-pastasalaatti",
        ainekset: ["Keitetty pasta", "Tonnikala", "Kirsikkatomaatit", "Punasipuli", "Majoneesi"],
        ohje: "Sekoita kaikki ainekset ja tarjoile."
    },
    {
        nimi: "Kurpitsansiemen-rucolasalaatti",
        ainekset: ["Rucola", "Kurpitsansiemenet", "Parmesan", "Sitruunamehu", "Oliiviöljy"],
        ohje: "Sekoita kaikki ainekset ja lisää sitruunamehu."
    },
    {
        nimi: "Papu-maissisalaatti",
        ainekset: ["Keitetyt pavut", "Maissi", "Punasipuli", "Paprika", "Lime", "Oliiviöljy"],
        ohje: "Yhdistä ainekset ja tarjoile."
    }
];

// Funktio satunnaisen reseptin hakemiseen
function haeSatunnainenResepti() {
    const resepti = reseptit[Math.floor(Math.random() * reseptit.length)];
    const reseptiAlue = document.getElementById("resepti");
    
    // Näytetään resepti HTML-muodossa
    reseptiAlue.innerHTML = `
        <h2>${resepti.nimi}</h2>
        <h3>Ainekset:</h3>
        <ul>${resepti.ainekset.map(aine => `<li>${aine}</li>`).join('')}</ul>
        <h3>Ohjeet:</h3>
        <p>${resepti.ohje}</p>
    `;
}

// Lisätään tapahtuma kuuntelijaksi napille
document.getElementById("hae-resepti").addEventListener("click", haeSatunnainenResepti);