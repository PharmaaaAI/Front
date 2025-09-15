import { API_BASE_URL } from "../utils/api-url";

const updateProductFetch = (type, id, token, userId, quantity) => {
  let body = {};
  body.productID = id;
  if (quantity) body.quantity = quantity;
  fetch(`${API_BASE_URL}/users/${userId}/cart?type=${type}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .then((res) => console.log("res => ", res));
};

export default updateProductFetch;
