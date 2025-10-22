import { launch } from "puppeteer";

export async function kabumScraper() {
  const browser = await launch({ headless: true });
  const page = await browser.newPage();

  await page.goto("https://www.kabum.com.br/perifericos", {
    waitUntil: "networkidle2",
  });

  const products = await page.$$eval(".productCard", (cards) =>
    cards.map((card) => ({
      name: card.querySelector(".nameCard")?.textContent.trim() ?? "",
      price: card.querySelector(".priceCard")?.textContent.trim() ?? "",
      link: card.querySelector("a")?.href ?? "",
      image: card.querySelector("img")?.src ?? "",
    })),
  );
  await browser.close();

  return products;
}
