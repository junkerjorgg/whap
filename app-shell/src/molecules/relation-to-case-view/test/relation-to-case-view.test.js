import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import '../relation-to-case-view.js';

describe('RelationToCaseView', () => {
  it('has a default header "Hey there" and counter 5', async () => {
    const el = await fixture(html`<relation-to-case-view></relation-to-case-view>`);

    expect(el.header).to.equal('Hey there');
    expect(el.counter).to.equal(5);
  });

  it('increases the counter on button click', async () => {
    const el = await fixture(html`<relation-to-case-view></relation-to-case-view>`);
    el.shadowRoot.querySelector('button').click();

    expect(el.counter).to.equal(6);
  });

  it('can override the header via attribute', async () => {
    const el = await fixture(html`<relation-to-case-view header="attribute header"></relation-to-case-view>`);

    expect(el.header).to.equal('attribute header');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture(html`<relation-to-case-view></relation-to-case-view>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
