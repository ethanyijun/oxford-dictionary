import { Entry } from "../types/types";
import { mapEntryResult } from "../utils/mapEntryResult";

describe("mapEntryResult", () => {
  it("mapEntryResult should map to the right result", () => {
    const entry: Entry = {
      etymologies: [""],
      pronunciations: [""],
      senses: [
        {
          definitions: ["This is the definition"],
          subsenses: [],
          crossReferenceMarkers: [""],
          examples: [{ text: "This is the example." }],
        },
      ],
    };
    expect(mapEntryResult(entry)).toStrictEqual([
      { definition: "This is the definition", example: "This is the example." },
    ]);
  });
});
