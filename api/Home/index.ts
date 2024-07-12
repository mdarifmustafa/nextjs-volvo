"use client";

import { DescriptivesType } from "@/app/types/globals"
import descriptives from "@/models/descriptives.json"

export async function getDescriptives() {
  try {
    const data = await new Promise<DescriptivesType>((res) => {
      setTimeout(() => {
        res(descriptives as unknown as DescriptivesType);
      }, 500);
    });
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
