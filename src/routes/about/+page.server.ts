//import * as db from '$lib/server/database';
 
/** @type {import('./$types').PageServerLoad} */
export async function load({ params }: { params: any }) {
  return {
    post: {
      content: 'yeet'//await db.getPost(params.slug)
    }
  };
}