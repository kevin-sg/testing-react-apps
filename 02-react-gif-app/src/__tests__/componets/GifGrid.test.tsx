import { render, screen } from "@testing-library/react";

import { GifGrid } from "@/components";
import { useFetchGifsMock } from "@/__mock__";

jest.mock("@/hooks/useFetchGifs");

describe("Test in <GifGrid/>", () => {
  const category = "One Piece";

  test("should show the loading initially", () => {
    useFetchGifsMock.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render(<GifGrid category={category} />);
    // screen.debug();
    expect(screen.getByText(/Cargando.../i)).toBeInTheDocument();
    expect(screen.getByText(category)).toBeInTheDocument();
  });

  test("should show items when the images are loaded useFetchGifs", () => {
    const gifs = [
      {
        id: "ABC",
        title: "Sitama",
        url: "https://localhost/sitama.jpg",
      },
      {
        id: "123",
        title: "Goku",
        url: "https://localhost/goku.jpg",
      },
    ];

    useFetchGifsMock.mockReturnValue({
      images: gifs,
      isLoading: false,
    });

    render(<GifGrid category={category} />);
    // screen.debug();
    expect(screen.getAllByRole("img").length).toBe(2);
  });
});
