export interface SenseResponse {
  definition: string;
  example: string;
}

export interface Entry {
  etymologies: string[];
  pronunciations: string[];
  senses: Sense[];
}

export interface Sense {
  definitions: string[];
  subsenses: SubSense[];
  examples?: { text: string }[];
}

export interface SubSense {
  definitions: string[];
  examples?: { text: string }[];
}
