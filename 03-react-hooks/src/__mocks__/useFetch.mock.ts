import { useFetch } from "@/hooks";

export const useFetchMock = useFetch as jest.MockedFunction<typeof useFetch>;
