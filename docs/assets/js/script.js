let selectedCities = [];
let min = dateToTS(new Date().setHours(0, 0, 0, 0));
let max = dateToTS(new Date().setHours(24, 0, 0, 0));
let selectedTime = new Date();

let allCities = {};

let aryIanaTimeZones = [
    "Europe/Andorra",
    "Asia/Dubai",
    "Asia/Kabul",
    "Europe/Tirane",
    "Asia/Yerevan",
    "Antarctica/Casey",
    "Antarctica/Davis",
    "Antarctica/DumontDUrville", // https://bugs.chromium.org/p/chromium/issues/detail?id=928068
    "Antarctica/Mawson",
    "Antarctica/Palmer",
    "Antarctica/Rothera",
    "Antarctica/Syowa",
    "Antarctica/Troll",
    "Antarctica/Vostok",
    "America/Argentina/Buenos_Aires",
    "America/Argentina/Cordoba",
    "America/Argentina/Salta",
    "America/Argentina/Jujuy",
    "America/Argentina/Tucuman",
    "America/Argentina/Catamarca",
    "America/Argentina/La_Rioja",
    "America/Argentina/San_Juan",
    "America/Argentina/Mendoza",
    "America/Argentina/San_Luis",
    "America/Argentina/Rio_Gallegos",
    "America/Argentina/Ushuaia",
    "Pacific/Pago_Pago",
    "Europe/Vienna",
    "Australia/Lord_Howe",
    "Antarctica/Macquarie",
    "Australia/Hobart",
    "Australia/Currie",
    "Australia/Melbourne",
    "Australia/Sydney",
    "Australia/Broken_Hill",
    "Australia/Brisbane",
    "Australia/Lindeman",
    "Australia/Adelaide",
    "Australia/Darwin",
    "Australia/Perth",
    "Australia/Eucla",
    "Asia/Baku",
    "America/Barbados",
    "Asia/Dhaka",
    "Europe/Brussels",
    "Europe/Sofia",
    "Atlantic/Bermuda",
    "Asia/Brunei",
    "America/La_Paz",
    "America/Noronha",
    "America/Belem",
    "America/Fortaleza",
    "America/Recife",
    "America/Araguaina",
    "America/Maceio",
    "America/Bahia",
    "America/Sao_Paulo",
    "America/Campo_Grande",
    "America/Cuiaba",
    "America/Santarem",
    "America/Porto_Velho",
    "America/Boa_Vista",
    "America/Manaus",
    "America/Eirunepe",
    "America/Rio_Branco",
    "America/Nassau",
    "Asia/Thimphu",
    "Europe/Minsk",
    "America/Belize",
    "America/St_Johns",
    "America/Halifax",
    "America/Glace_Bay",
    "America/Moncton",
    "America/Goose_Bay",
    "America/Blanc-Sablon",
    "America/Toronto",
    "America/Nipigon",
    "America/Thunder_Bay",
    "America/Iqaluit",
    "America/Pangnirtung",
    "America/Atikokan",
    "America/Winnipeg",
    "America/Rainy_River",
    "America/Resolute",
    "America/Rankin_Inlet",
    "America/Regina",
    "America/Swift_Current",
    "America/Edmonton",
    "America/Cambridge_Bay",
    "America/Yellowknife",
    "America/Inuvik",
    "America/Creston",
    "America/Dawson_Creek",
    "America/Fort_Nelson",
    "America/Vancouver",
    "America/Whitehorse",
    "America/Dawson",
    "Indian/Cocos",
    "Europe/Zurich",
    "Africa/Abidjan",
    "Pacific/Rarotonga",
    "America/Santiago",
    "America/Punta_Arenas",
    "Pacific/Easter",
    "Asia/Shanghai",
    "Asia/Urumqi",
    "America/Bogota",
    "America/Costa_Rica",
    "America/Havana",
    "Atlantic/Cape_Verde",
    "America/Curacao",
    "Indian/Christmas",
    "Asia/Nicosia",
    "Asia/Famagusta",
    "Europe/Prague",
    "Europe/Berlin",
    "Europe/Copenhagen",
    "America/Santo_Domingo",
    "Africa/Algiers",
    "America/Guayaquil",
    "Pacific/Galapagos",
    "Europe/Tallinn",
    "Africa/Cairo",
    "Africa/El_Aaiun",
    "Europe/Madrid",
    "Africa/Ceuta",
    "Atlantic/Canary",
    "Europe/Helsinki",
    "Pacific/Fiji",
    "Atlantic/Stanley",
    "Pacific/Chuuk",
    "Pacific/Pohnpei",
    "Pacific/Kosrae",
    "Atlantic/Faroe",
    "Europe/Paris",
    "Europe/London",
    "Asia/Tbilisi",
    "America/Cayenne",
    "Africa/Accra",
    "Europe/Gibraltar",
    "America/Godthab",
    "America/Danmarkshavn",
    "America/Scoresbysund",
    "America/Thule",
    "Europe/Athens",
    "Atlantic/South_Georgia",
    "America/Guatemala",
    "Pacific/Guam",
    "Africa/Bissau",
    "America/Guyana",
    "Asia/Hong_Kong",
    "America/Tegucigalpa",
    "America/Port-au-Prince",
    "Europe/Budapest",
    "Asia/Jakarta",
    "Asia/Pontianak",
    "Asia/Makassar",
    "Asia/Jayapura",
    "Europe/Dublin",
    "Asia/Jerusalem",
    "Asia/Kolkata",
    "Indian/Chagos",
    "Asia/Baghdad",
    "Asia/Tehran",
    "Atlantic/Reykjavik",
    "Europe/Rome",
    "America/Jamaica",
    "Asia/Amman",
    "Asia/Tokyo",
    "Africa/Nairobi",
    "Asia/Bishkek",
    "Pacific/Tarawa",
    "Pacific/Enderbury",
    "Pacific/Kiritimati",
    "Asia/Pyongyang",
    "Asia/Seoul",
    "Asia/Almaty",
    "Asia/Qyzylorda",
    "Asia/Qostanay", // https://bugs.chromium.org/p/chromium/issues/detail?id=928068
    "Asia/Aqtobe",
    "Asia/Aqtau",
    "Asia/Atyrau",
    "Asia/Oral",
    "Asia/Beirut",
    "Asia/Colombo",
    "Africa/Monrovia",
    "Europe/Vilnius",
    "Europe/Luxembourg",
    "Europe/Riga",
    "Africa/Tripoli",
    "Africa/Casablanca",
    "Europe/Monaco",
    "Europe/Chisinau",
    "Pacific/Majuro",
    "Pacific/Kwajalein",
    "Asia/Yangon",
    "Asia/Ulaanbaatar",
    "Asia/Hovd",
    "Asia/Choibalsan",
    "Asia/Macau",
    "America/Martinique",
    "Europe/Malta",
    "Indian/Mauritius",
    "Indian/Maldives",
    "America/Mexico_City",
    "America/Cancun",
    "America/Merida",
    "America/Monterrey",
    "America/Matamoros",
    "America/Mazatlan",
    "America/Chihuahua",
    "America/Ojinaga",
    "America/Hermosillo",
    "America/Tijuana",
    "America/Bahia_Banderas",
    "Asia/Kuala_Lumpur",
    "Asia/Kuching",
    "Africa/Maputo",
    "Africa/Windhoek",
    "Pacific/Noumea",
    "Pacific/Norfolk",
    "Africa/Lagos",
    "America/Managua",
    "Europe/Amsterdam",
    "Europe/Oslo",
    "Asia/Kathmandu",
    "Pacific/Nauru",
    "Pacific/Niue",
    "Pacific/Auckland",
    "Pacific/Chatham",
    "America/Panama",
    "America/Lima",
    "Pacific/Tahiti",
    "Pacific/Marquesas",
    "Pacific/Gambier",
    "Pacific/Port_Moresby",
    "Pacific/Bougainville",
    "Asia/Manila",
    "Asia/Karachi",
    "Europe/Warsaw",
    "America/Miquelon",
    "Pacific/Pitcairn",
    "America/Puerto_Rico",
    "Asia/Gaza",
    "Asia/Hebron",
    "Europe/Lisbon",
    "Atlantic/Madeira",
    "Atlantic/Azores",
    "Pacific/Palau",
    "America/Asuncion",
    "Asia/Qatar",
    "Indian/Reunion",
    "Europe/Bucharest",
    "Europe/Belgrade",
    "Europe/Kaliningrad",
    "Europe/Moscow",
    "Europe/Simferopol",
    "Europe/Kirov",
    "Europe/Astrakhan",
    "Europe/Volgograd",
    "Europe/Saratov",
    "Europe/Ulyanovsk",
    "Europe/Samara",
    "Asia/Yekaterinburg",
    "Asia/Omsk",
    "Asia/Novosibirsk",
    "Asia/Barnaul",
    "Asia/Tomsk",
    "Asia/Novokuznetsk",
    "Asia/Krasnoyarsk",
    "Asia/Irkutsk",
    "Asia/Chita",
    "Asia/Yakutsk",
    "Asia/Khandyga",
    "Asia/Vladivostok",
    "Asia/Ust-Nera",
    "Asia/Magadan",
    "Asia/Sakhalin",
    "Asia/Srednekolymsk",
    "Asia/Kamchatka",
    "Asia/Anadyr",
    "Asia/Riyadh",
    "Pacific/Guadalcanal",
    "Indian/Mahe",
    "Africa/Khartoum",
    "Europe/Stockholm",
    "Asia/Singapore",
    "America/Paramaribo",
    "Africa/Juba",
    "Africa/Sao_Tome",
    "America/El_Salvador",
    "Asia/Damascus",
    "America/Grand_Turk",
    "Africa/Ndjamena",
    "Indian/Kerguelen",
    "Asia/Bangkok",
    "Asia/Dushanbe",
    "Pacific/Fakaofo",
    "Asia/Dili",
    "Asia/Ashgabat",
    "Africa/Tunis",
    "Pacific/Tongatapu",
    "Europe/Istanbul",
    "America/Port_of_Spain",
    "Pacific/Funafuti",
    "Asia/Taipei",
    "Europe/Kiev",
    "Europe/Uzhgorod",
    "Europe/Zaporozhye",
    "Pacific/Wake",
    "America/New_York",
    "America/Detroit",
    "America/Kentucky/Louisville",
    "America/Kentucky/Monticello",
    "America/Indiana/Indianapolis",
    "America/Indiana/Vincennes",
    "America/Indiana/Winamac",
    "America/Indiana/Marengo",
    "America/Indiana/Petersburg",
    "America/Indiana/Vevay",
    "America/Chicago",
    "America/Indiana/Tell_City",
    "America/Indiana/Knox",
    "America/Menominee",
    "America/North_Dakota/Center",
    "America/North_Dakota/New_Salem",
    "America/North_Dakota/Beulah",
    "America/Denver",
    "America/Boise",
    "America/Phoenix",
    "America/Los_Angeles",
    "America/Anchorage",
    "America/Juneau",
    "America/Sitka",
    "America/Metlakatla",
    "America/Yakutat",
    "America/Nome",
    "America/Adak",
    "Pacific/Honolulu",
    "America/Montevideo",
    "Asia/Samarkand",
    "Asia/Tashkent",
    "America/Caracas",
    "Asia/Ho_Chi_Minh",
    "Pacific/Efate",
    "Pacific/Wallis",
    "Pacific/Apia",
    "Africa/Johannesburg"
];
let myTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone

