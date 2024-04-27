export type TCompetitionResults = {
    id:             string;
    competition_id: string;
    team_id:        string;
    category:       string;
    isFinal:        boolean;
    group:          number;
    time:           string;
    distance:       number;
    isLeague:       boolean;
    isChampionship: boolean;
    isActive:       boolean;
}