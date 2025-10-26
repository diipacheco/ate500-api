export const buildKabumMaxMinPriceFacetFilters = (min = 0, max = 500) => {
  const filtersObject = { price: { min, max } };
  const filtersObjectToJson = JSON.stringify(filtersObject);

  return Buffer.from(filtersObjectToJson)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
};
