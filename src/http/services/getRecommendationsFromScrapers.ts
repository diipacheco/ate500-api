import { kabumScraper } from "./scrapers/kabum";

export async function getRecommendationsFromScrapers() {
  const recommendations = await kabumScraper();

  return recommendations;
}
