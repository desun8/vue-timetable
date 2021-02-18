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
