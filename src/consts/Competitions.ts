import { Competition, db } from "astro:db";
import type { TCompetition } from "../types/TCompetition";

const competitions: TCompetition[] = await db.select().from(Competition)

export const COMPETITIONS = competitions;