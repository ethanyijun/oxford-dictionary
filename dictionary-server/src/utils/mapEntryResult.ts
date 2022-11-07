import { Entry, SenseResponse } from "../types/types";

export const mapEntryResult = (entry: Entry): SenseResponse[] => {
  const results: SenseResponse[] = [];
  entry.senses.forEach((sense) => {
    const senseResponse: SenseResponse = {
      definition: sense.definitions[0],
      example:
        sense.examples && sense.examples.length > 0
          ? sense.examples[0].text
          : "",
    };
    results.push(senseResponse);
    if (sense.subsenses.length > 0) {
      sense.subsenses.forEach((subSense) => {
        const subSenseResponse: SenseResponse = {
          definition: subSense.definitions[0],
          example:
            subSense.examples && subSense.examples.length > 0
              ? subSense.examples[0].text
              : "",
        };
        results.push(subSenseResponse);
      });
    }
  });
  return results;
};
