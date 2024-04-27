import type { TAvailableCategories } from "./TAvailableCategories";

export type TCompetition = {
    id:                   string;
    name:                 string;
    year:                 string;
    date:                 Date;
    location:             string;
    image:                string;
    boat_type_id:         number;
    available_categories: TAvailableCategories;
    lines:                number;
    line_distance:        number;
    isCancelled:          boolean;
    isActive:             boolean;
}