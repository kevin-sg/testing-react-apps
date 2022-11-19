import axios from "axios";

import { IGiftResponse } from "@/models";

interface IGetGifs {
  id: string;
  title: string;
  url: string;
}

// const API_KEY = process.env.VITE_APP_API_KEY;
const API_KEY = "PetQhYAYokVa3bBaCrufTWkafzvgZ8Cv";

export const getGifs = async (category: string): Promise<IGetGifs[]> => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${category}&limit=10`;
  const { data } = await axios.get<IGiftResponse>(url);

  const gifs = data.data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  return gifs;
};
