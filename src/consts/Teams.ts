import { Team, db } from "astro:db";
import { type TTeam } from "../types/TTeam";

const teams: TTeam[] = await db.select().from(Team)

export const TEAMS = teams;