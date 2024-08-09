"use client";
import axios from "axios";

export async function getMovies() {
  try {
    const response = await axios.get(
      "https://wefit-movies.vercel.app/api/movies"
    );
    return response.data.products || [];
  } catch (error) {
    console.error("Failed to fetch movies:", error);
    throw error;
  }
}
