import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import '../scripture-broken-list.js';

describe('ScriptureBrokenList', () => {
  it('has a default header "Hey there" and counter 5', async () => {
    const el = await fixture(
      html`<scripture-broken-list></scripture-broken-list>`,
    );

    expect(el.header).to.equal('Hey there');
    expect(el.counter).to.equal(5);
  });

  it('increases the counter on button click', async () => {
    const el = await fixture(
      html`<scripture-broken-list></scripture-broken-list>`,
    );
    el.shadowRoot.querySelector('button').click();

    expect(el.counter).to.equal(6);
  });

  it('can override the header via attribute', async () => {
    const el = await fixture(
      html`<scripture-broken-list
        header="attribute header"
      ></scripture-broken-list>`,
    );

    expect(el.header).to.equal('attribute header');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture(
      html`<scripture-broken-list></scripture-broken-list>`,
    );

    await expect(el).shadowDom.to.be.accessible();
  });
});
