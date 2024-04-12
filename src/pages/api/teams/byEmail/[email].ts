import { db, eq, Teams } from 'astro:db';

export async function GET({ params }) {
    const email = params.email;

    const team = await db.select().from(Teams).where(
        eq(Teams.email, email)
    )
    
    if (!team) {
      return new Response(null, {
        status: 404,
        statusText: 'Not found'
      });
    }
  
    return new Response(
      JSON.stringify(team), {
        status: 200,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }