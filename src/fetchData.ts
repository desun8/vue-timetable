import axios from "axios";
export type DataWeeks = [string, string];

export type DataItem = {
  date: string;
  time: [string, string];
  color: string;
  name: string;
  trainer: string;
  description: string;
  price: Array<{
    price: number;
    name: string;
  }>;
  icon: string;
  hrefOrder: string;
  href: string;
};

export type DataItems = Array<DataItem>;

export type Data = {
  weeks: DataWeeks;
  message: string;
  video: string;
  items: DataItems;
};

const url = "https://api.jsonbin.io/v3/b/5f7b01b765b18913fc5a91c4/2";
const key = "$2b$10$W8.Fu2.nd..t4oK4QApkgueIGfYngyXo9.GuY1Nw9oS4WseC9/jC.";
const headers = { "X-Master-Key": key };

export default async function fetchData(): Promise<Data | null> {
  try {
    const response = await axios.get(url, { headers });
    const data: Data = await response.data.record;

    return data;
  } catch (e) {
    console.warn(`getData -> Error: ${e}`);
    return null;
  }
}
