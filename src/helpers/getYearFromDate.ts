export function getYearFromDate(date: Date): string {
    let year;

    if (date.getMonth() < 8) {
        year = date.getFullYear() - 1 + "-" + date.getFullYear();
    } else {
        year = date.getFullYear() + "-" + (date.getFullYear() + 1);
    }

    return year;
}
