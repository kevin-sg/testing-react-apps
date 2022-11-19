import { useFetchGifs } from "@/hooks/useFetchGifs";

export const useFetchGifsMock = useFetchGifs as jest.MockedFunction<typeof useFetchGifs>;
