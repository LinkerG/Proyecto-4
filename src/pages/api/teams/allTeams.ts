import { db, Teams } from 'astro:db';

export async function GET({}) {
    const allTeams = await db.select().from(Teams)
  
    if (!allTeams) {
      return new Response(null, {
        status: 404,
        statusText: 'Not found'
      });
    }
  
    return new Response(
      JSON.stringify(allTeams), {
        status: 200,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }