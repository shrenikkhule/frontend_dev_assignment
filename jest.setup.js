import "@testing-library/jest-dom";

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props) => {
    // Render Next.js <Image /> as normal <img /> in tests
    return <img {...props} alt={props.alt || "mocked image"} />;
  },
}));
