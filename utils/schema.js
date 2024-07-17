import { pgTableCreator } from "drizzle-orm/pg-core";

export const Ideas=pgTable('ideas',{
    id:serial('id').primarykey(),
    content:varchar('content').notNull(),
    ideas:varchar('ideas').notNull(),
    vote:interger('vote').default(0),
    createdAt:varchar('createdAt').notNull()
})