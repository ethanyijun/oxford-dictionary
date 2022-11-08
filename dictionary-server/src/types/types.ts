export interface SenseResponse {
  definition: string;
  example: string;
  crossReferenceMarkers?: string;
}

export interface Entry {
  etymologies: string[];
  pronunciations: string[];
  senses: Sense[];
}

export interface Sense {
  definitions: string[];
  subsenses: SubSense[];
  crossReferenceMarkers?: string[];
  examples?: { text: string }[];
}

export interface SubSense {
  definitions: string[];
  examples?: { text: string }[];
  crossReferenceMarkers?: string[];
}

export interface WordLookUpResponse {
  entries: SenseResponse[];
  lexicalCategory: string;
  word: string;
  audio: string;
}
