import { useTodos } from "@/hooks";

export const useTodoMock = useTodos as jest.MockedFunction<typeof useTodos>;