const getOffset = (timeZone = "UTC", date = new Date()) => {
    const utcDate = new Date(date.toLocaleString("en-US", {timeZone: "UTC"}));
    const tzDate = new Date(date.toLocaleString("en-US", {timeZone}));
    return (tzDate.getTime() - utcDate.getTime());
}
const prettyOffset = (timeZone) => {
    let offset = getOffset(timeZone)
    let hours = Math.floor(Math.abs(offset / (60*60*1000)));
    let min = Math.abs((offset % (60*60*1000))/(60*60*1000))*60;
    if (hours < 10) hours = "0" + hours
    if (min < 10) min = "0" + min
    return (offset<0 ? "-" : "+") + hours + ":" + min
}

function addMyTimeZoneClock() {
    let myCity = myTimeZone.split("/").reverse()
    addCity(myCity[0], myCity, myTimeZone)
}

function dateToTS(date, city, sourceCity) {
    if (!city)
        return date.valueOf();
    else {
        let dt, s
        if (!sourceCity) {
            dt = new Date(date);
            s = dt.toLocaleString("en-us", {timeZone: allCities[city].timeZone});
        } else {
            date -= getOffset(allCities[sourceCity].timeZone)
            date += getOffset(allCities[city].timeZone)
            s = new Date(date);
        }
        let value = new Date(s).valueOf()
        if (value >= max)
            value -= 24 * 60 * 60 * 1000
        else if (value <= min)
            value += 24 * 60 * 60 * 1000
        return value
    }
}

