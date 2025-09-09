import { API_BASE_URL } from "../utils/api-url";

const updateProductFetch = (type, id, token, userId) => {
  fetch(`${API_BASE_URL}/users/${userId}/cart?type=${type}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
    body: id ? JSON.stringify({ productID: id }) : undefined,
  })
}

export default updateProductFetch;