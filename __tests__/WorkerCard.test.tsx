import { render, screen } from "@testing-library/react";
import WorkerCard from "@/app/WorkerCard";

const mockWorker = {
  id: 1,
  name: "John Doe",
  service: "Plumber",
  pricePerDay: 500,
  image: "/test.jpg",
};

test("renders worker details", () => {
  render(<WorkerCard worker={mockWorker} />);
  expect(screen.getByText("John Doe")).toBeInTheDocument();
  expect(screen.getByText("Plumber")).toBeInTheDocument();
  expect(screen.getByText(/500/)).toBeInTheDocument();
});
