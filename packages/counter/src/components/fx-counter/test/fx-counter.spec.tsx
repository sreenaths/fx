import { newSpecPage } from '@stencil/core/testing';
import { FxCounter } from './fx-counter';

describe('fx-counter', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FxCounter],
      html: `<fx-counter></fx-counter>`,
    });
    expect(page.root).toEqualHtml(`
      <fx-counter>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </fx-counter>
    `);
  });
});