function tsToDate(ts) {
    let d = new Date(ts);
    let hour = d.getHours();
    let min = d.getMinutes();
    return (hour < 10 ? "0" + hour : hour) + ":" + (min < 10 ? "0" + min : min)
}

function addCity(key, name, timeZone) {

    let city = {timeZone, name}
    allCities[key] = city
    let element = `<div id="${key}-wrapper" class="form-group mb-3"><div class="input-group-prepend mb-2"><label for="tehran">${city.name.join(", ")} (${prettyOffset(timeZone)})</label></div><input type="text" class="js-range-slider" id="${key}" name="my_range" value=""/></div>`
    $(".container").append(element)
    $(`#${key}`).ionRangeSlider({
        skin: "big",
        grid: true,
        step: 60 * 1000,
        min, max, c: key,
        from: dateToTS(selectedTime, key),
        prettify: tsToDate,
        onChange: function (data) {
            selectedTime = data.from - getOffset(timeZone) + getOffset(myTimeZone)
            for (let d of Object.keys(allCities)) {
                if (d !== key) {
                    allCities[d].range.update({from: dateToTS(data.from, d, key)})
                }
            }
        }
    });
    allCities[key].range = $(`#${key}`).data("ionRangeSlider");
}

function removeCity(key) {
    if (allCities[key]) {
        allCities[key].range.destroy();
        delete allCities[key]
        $(`#${key}-wrapper`).remove();
    }
}

