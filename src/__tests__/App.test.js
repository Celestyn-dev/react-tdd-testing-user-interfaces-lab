import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from '../App';

test("displays a top-level heading with the text `Hi, I'm _______`", () => {
  render(<App />);
  const topLevelHeading = screen.getByRole('heading', {
    name: /hi, i'm/i,
    level: 1,
  });
  expect(topLevelHeading).toBeInTheDocument();
});

test('displays an image with alt text describing the image', () => {
  render(<App />);
  const image = screen.getByAltText(/portrait|photo|picture/i);
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute('src', 'https://via.placeholder.com/150');
});

test("displays a second-level heading with the text 'About Me'", () => {
  render(<App />);
  const aboutHeading = screen.getByRole('heading', {
    name: /about me/i,
    level: 2,
  });
  expect(aboutHeading).toBeInTheDocument();
});

test('displays a paragraph with biography text', () => {
  render(<App />);
  const bio = screen.getByText(/software engineer/i);
  expect(bio).toBeInTheDocument();
});

test('displays a link to GitHub', () => {
  render(<App />);
  const githubLink = screen.getByRole('link', { name: /github/i });
  expect(githubLink).toBeInTheDocument();
  expect(githubLink).toHaveAttribute(
    'href',
    'https://github.com/celestinemecheo'
  );
});

test('displays a link to LinkedIn', () => {
  render(<App />);
  const linkedinLink = screen.getByRole('link', { name: /linkedin/i });
  expect(linkedinLink).toBeInTheDocument();
  expect(linkedinLink).toHaveAttribute(
    'href',
    'https://linkedin.com/in/celestinemecheo'
  );
});
