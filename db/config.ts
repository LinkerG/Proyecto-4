import { defineDb, defineTable, column } from 'astro:db';

// https://astro.build/db/config

const Teams = defineTable({
  columns: {
    email: column.text({primaryKey: true, unique: true}),
    password: column.text(),
    name: column.text(),
    logo: column.text(),
  }
})

const Boat_types = defineTable({
  columns: {
    id: column.number({primaryKey: true, unique: true}),
    boat_type: column.text(),
  }
})

const Competitions = defineTable({
  columns: {
    id: column.number({primaryKey: true, unique: true,}),
    name: column.text(),
    year: column.text(),
    date: column.date(),
    location: column.text(),
    image: column.text(),
    boat_type_id: column.number({ references: () => Boat_types.columns.id }),
    available_categories: column.json(),
    lines: column.number({default: 4}),
    isCancelled: column.boolean(),
    isActive: column.boolean(),
  }
})

const Competitions_Results = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    competition_id: column.number({ references: () => Competitions.columns.id }),
    team_id: column.text({ references: () => Teams.columns.email }),
    time: column.text( {default: "DNS"} ),
    distance: column.number(),
    isLeague: column.boolean(),
    isActive: column.boolean(),
  }
})

export default defineDb({
  tables: {
    Teams,
    Boat_types,
    Competitions,
    Competitions_Results,
  }
});
