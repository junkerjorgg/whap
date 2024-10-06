import { html, css, LitElement } from 'lit';

import { user } from '../../../utils/gun.js';
import '../../../molecules/add-matter/add-matter.js';
import '../../../molecules/matter-list-item/matter-list-item.js';

export class MatterList extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 25px;
      color: var(--matter-list-text-color, #000);
    }
  `;

  static properties = {
    matters: { type: Array },
  };

  constructor() {
    super();
    // TODO: Get the syntax right to map the matters from the user
    user
      .get('matters')
      .map()
      .on(matter => {
        // TODO: This is never called
        debugger;
        this.matters.push(matter);
        debugger;
      });
  }

  __increment() {
    this.counter += 1;
  }

  render() {
    return html`
      <h2>Matters</h2>
      <add-matter></add-matter>
      ${this.matters?.map(
        matter => html`
          <matter-list-item .matter=${matter}></matter-list-item>
        `,
      )}
    `;
  }
}
