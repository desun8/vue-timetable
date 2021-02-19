import { Data } from "@/data.model";

export default async function fetchData(): Promise<Data | null> {
  try {
    const response = await fetch("/api/data");
    const json = await response.json();
    const data: Data = await json.results;

    return await data;
  } catch (e) {
    console.warn(`getData -> Error: ${e}`);
    return null;
  }
}
