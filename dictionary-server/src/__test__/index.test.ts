import request from "supertest";
import app from "..";

describe("GET /lookup", () => {
  it("should return", async () => {
    const res = await request(app).get("/lookup?language=en-gb&word=idiom");
    const results = [
      {
        definition:
          "a group of words established by usage as having a meaning not deducible from those of the individual words (e.g. over the moon, see the light).",
        example: "",
      },
      {
        definition:
          "a form of expression natural to a language, person, or group of people",
        example: "he had a feeling for phrase and idiom",
      },
      {
        definition: "the dialect of a people or part of a country.",
        example: "",
      },
      {
        definition: "a characteristic mode of expression in music or art",
        example: "they were both working in a neo-impressionist idiom",
      },
    ];
    expect(res.body.entries).toEqual(results);
  });
});
