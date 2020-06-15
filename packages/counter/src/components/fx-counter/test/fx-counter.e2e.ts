import { newE2EPage } from '@stencil/core/testing';

describe('fx-counter', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<fx-counter></fx-counter>');

    const element = await page.find('fx-counter');
    expect(element).toHaveClass('hydrated');
  });
});
