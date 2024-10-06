import { html, css, LitElement } from 'lit';

import { gun, user } from '../../utils/gun.js';

export class ChargesList extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 25px;
      color: var(--charges-list-text-color, #000);
    }
  `;

  static properties = {
    charges: { type: Array },
  };

  constructor() {
    super();
    // TODO: Start here. Get the charges from the database.
    // TODO: Get the charges from one case
    this.charges = user.get('charges');
  }

  render() {
    return html`
      <h2>Charges</h2>
      <ul>
        ${this.charges.map(charge => html`<li>${charge.title}</li>`)}
      </ul>
    `;
  }
}
