import { render, screen } from "@testing-library/react";
import ReservationsPage from "./ReservationsPage";

test("Renders the ReservationsPage heading", () => {
  render(<ReservationsPage />);
  const headingElement = screen.getByText("Reserve a Table");
  expect(headingElement).toBeInTheDocument();
});
