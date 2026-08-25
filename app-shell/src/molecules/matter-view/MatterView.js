import { html, css, LitElement } from 'lit';

export class MatterView extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 25px;
      color: var(--matter-view-text-color, #000);
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
