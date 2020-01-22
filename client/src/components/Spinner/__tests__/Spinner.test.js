import React from 'react';
import { render, cleanup } from '@testing-library/react-native';

import Spinner from '..';

jesst.mock('reactotron-react-native', () => {
  return {
    reactotron: jest.fn(),
  };
});

describe("Spinner don't rendering", () => {
  it("Shouldn't render Spinner when show is false", () => {
    const { queryAllByAltText } = render(<Spinner visible={false} />);

    expect(queryAllByAltText('spinner')).not.toBeNull();
  });

  it('Should render Spinner', () => {
    const { getByTestId } = render(<Spinner visible />);

    expect(getByTestId('spinner')).toBeInTheDocument();
  });
});
