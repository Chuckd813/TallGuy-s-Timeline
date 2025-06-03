export interface Event {
  id: string;
  title: string;
  date: string;
  time?: string;
  location?: string;
  description: string;
  category?: string;
  imageUrl?: string;
  link?: string;
}
