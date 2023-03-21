import React from 'react';
import { render } from '@testing-library/react-native';
import DetailsScreen from '../DetailsScreen';

test('DetailsScreen renders without crashing', () => {
  const mockRoute = {
    params: {
      json: { objectID: '1', title: 'Test', url: 'http://example.com', created_at: '2023-03-21T12:00:00.000Z', author: 'Test Author' }
    }
  };
  render(<DetailsScreen route={mockRoute} />);
});

test('DetailsScreen displays the correct JSON data', () => {
    const mockRoute = {
      params: {
        json: { objectID: '1', title: 'Test', url: 'http://example.com', created_at: '2023-03-21T12:00:00.000Z', author: 'Test Author' }
      }
    };
    const { getByText } = render(<DetailsScreen route={mockRoute} />);
    expect(getByText(/Test/)).toBeTruthy();
    expect(getByText(/http:\/\/example\.com/)).toBeTruthy();
    expect(getByText(/2023-03-21T12:00:00\.000Z/)).toBeTruthy();
    expect(getByText(/Test Author/)).toBeTruthy();
});

 