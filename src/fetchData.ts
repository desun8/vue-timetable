import axios from "axios";
import { Data } from "@/data.model";

export default async function fetchData(): Promise<Data | null> {
  try {
    const response = await axios.get("/api/data");
    const data: Data = await response.data.results;

    return data;
  } catch (e) {
    console.warn(`getData -> Error: ${e}`);
    return null;
  }
}
