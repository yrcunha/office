test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);
  const responseJson = await response.json();
  expect(responseJson).toEqual({
    updated_at: new Date(responseJson.updated_at).toISOString(),
    dependencies: {
      database: {
        max_connections: 100,
        opened_connections: 1,
        version: "17.2",
      },
    },
  });
});
