import type { TAvailableCategories } from "./TAvailableCategories";

export type TCompetition = {
    id:                   number;
    name:                 string;
    year:                 string;
    date:                 Date;
    location:             string;
    image:                string;
    boat_type_id:         number;
    available_categories: TAvailableCategories;
    lines:                number;
    isCancelled:          boolean;
    isActive:             boolean;
}