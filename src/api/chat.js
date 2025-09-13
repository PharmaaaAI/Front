import { API_BASE_URL } from "../utils/api-url";

export const getAiRecommendations = async (message, token) => {
  try {
    const res = await fetch(`${API_BASE_URL}/recom/recommend`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ message }),
    });
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Error getting AI recommendations:", err);
    return { success: false, error: "Server error" };
  }
};
