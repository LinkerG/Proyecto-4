import { defineDb, defineTable, column } from 'astro:db';

// https://astro.build/db/config

const Team = defineTable({
  columns: {
    email: column.text({primaryKey: true, unique: true}),
    password: column.text(),
    name: column.text(),
    logo: column.text(),
  }
})

const Boat_type = defineTable({
  columns: {
    id: column.number({primaryKey: true, unique: true}),
    boat_type: column.text(),
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
    boat_type_id: column.number({ references: () => Boat_type.columns.id }),
    available_categories: column.json(),
    lines: column.number({default: 4}),
    isCancelled: column.boolean(),
    isActive: column.boolean(),
  }
})

const Competition_Result = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    competition_id: column.number({ references: () => Competition.columns.id }),
    team_id: column.text({ references: () => Team.columns.email }),
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
    Boat_type,
    Competition,
    Competition_Result,
  }
});
