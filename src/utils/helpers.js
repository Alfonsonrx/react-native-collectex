export const getCategoryData = (category) => {
  return {
    id: category.id,
    name: category.name,
    created: category.created,
    subcategories: category.subcategories.map((e) => ({id: e.subcategories.id, name: e.subcategories.name})),
  };
};
