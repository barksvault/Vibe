describe("Get weather", () => {
  it("Get weather data", () => {
    cy.request(
      "http://api.openweathermap.org/data/2.5/weather?q=Hamburg&units=metric&appid=9000a13cb01f156d8f261209d67d50c6"
    ).should(response => {
      expect(response.status).to.eq(200);
      expect(response).to.have.property("headers");
      expect(response).to.have.property("duration");
    });
  });
});
