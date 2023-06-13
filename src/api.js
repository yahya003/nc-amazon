import axios from "axios";

const myApi = axios.create({
  baseURL: "https://nc-amazon-api.onrender.com/api",
});

export const fetchUsers = () => {
  return myApi.get("/users").then(({ data: { users } }) => {
    return users;
  });
};

export const fetchCategories = () => {
  return myApi.get("/categories").then(({ data: { categories } }) => {
    return categories;
  });
};

export const fetchItems = () => {
  return myApi.get("/items").then(({ data: { items } }) => {
    return items;
  });
};

export const fetchItemById = (id) => {
  return myApi.get(`/items/${id}`).then(({ data: { item } }) => {
    return item;
  });
};

export const postItem = (item) => {
  return myApi.post(`/items`, item).then((res) => {
    return res;
  });
};

export const deleteItemFromBasket = (id) => {
  return myApi.delete(`/items/${id}`);
};

export const orderItem = (user, item_id) => {
  return myApi.post(`/users/${user}/orders`, { item_id }).then((res) => {
    return res;
  });
};
export const fetchOrders = (user) => {
  return myApi.get(`/users/${user}/orders`).then(({ data: { items } }) => {
    return items;
  });
};

export const postToBasket = (user, item_id) => {
  return myApi
    .post(`/users/${user}/basket`, { item_id })
    .then(({ data: { items } }) => {
      return items;
    });
};

export const fetchBasket = (user) => {
  return myApi.get(`/users/${user}/basket`).then(({ data: { items } }) => {
    return items;
  });
};

export const fetchItemsByCategory = (category_name) => {
  return myApi.get(`/items?${category_name}`).then(({ data: { items } }) => {
    return items;
  });
};