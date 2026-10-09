import rawData from "@/data/rydora.json";
import type { RydoraTemplateData } from "@/types/rydora.types";

const templateData: RydoraTemplateData = rawData;

export function getRydoraSections() {
  return templateData.categories.Rydora.sections;
}
