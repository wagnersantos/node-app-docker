import React from 'react';
import { render, cleanup } from '@testing-library/react-native';

import Spinner from '..';

jest.mock('reactotron-react-native', () => ({
  reactotron: {
    configure: () => reactotron,
    useReactNative: () => reactotron,
    use: () => reactotron,
    connect: () => reactotron,
  })
);

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
