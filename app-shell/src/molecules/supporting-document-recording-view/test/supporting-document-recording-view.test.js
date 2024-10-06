import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import '../supporting-document-recording-view.js';

describe('SupportingDocumentRecordingView', () => {
  it('has a default header "Hey there" and counter 5', async () => {
    const el = await fixture(html`<supporting-document-recording-view></supporting-document-recording-view>`);

    expect(el.header).to.equal('Hey there');
    expect(el.counter).to.equal(5);
  });

  it('increases the counter on button click', async () => {
    const el = await fixture(html`<supporting-document-recording-view></supporting-document-recording-view>`);
    el.shadowRoot.querySelector('button').click();

    expect(el.counter).to.equal(6);
  });

  it('can override the header via attribute', async () => {
    const el = await fixture(html`<supporting-document-recording-view header="attribute header"></supporting-document-recording-view>`);

    expect(el.header).to.equal('attribute header');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture(html`<supporting-document-recording-view></supporting-document-recording-view>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
