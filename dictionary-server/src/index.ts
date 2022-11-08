import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import axios from "axios";
import { Entry, WordLookUpResponse } from "./types/types";
import { mapEntryResult } from "./utils/mapEntryResult";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get("/lookup", async (req: Request, res: Response) => {
  try {
    const resp = await axios.get(
      `https://od-api.oxforddictionaries.com:443/api/v2/entries/${req.query.language}/${req.query.word}`,
      {
        headers: {
          app_id: process.env.APIID,
          app_key: process.env.APIKEY,
        },
      }
    );
    const results: Entry = resp.data.results[0].lexicalEntries[0].entries[0];
    const response: WordLookUpResponse = {
      entries: mapEntryResult(results),
      lexicalCategory:
        resp.data.results[0].lexicalEntries[0].lexicalCategory.text,
      word: resp.data.results[0].word,
      audio:
        resp.data.results[0].lexicalEntries[0].entries[0].pronunciations[0]
          .audioFile,
    };
    res.send(response);
  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    }
  }
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
