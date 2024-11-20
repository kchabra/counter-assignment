import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "../components/Counter";

beforeEach(() => {
   render(<Counter />);
});

test('renders counter message', () => {
  const counterH = screen.getByText(/Counter/i);
  expect(counterH).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const countE = screen.getByTestId("count");
  expect(countE).toHaveTextContent("0");
});

test('clicking + increments the count', () => {
  const incrementB = screen.getByText("+");
  fireEvent.click(incrementB);

  // checking if count by +1 is right
  const countE = screen.getByTestId("count");
  expect(countE).toHaveTextContent("1");
});

test('clicking - decrements the count', () => {
  const decrementB = screen.getByText("-");
  fireEvent.click(decrementB);

  // checking if count by -1 is right
  const countE = screen.getByTestId("count");
  expect(countE).toHaveTextContent("-1");
});
