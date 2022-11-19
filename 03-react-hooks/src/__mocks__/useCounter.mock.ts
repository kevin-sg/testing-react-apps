import { useCounter } from "@/hooks";

export const useCounterMock = useCounter as jest.MockedFunction<typeof useCounter>;
