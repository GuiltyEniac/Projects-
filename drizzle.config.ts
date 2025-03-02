import "dotenv/config"
import { defineConfig } from "drizzle-kit"

if(!process.env.TURSO_CONNECTION_URL){
    throw new Error("No DATABASE_URL provided!")
}

if(!process.env.TURSO_AUTH_TOKEN){
    throw new Error("No DATABASE_URL provided!")
}


export default defineConfig({ 
    dialect: "turso",
    dbCredentials: {
        url: process.env.TURSO_CONNECTION_URL,
        authToken: process.env.TURSO_AUTH_TOKEN
    },
    schema: "./src/db/schemas.ts",
    out: "./src/db/migrations"
});