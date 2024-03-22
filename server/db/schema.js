"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tarefas = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
exports.tarefas = (0, pg_core_1.pgTable)("tarefas", {
    id: (0, pg_core_1.integer)("id").primaryKey(),
    text: (0, pg_core_1.text)("text").notNull(),
    done: (0, pg_core_1.boolean)("done").default(false).notNull(),
});
