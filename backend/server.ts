const server = Deno.listen({ port: 8080 });

for await (const conn of server) {
	serveHttp(conn);
}

async function serveHttp(conn: Deno.Conn) {
	const httpConn = Deno.serveHttp(conn);


	for await (const requestEvent of httpConn) {
		requestEvent.respondWith(
			new Response("Server is running", {
				status: 200
			}),
		);
	}
}

export {};

