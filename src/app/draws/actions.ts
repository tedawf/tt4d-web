"use server";

import { DrawResult } from "@/types/toto";

export async function fetchDraws(skip = 0, limit = 10) {
  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
  const response = await fetch(`${API_URL}/draws?skip=${skip}&limit=${limit}`, {
    cache: "no-store", // Ensures fresh data
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return (await response.json()) as DrawResult[];
}
