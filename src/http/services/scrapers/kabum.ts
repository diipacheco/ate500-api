import { randomUUID } from "node:crypto";
import { launch } from "puppeteer";

import { buildKabumMaxMinPriceFacetFilters } from "@/utils/buildKabumMaxMinPriceFacetFilters";

export async function kabumScraper() {
  const browser = await launch({ headless: true });
  const page = await browser.newPage();

  const maxMinPriceFacetFilters = buildKabumMaxMinPriceFacetFilters(0, 500);

  await page.goto(
    `https://www.kabum.com.br/perifericos?page_number=1&page_size=20&facet_filters=${maxMinPriceFacetFilters}=&sort=most_searched`,
    {
      waitUntil: "networkidle2",
    },
  );

  const scrappedProducts = await page.$$eval(".productCard", (cards) =>
    cards.map((card) => ({
      name: card.querySelector(".nameCard")?.textContent.trim() ?? "",
      price:
        card.querySelector(".priceCard")?.textContent.split("R$")[1].trim() ??
        "0,00",
      link: card.querySelector("a")?.href ?? "",
      image: card.querySelector("img")?.src ?? "",
    })),
  );

  await browser.close();

  const products = scrappedProducts.map((product) => ({
    id: randomUUID(),
    name: product.name,
    price: Number(product.price.replace(",", ".")),
    image: product.image,
    link: product.link,
    createdAt: new Date(),
  }));

  return products;
}
