import type { TCompetition } from "../types/TCompetition";

export function getUniqueYears(competitions: TCompetition[]): string[] {
    const uniqueYears: string[] = [];

    competitions.forEach(competition => {
        const year = competition.year
        if (!uniqueYears.includes(year)) {
            uniqueYears.push(year);
        }
    });

    return uniqueYears;
}