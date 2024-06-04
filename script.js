/* Zegary -----------------------------------*/
document.addEventListener('DOMContentLoaded', function () {
    const vacationTitle = document.getElementById('vacationTitle');
    const vacationTimer = document.getElementById('vacationTimer');
    const yearTimer = document.getElementById('yearTimer');

    function getNextVacationStart() {
        const now = new Date();
        const currentYear = now.getFullYear();
        const vacationStart = new Date(currentYear, 5, 22);

        if (now > vacationStart) {
            return new Date(currentYear + 1, 5, 22);
        } else {
            return vacationStart;
        }
    }

    function getNextVacationEnd() {
        const now = new Date();
        const currentYear = now.getFullYear();
        const vacationEnd = new Date(currentYear, 8, 1);

        if (now > vacationEnd) {
            return new Date(currentYear + 1, 8, 1);
        } else {
            return vacationEnd;
        }
    }

    function getNextYearEnd() {
        const now = new Date();
        const currentYear = now.getFullYear();
        return new Date(currentYear + 1, 0, 1);
    }

    function updateClocks() {
        const now = new Date();
        let nextVacation = getNextVacationStart();
        let vacationText = 'Do wakacji:';

        if (now > nextVacation) {
            nextVacation = getNextVacationEnd();
            vacationText = 'Do końca wakacji:';
        }

        const vacationDiff = nextVacation - now;
        const yearDiff = getNextYearEnd() - now;

        const daysVacation = Math.floor(vacationDiff / (1000 * 60 * 60 * 24));
        const hoursVacation = Math.floor((vacationDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutesVacation = Math.floor((vacationDiff % (1000 * 60 * 60)) / (1000 * 60));
        const secondsVacation = Math.floor((vacationDiff % (1000 * 60)) / 1000);

        const daysYear = Math.floor(yearDiff / (1000 * 60 * 60 * 24));
        const hoursYear = Math.floor((yearDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutesYear = Math.floor((yearDiff % (1000 * 60 * 60)) / (1000 * 60));
        const secondsYear = Math.floor((yearDiff % (1000 * 60)) / 1000);

        vacationTitle.textContent = vacationText;
        vacationTimer.textContent = `${daysVacation} dni, ${hoursVacation} godz., ${minutesVacation} min., ${secondsVacation} sek.`;
        yearTimer.textContent = `${daysYear} dni, ${hoursYear} godz., ${minutesYear} min., ${secondsYear} sek.`;
    }

    setInterval(updateClocks, 1000);
    updateClocks();
});
