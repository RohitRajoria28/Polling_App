import React from 'react';
import { render } from '@testing-library/react-native';
import HomeScreen from '../HomeScreen';

test('HomeScreen renders without crashing', () => {
  render(<HomeScreen />);
});
test('FlatList in HomeScreen renders the correct number of items', () => {
    const mockPosts = [
      { objectID: '1', title: 'Test 1', url: 'http://example.com/1', created_at: '2023-03-21T12:00:00.000Z', author: 'Test Author 1' },
      { objectID: '2', title: 'Test 2', url: 'http://example.com/2', created_at: '2023-03-21T12:00:00.000Z', author: 'Test Author 2' },
      { objectID: '3', title: 'Test 3', url: 'http://example.com/3', created_at: '2023-03-21T12:00:00.000Z', author: 'Test Author 3' },
    ];
    const { getAllByTestId } = render(<HomeScreen />);
    expect(getAllByTestId('post-item').length).toEqual(mockPosts.length);
});