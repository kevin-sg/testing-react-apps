describe("Test in demo", () => {
  test("This test must not be missed", () => {
    // 1. Initialization
    const message1 = "Hello word";

    // 2. Stimulus
    const message2 = message1.trim();

    // 3. Observer docuct... waiting
    expect(message1).toBe(message2);
  });
});
