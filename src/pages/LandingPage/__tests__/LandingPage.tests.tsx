import { render, screen } from '@testing-library/react';

import LandingPage from '../LandingPage';
import { copyContent } from 'shared';

const { heading, subHeading } = copyContent.landingPage;

describe('LandingPage tests', () => {
  it('Should have a heading', () => {
    render(<LandingPage />);
    const headingElement = screen.getByText(heading);

    expect(headingElement).toBeInTheDocument();
  });

  it('Should have a sub-heading', () => {
    render(<LandingPage />);

    const subHeadingElement = screen.getByText(subHeading);

    expect(subHeadingElement).toBeInTheDocument();
  });
});
