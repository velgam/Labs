function showDate() {
    let out = document.getElementById('current-date');
    let today = new Date();
    out.innerHTML = `Текущее время: ${today.toLocaleString('ru-RU')}`;

    let localDates = document.getElementById('local-dates');
    localDates.innerHTML = '';

    locales.forEach(({ locale, name, timeZone }) => {
        let options = { timeZone, hour: '2-digit', minute: '2-digit', second: '2-digit', year: 'numeric', month: 'long', day: 'numeric' };
        let localeDate = document.createElement('div');
        localeDate.innerHTML = `${name}: ${new Intl.DateTimeFormat(locale, options).format(today)}`;
        localDates.appendChild(localeDate);
    });
}

let locales = [
    { locale: 'en-US', name: 'США', timeZone: 'America/New_York' },
    { locale: 'en-GB', name: 'Великобритания', timeZone: 'Europe/London' },
    { locale: 'fr-FR', name: 'Франция', timeZone: 'Europe/Paris' },
    { locale: 'de-DE', name: 'Германия', timeZone: 'Europe/Berlin' },
    { locale: 'ja-JP', name: 'Япония', timeZone: 'Asia/Tokyo' }
];

document.addEventListener('DOMContentLoaded', showDate);