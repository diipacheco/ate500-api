import { kabumScraper } from "./scrapers/kabum";

export async function getRecommendationsFromScrapers() {
  const recommendations = await Promise.all([kabumScraper()]);

  return recommendations;
}
