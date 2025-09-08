import { API_BASE_URL, USER_ID, token } from "../utils/api-url";

const updateProductFetch = (type, id) => {
  fetch(`${API_BASE_URL}/users/${USER_ID}/cart?type=${type}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
    body: id ? JSON.stringify({ productID: id }) : undefined,
  })
}

export default updateProductFetch;