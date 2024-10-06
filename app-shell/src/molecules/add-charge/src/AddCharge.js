import { html, css, LitElement } from 'lit';

import { gun, user } from './utils/gun.js';

export class AddCharge extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 25px;
      color: var(--add-charge-text-color, #000);
    }
  `;

  static properties = {};

  constructor() {
    super();
    this.db = GUN(
      [
        'https://gunjs.herokuapp.com/gun',
        'https://gunjs.herokuapp.com/gun/sea',
      ],
  }

  render() {
    return html`
      <h2>Add Charge</h2>
      <form>
        <label for="title">Title</label>
        <input type="text" id="title" name="title" />
        <label for="title">Title</label>
        <input type="text" id="title" name="title" />
        <button type="submit" @click="${this.submit}">Add Charge</button>
      </form>
    `;
  }

  submit() {
    console.log('submit');
  }
}
