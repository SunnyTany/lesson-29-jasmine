describe(" testing ageClassification", function() {
  it("-1 - null", function() {

    expect(ageClassification(-1)).toBe(null);
  });
  it("24 - детский возраст", function() {
    expect(ageClassification(24)).toBe('детский возраст');
  });
  it("24.01 - молодой возраст", function() {
    expect(ageClassification(24.01)).toBe('молодой возраст');
  });
  it("44 - молодой возраст", function() {
    expect(ageClassification(44)).toBe('молодой возраст');
  });
  it("44.01 - средний возраст", function() {
    expect(ageClassification(44.01)).toBe('средний возраст');
  });
  it("65 - средний возраст", function() {
    expect(ageClassification(65)).toBe('средний возраст');
  });
  it("65.01 - пожилой возраст", function() {
    expect(ageClassification(65.01)).toBe('пожилой возраст');
  });
  it("75 - пожилой возраст", function() {
    expect(ageClassification(75)).toBe('пожилой возраст');
  });
  it("75.01 - старческий возраст", function() {
    expect(ageClassification(75.01)).toBe('старческий возраст');
  });
  it("90 - старческий возраст", function() {
    expect(ageClassification(90)).toBe('старческий возраст');
  });
  it("90.01 - долгожители", function() {
    expect(ageClassification(90.01)).toBe('долгожители');
  });
  it("122 - пожилой возраст", function() {
    expect(ageClassification(122)).toBe('долгожители');
  });
  it("122.01 - null", function() {
    expect(ageClassification(122.01)).toBe(null);
  });
});

describe("myMax", function() {
  it("самое большое число в массиве [1,2,3,15] - 15", function() {
    expect(myMax([1,2,3,15])).toBe(15);
  });
  it("самое большое число в массиве [15,25,37,155] - 155", function() {
    expect(myMax([15,25,37,155])).toBe(155);
  });
  it("самое большое число в массиве [10,20,30,120] - 120", function() {
    expect(myMax([10,20,30,120])).toBe(120);
  });
  it("самое большое число в массиве [10,34,3,78] - 78", function() {
    expect(myMax([10,34,3,78])).toBe(78);
  });
});