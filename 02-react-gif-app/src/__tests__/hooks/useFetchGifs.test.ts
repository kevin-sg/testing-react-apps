import { renderHook, waitFor } from "@testing-library/react";

import { useFetchGifs } from "@/hooks";

describe("Test in useFetchGifs", () => {
  test("should return to the initial state", () => {
    const { result } = renderHook(() => useFetchGifs("One Piece"));
    const { images, isLoading } = result.current;

    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test("should return an array of images and isLoading in false", async () => {
    const { result } = renderHook(() => useFetchGifs("One Piece"));

    await waitFor(() => {
      expect(result.current.images.length).toBeGreaterThan(0);
    });

    const { images, isLoading } = result.current;

    expect(isLoading).toBeFalsy();
    expect(images.length).toBeGreaterThan(0);
  });
});
