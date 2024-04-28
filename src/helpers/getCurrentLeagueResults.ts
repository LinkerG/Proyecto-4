import { Competition, Competition_Result, db, eq } from "astro:db";
import type { TCompetitionResults } from "../types/TCompetitionResults";
import { getYearFromDate } from "./getYearFromDate";
import type { TCompetition } from "../types/TCompetition";
import { League } from "./league";
import { getTimeInMilliseconds } from "./getTimeInMilliseconds";

export async function getCurrentLeagueResults(year) {
    let league = new League;
    
    const competitions: TCompetition[] = await db.select().from(Competition).where(eq(Competition.year, year))
    const results: TCompetitionResults[] = await db.select().from(Competition_Result)

    competitions.forEach(competition => {
        
        const competitionResults = results.filter(result => {
            return result.competition_id === competition.id && result.isLeague && result.isFinal;
        });
        
        const groupedResults = competitionResults.reduce((acc, obj) => {
            const { category } = obj;
            
            if (!acc[category]) {
                acc[category] = [];
            }
            
            acc[category].push(obj);
            
            // Ordenar los resultados por tiempo
            acc[category].sort((a, b) => {
                const timeA = getTimeInMilliseconds(a.time);
                const timeB = getTimeInMilliseconds(b.time);
                return timeA - timeB;
            });
            
            return acc;
        }, {});
          
        for (const category in groupedResults) {
            let points = 20;
            const categoryArray = category.split("")
            if (groupedResults.hasOwnProperty(category)) {
              const items = groupedResults[category];
              items.forEach(item => {
                league.addCategoryResult(competition.boat_type, categoryArray, item.team_id, points)
                points -= 1
              });
            }
          }
    });

    return league;
}