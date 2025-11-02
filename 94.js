// Fajl: script.js (Adaptiran za Browser)

// --- 1. KOMPLETAN RED VOŽNJE ZA OBA SMERA (HH:MM:SS format) ---

// Smer A: Novi Beograd /Blok 45/ - Resnik /Edvarda Griga/
const timetableMapA = {
    "04:30:00": 1,
    "04:50:00": 3,

    "05:05:00": 5,
    "05:20:00": 8,
    "05:35:00": 18,
    "05:46:00": 9,
    "05:57:00": 11,

    "06:07:00": 12,
    "06:17:00": 13,
    "06:26:00": 14,
    "06:35:00": 15,
    "06:44:00": 16,
    "06:53:00": 17,

    "07:01:00": 1,
    "07:10:00": 2,
    "07:19:00": 3,
    "07:28:00": 4,
    "07:37:00": 5,
    "07:46:00": 6,
    "07:55:00": 7,

    "08:04:00": 8,
    "08:12:00": 18,
    "08:21:00": 9,
    "08:30:00": 10,
    "08:39:00": 11,
    "08:48:00": 12,
    "08:57:00": 13,

    "09:05:00": 14,
    "09:14:00": 15,
    "09:23:00": 16,
    "09:32:00": 17,
    "09:41:00": 1,
    "09:50:00": 2,
    "09:58:00": 3,

    "10:07:00": 4,
    "10:16:00": 5,
    "10:25:00": 6,
    "10:34:00": 7,
    "10:42:00": 8,
    "10:51:00": 9,

    "11:00:00": 10,
    "11:09:00": 11,
    "11:18:00": 12,
    "11:27:00": 13,
    "11:35:00": 14,
    "11:44:00": 15,
    "11:53:00": 16,

    "12:02:00": 17,
    "12:11:00": 1,
    "12:19:00": 2,
    "12:28:00": 3,
    "12:37:00": 4,
    "12:46:00": 18,
    "12:54:00": 5,

    "13:03:00": 6,
    "13:12:00": 7,
    "13:21:00": 8,
    "13:30:00": 9,
    "13:39:00": 10,
    "13:47:00": 11,
    "13:56:00": 12,

    "14:05:00": 13,
    "14:14:00": 14,
    "14:22:00": 15,
    "14:31:00": 16,
    "14:40:00": 17,
    "14:49:00": 1,
    "14:58:00": 2,

    "15:07:00": 3,
    "15:15:00": 4,
    "15:24:00": 18,
    "15:33:00": 5,
    "15:42:00": 6,
    "15:51:00": 7, 

    "16:00:00": 8,
    "16:09:00": 9,
    "16:18:00": 10,
    "16:27:00": 11,
    "16:36:00": 12,
    "16:45:00": 13,
    "16:54:00": 14,

    "17:03:00": 15,
    "17:12:00": 16,
    "17:21:00": 17,
    "17:30:00": 1,
    "17:40:00": 2,
    "17:50:00": 3,

    "18:00:00": 4,
    "18:10:00": 8,
    "18:20:00": 6,
    "18:30:00": 7,
    "18:40:00": 8,
    "18:50:00": 9,

    "19:00:00": 10,
    "19:10:00": 11,
    "19:20:00": 12,
    "19:31:00": 13,
    "19:42:00": 14,
    "19:53:00": 17,

    "20:04:00": 1,
    "20:15:00": 2,
    "20:26:00": 3,
    "20:37:00": 4,
    "20:48:00": 6,
    "20:59:00": 7,

    "21:11:00": 8,
    "21:23:00": 9,
    "21:36:00": 11,
    "21:49:00": 12,

    "22:02:00": 14,
    "22:15:00": 17,
    "22:30:00": 2,
    "22:50:00": 3,

    "23:15:00": 7,
};

