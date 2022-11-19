import { getGifs } from "@/helpers";

const dataTest = {
  title: expect.any(String),
  id: expect.any(String),
  url: expect.any(String),
};

describe("first", () => {
  test("should return a gif array ", async () => {
    const data = await getGifs("Goku");

    expect(data.length).toBe(10);
    expect(data[0]).toEqual(dataTest);
    expect(data[0].url.includes("http")).toBe(true);
  });
});
