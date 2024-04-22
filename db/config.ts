import { defineDb, defineTable, column } from 'astro:db';

// https://astro.build/db/config

const Team = defineTable({
  columns: {
    email: column.text({primaryKey: true, unique: true}),
    password: column.text(),
    name: column.text(),
    logo: column.text(),
    isActive: column.boolean(),
  }
})

const Competition = defineTable({
  columns: {
    id: column.number({primaryKey: true, unique: true,}),
    name: column.text(),
    year: column.text(),
    date: column.date(),
    location: column.text(),
    image: column.text(),
    boat_type_id: column.number(),
    available_categories: column.json(),
    lines: column.number({default: 4}),
    line_distance: column.number({default: 350}),
    isCancelled: column.boolean(),
    isActive: column.boolean(),
  }
})

const Competition_Result = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    competition_id: column.number({ references: () => Competition.columns.id }),
    team_id: column.text({ references: () => Team.columns.email }),
    category: column.text(),
    isFinal: column.boolean(),
    group: column.number(),
    time: column.text( {default: "DNS"} ),
    distance: column.number(),
    isLeague: column.boolean(),
    isChampionship: column.boolean(),
    isActive: column.boolean(),
  }
})

export default defineDb({
  tables: {
    Team,
    Competition,
    Competition_Result,
  }
});
