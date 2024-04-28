import { Competition, Competition_Result, db, eq } from "astro:db";
import type { TCompetitionResults } from "../types/TCompetitionResults";
import { getYearFromDate } from "./getYearFromDate";
import type { TCompetition } from "../types/TCompetition";
import { League } from "./league";

export async function getCurrentLeagueResults() {
    let league = new League;
    
    const date = new Date();
    const year = getYearFromDate(date);
    
    const competitions: TCompetition[] = await db.select().from(Competition).where(eq(Competition.year, year))
    const results: TCompetitionResults[] = await db.select().from(Competition_Result)

    competitions.forEach(competition => {
        const competitionResults = results.filter(result => result.competition_id === competition.id);
        competitionResults.forEach(result => {
            const boatType = competition.boat_type
            const categoryArray = result.category.split("");
            const category: [string, string] = [categoryArray[0], categoryArray[1]];
            const teamResult = { [result.team_id] : [result.time] }
            league.addCategoryResult(boatType, category, teamResult) 
        });
    });

    return league;
}