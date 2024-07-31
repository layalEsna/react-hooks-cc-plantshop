

import React from 'react';
import { render } from '@testing-library/react';
import App from '../../components/App';
import '@testing-library/jest-dom';

describe('1st Deliverable', () => {
  test('displays all plants on startup', async () => {
    global.setFetchResponse(global.basePlants);
    const { findAllByTestId } = render(<App />);
    const plantItems = await findAllByTestId('plant-item');
    expect(plantItems).toHaveLength(global.basePlants.length);
  });

  test('plants aren\'t hardcoded', async () => {
    global.setFetchResponse(global.basePlants);
    const { findAllByTestId } = render(<App />);
    const plantItems = await findAllByTestId('plant-item');
    expect(plantItems).toHaveLength(global.basePlants.length);
  });
});
