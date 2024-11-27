test("For the second time", async () => {
  const response = await fetch("http://localhost:3000/api/v1/migrations", {
    method: "POST",
  });
  expect(response.status).toBe(200);
  const responseJson = await response.json();
  expect(Array.isArray(responseJson)).toBeTruthy();
  expect(responseJson.length).toBe(0);
});
