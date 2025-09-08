import { API_BASE_URL, USER_ID, token } from "./api-url";
import {clearCart } from "../rtk/slices/items-slice";

export default async function addOrderApi(method, amount, items, dispatch){

  try {
    const res = await fetch(`${API_BASE_URL}/orders`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}`},
      body: JSON.stringify({
        "products": items,
        "paymentMethod": method,
        "amount": amount
      })
    });

    const { data } = await res.json();
    dispatch(clearCart());
    return data;

  } catch (err) {
    console.log("error => ", err);
  }
}