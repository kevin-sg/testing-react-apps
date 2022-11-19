import { useEffect, useState } from "react";
import { getGifs } from "@/helpers";

interface IGifItemProps {
  title: string;
  url: string;
  id: string;
}

export const useFetchGifs = (category: string) => {
  const [images, setImages] = useState([] as IGifItemProps[]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
    setIsLoading(false);
  };

  useEffect(() => {
    getImages();
  }, []);

  return {
    images,
    isLoading,
  };
};