// Smer B: Resnik /Edvarda Griga/-Novi Beograd/Blok 45/
const timetableMapB = {
    "05:00:00": 13,
    "05:15:00": 15,
    "05:30:00": 16,
    "05:43:00": 1,
    "05:54:00": 3,

    "06:05:00": 4,
    "06:15:00": 5,
    "06:24:00": 6,
    "06:33:00": 7,
    "06:41:00": 8,
    "06:50:00": 18,
    "06:59:00": 9,

    "07:07:00": 10,
    "07:16:00": 11,
    "07:25:00": 12,
    "07:33:00": 13,
    "07:42:00": 14,
    "07:51:00": 15,
    "07:59:00": 16,

    "08:08:00": 17,
    "08:17:00": 1,
    "08:25:00": 2,
    "08:34:00": 3,
    "08:43:00": 4,
    "08:52:00": 5,

    "09:00:00": 6,
    "09:09:00": 7,
    "09:18:00": 8,
    "09:27:00": 18,
    "09:36:00": 9,
    "09:44:00": 10,
    "09:53:00": 11,

    "10:02:00": 12,
    "10:11:00": 13,
    "10:20:00": 14,
    "10:29:00": 15,
    "10:38:00": 16,
    "10:47:00": 17,
    "10:56:00": 1,

    "11:05:00": 2,
    "11:14:00": 3,
    "11:23:00": 4,
    "11:32:00": 5,
    "11:41:00": 6,
    "11:50:00": 7,
    "11:59:00": 8,

    "12:08:00": 9,
    "12:17:00": 10,
    "12:26:00": 11,
    "12:35:00": 12,
    "12:44:00": 13,
    "12:53:00": 14,

    "13:02:00": 15,
    "13:11:00": 16,
    "13:20:00": 17,
    "13:29:00": 1,
    "13:38:00": 2,
    "13:47:00": 3,
    "13:56:00": 4,

    "14:05:00": 18,
    "14:14:00": 5,
    "14:23:00": 6,
    "14:32:00": 7,
    "14:41:00": 8,
    "14:50:00": 9,
    "14:59:00": 10,

    "15:08:00": 11,
    "15:17:00": 12,
    "15:26:00": 13,
    "15:36:00": 14,
    "15:45:00": 15,
    "15:54:00": 16,

    "16:03:00": 17,
    "16:13:00": 1,
    "16:22:00": 2,
    "16:31:00": 3,
    "16:40:00": 4,
    "16:49:00": 18,
    "16:58:00": 5,

    "17:07:00": 6,
    "17:16:00": 7,
    "17:25:00": 8,
    "17:35:00": 9,
    "17:44:00": 10,
    "17:54:00": 11,

    "18:03:00": 12,
    "18:12:00": 13,
    "18:22:00": 14,
    "18:31:00": 16,
    "18:40:00": 17,
    "18:50:00": 1,
    "18:59:00": 2,

    "19:09:00": 3,
    "19:19:00": 4,
    "19:28:00": 18,
    "19:38:00": 6,
    "19:48:00": 7,
    "19:57:00": 8,

    "20:07:00": 9,
    "20:17:00": 10,
    "20:26:00": 11,
    "20:36:00": 12,
    "20:46:00": 13,
    "20:57:00": 14,

    "21:10:00": 17,
    "21:25:00": 2,
    "21:40:00": 3,
    "21:55:00": 6,

    "22:10:00": 7,
    "22:25:00": 8,
    "22:40:00": 11,
    "22:55:00": 12,

    "23:15:00": 14,
    "23:35:00": 2,

    "00:00:00": 3,
};

// --- 2. MAPIRANJE URL-OVA I REDOVA VOŽNJE ---

const URLS = [
    // Smer A: Blok 45 -> Resnik
    { direction: "Blok 45 -> Resnik", url: "https://beograd.prometko.si/api/stations/arrivals?station=22923", timetable: timetableMapA },
    { direction: "Blok 45 -> Resnik", url: "https://beograd.prometko.si/api/stations/arrivals?station=20943", timetable: timetableMapA },
    { direction: "Blok 45 -> Resnik", url: "https://beograd.prometko.si/api/stations/arrivals?station=20281", timetable: timetableMapA },
    { direction: "Blok 45 -> Resnik", url: "https://beograd.prometko.si/api/stations/arrivals?station=20798", timetable: timetableMapA },
    
    // Smer B: Resnik -> Blok 45
    { direction: "Resnik -> Blok 45", url: "https://beograd.prometko.si/api/stations/arrivals?station=20783", timetable: timetableMapB },
    { direction: "Resnik -> Blok 45", url: "https://beograd.prometko.si/api/stations/arrivals?station=20797", timetable: timetableMapB },
    { direction: "Resnik -> Blok 45", url: "https://beograd.prometko.si/api/stations/arrivals?station=20284", timetable: timetableMapB },
    { direction: "Resnik -> Blok 45", url: "https://beograd.prometko.si/api/stations/arrivals?station=20944", timetable: timetableMapB },
    { direction: "Resnik -> Blok 45", url: "https://beograd.prometko.si/api/stations/arrivals?station=20888", timetable: timetableMapB },
];

const CLEAN_REGEX = /[^\d:.]/g;

/**
 * Prikazuje rezultate u tabeli na HTML stranici.
 * @param {Array} results - Sortirana lista rezultata.
 */
