import { Competition, Competition_Result, db, eq } from "astro:db";
import type { TCompetitionResults } from "../types/TCompetitionResults";
import { getYearFromDate } from "./getYearFromDate";
import type { TCompetition } from "../types/TCompetition";
import { League } from "./league";

export async function getCurrentLeagueResults() {
    let league = new League;
    //console.log(league);
    league.setCategoryResult("batel", ["A", "M"]);
    
    const date = new Date();
    const year = getYearFromDate(date);
    const competitions: TCompetition[] = await db.select().from(Competition)
    const results: TCompetitionResults[] = await db.select().from(Competition_Result)

    return results;
}