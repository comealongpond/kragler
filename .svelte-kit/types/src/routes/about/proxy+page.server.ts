// @ts-nocheck
//import * as db from '$lib/server/database';
 
/** @param {Parameters<import('./$types').PageServerLoad>[0]} event */
export async function load({ params }: { params: any }) {
  return {
    post: {
      content: 'yeet'//await db.getPost(params.slug)
    }
  };
}