function displayResults(results) {
    const tableBody = document.getElementById('lista-polazaka');
    const statusDiv = document.getElementById('status-poruka');
    
    // Čistimo prethodne rezultate
    tableBody.innerHTML = ''; 

    if (results.length > 0) {
        results.forEach((result) => {
            const vehicleStr = String(result.vehicle);

            // Ako ima tačno 5 cifara — dodaj "P" ispred
            const vehicleId = vehicleStr.length === 5
                ? `P${vehicleStr}`
                : vehicleStr;

            const direction = result.direction || "Nepoznat Smer"; 

            const row = tableBody.insertRow();
            
            // Kolona 1: Polazak (Broj bloka)
            const cellBlock = row.insertCell();
            cellBlock.textContent = result.block; 

            // Kolona 2: ID Vozila
            const cellVehicle = row.insertCell();
            cellVehicle.textContent = vehicleId; 
            
            // Kolona 3: Smer
            const cellDirection = row.insertCell();
            cellDirection.textContent = direction;

            // Kolona 4: Planirano Vreme Polaska
            const cellTime = row.insertCell();
            cellTime.textContent = result.time.substring(0, 5); // Prikazujemo samo HH:MM
        });
        
        statusDiv.style.color = 'green';
        statusDiv.textContent = `✅ Uspesno ažurirano. Prikazano je ${results.length} aktivnih polazaka Linije 94.`;

    } else {
        const row = tableBody.insertRow();
        const cell = row.insertCell();
        cell.colSpan = 4; // Spajanje kolona
        cell.textContent = "⚠️ Nema aktivnih polazaka koji se poklapaju sa redom vožnje.";
        statusDiv.style.color = 'red';
        statusDiv.textContent = "⚠️ Nema aktivnih polazaka koji se poklapaju sa redom vožnje. Proveravam ponovo za 30 sekundi.";
    }
}

async function checkArrivals() {
    let allResults = [];
    const statusDiv = document.getElementById('status-poruka');
    if (statusDiv) {
        statusDiv.style.color = 'orange';
        statusDiv.textContent = "⏳ Pokrenuto: Provera aktivnih polazaka...";
    }

    for (const { direction, url, timetable } of URLS) {
        try {
            const response = await fetch(url);
            
            if (!response.ok) {
                console.warn(`Greška ${response.status} na URL-u: ${url}`);
                continue;
            }
            
            const data = await response.json();
            const arrivals = data.data && data.data.arrivals ? data.data.arrivals : null;

            if (!arrivals || arrivals.length === 0) {
                continue;
            }

            arrivals
                .filter((bus) => bus.lc === "94") // Filtriramo samo liniju 94
                .forEach((bus) => {
                    const vehicleId = bus.i; 
                    let apiTime = bus.dt; 

                    if (!apiTime) return; 

                    // Čišćenje i formatiranje vremena (HH:MM:SS)
                    apiTime = apiTime.trim().replace(CLEAN_REGEX, '');
                    if (apiTime.includes('.')) {
                        apiTime = apiTime.split('.')[0];
                    }
                    if (apiTime.length === 5 && apiTime.includes(':')) {
                        apiTime = apiTime + ":00";
                    }
                    
                    const blockNumber = timetable[apiTime];

                    if (blockNumber) {
                        allResults.push({
                            time: apiTime,
                            block: blockNumber,
                            vehicle: vehicleId,
                            direction: direction, // Dodajemo smer
                        });
                    }
                });

        } catch (error) {
            console.error("Greška pri dohvatanju podataka:", error);
            if (statusDiv) {
                statusDiv.style.color = 'red';
                statusDiv.textContent = "🔴 Kritična greška pri dohvatanju podataka. Proverite konzolu.";
            }
        }
    }

    // --- 3. FINALNA OBRADA I PRIKAZ REZULTATA ---

    // Izdvajanje samo jedinstvenih rezultata (kombinacija bloka i vozila)
    const uniqueResults = allResults.filter((item, index, self) =>
        index === self.findIndex((t) => (
            t.block === item.block && t.vehicle === item.vehicle
        ))
    );

    // Sortiranje po broju bloka
    uniqueResults.sort((a, b) => {
        return a.block - b.block;
    });

    // Prikaz rezultata u HTML-u
    displayResults(uniqueResults);
    
    // Postavi da se provera ponavlja svakih 30 sekundi
    setTimeout(checkArrivals, 30000); 
}

// Čekamo da se HTML stranica učita pre pokretanja provere
window.onload = function() {
    // Postavi naslov linije
    const brojLinijeSpan = document.getElementById('broj-linije');
    if (brojLinijeSpan) {
        brojLinijeSpan.textContent = "94"; // Samo broj linije
    }
    
    // Pokrećemo prvu proveru
    checkArrivals();
};
