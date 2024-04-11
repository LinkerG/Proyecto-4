import { defineDb, defineTable, column } from 'astro:db';

// https://astro.build/db/config
const Teams = defineTable({
  columns: {
    id: column.number({primaryKey: true}),
    name: column.text(),
    logo: column.text(),
  }
})

const Boat_types = defineTable({
  columns: {
    id: column.number({primaryKey: true}),
    boat_type: column.text(),

  }
})

const Competitions = defineTable({
  columns: {
    id: column.number({primaryKey: true}),
    year: column.number(),
    date: column.date(),
    boat_type_id: column.number({ references: () => Boat_types.columns.id }),
    available_categories: column.json(),
  }
})

export default defineDb({
  tables: {
    Teams,
    Boat_types,
    Competitions,
  }
});
