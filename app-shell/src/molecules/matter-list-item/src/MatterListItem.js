import { html, css, LitElement } from 'lit';

export class MatterListItem extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 25px;
      color: var(--matter-list-item-text-color, #000);
    }
  `;

  static properties = {
    matter: { type: String },
  };

  constructor() {
    super();
  }

  render() {
    return html`
      <div>${this.matter}</div>
      >
    `;
  }
}
