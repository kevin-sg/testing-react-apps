import { render, screen } from "@testing-library/react";

import { GifExpertApp } from "@/GifExpertApp";

describe("Test in <GifExpertApp/>", () => {
  test("should show initial component", async () => {
    render(<GifExpertApp />);
    // screen.debug();
    expect(screen.getByRole("form")).toBeInTheDocument();
    expect(screen.getByText(/GifExpertApp/i)).toBeInTheDocument();
    expect(screen.getByRole("textbox").getAttribute("value")?.length).toBe(0);
  });
});
