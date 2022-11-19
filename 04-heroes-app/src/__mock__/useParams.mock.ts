import { useParams } from "react-router-dom";

export const mockedUsedParams = useParams as jest.MockedFunction<typeof useParams>;
