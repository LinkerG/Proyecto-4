import { Competition, Competition_Result, db, eq } from "astro:db";
import type { TCompetitionResults } from "../types/TCompetitionResults";
import { getYearFromDate } from "./getYearFromDate";
import type { TCompetition } from "../types/TCompetition";

export async function getCurrentLeagueResults() {
    const date = new Date();
    const year = getYearFromDate(date);
    const competitions: TCompetition[] = await db.select().from(Competition)
    const results: TCompetitionResults[] = await db.select().from(Competition_Result)

    return results;
}