function prepareCitySelector() {
    const citySelector = new SlimSelect({
        select: "#citySelector",
        limit: 10,
        closeOnSelect: false,
        onChange: (info) => {
            let selections = info.map(i => i.value)
            let filteredArray = selections.filter((a) => selectedCities.includes(a));
            let addedValue = selections.filter((a) => !filteredArray.includes(a))[0];
            let removedValue = selectedCities.filter((a) => !filteredArray.includes(a))[0];
            selectedCities = selections;
            if (removedValue) {
                let city = removedValue.split("/").reverse()
                removeCity(city[0], city, removedValue)
            }
            if (addedValue) {
                let city = addedValue.split("/").reverse()
                addCity(city[0], city, addedValue)
            }
        }
    })
    let cityData = aryIanaTimeZones.map(a => {
        let text = a.split("/").reverse().join(", ")+` (${prettyOffset(a)})`
        return {value: a, text, mandatory: a===myTimeZone,offset:getOffset(a)}
    })
    citySelector.setData(cityData.sort((a,b) => (a.offset > b.offset) ? -1 : ((b.offset > a.offset) ? 1 : 0)))

    citySelector.set(myTimeZone)
    citySelector.set('Australia/Melbourne')
    citySelector.set('Europe/Berlin')
    citySelector.set('Europe/London')
    citySelector.set('America/Los_Angeles')
    citySelector.set('America/Vancouver')
}

$(document).ready(function () {
    // addMyTimeZoneClock()
    prepareCitySelector()
    //=======================================================
})