export function getYearFromDate(date: Date){
    let year;
    
    if(date.getMonth() < 8) {
        year = date.getFullYear() + "-" + (year.getFullYear()-1)
    } else {
        year = date.getFullYear() + "-" + (year.getFullYear()+1)
    }

    return year
}