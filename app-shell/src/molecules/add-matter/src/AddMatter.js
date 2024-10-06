import { html, css, LitElement } from 'lit';

import { user } from '../../../utils/gun.js';

export class AddMatter extends LitElement {
  static styles = css`
    :host {
      display: grid;
      gap: 10px;
      grid-template-columns: 1fr 3fr 1fr;
    }
    input {
      padding: 0 0.5em 0 0.5em;
    }
  `;

  static properties = {
    name: { type: String },
  };

  constructor() {
    super();
    this.name = '';
  }

  addMatter() {
    const matter = user.get(`matter-${this.name}`).put({ name: this.name });
    user
      .get('matters')
      .map()
      .on(matter => {
        // TODO: Why is this not called?
        console.log(matter);
      });
    user.get('matters').set(matter);
  }

  /**
   * Update the name property
   * @param {object} event The event object
   */
  updateName(event) {
    this.name = event.target.value;
  }

  render() {
    return html`
      <div>New matter</div>
      <input type="text" placeholder="Name" @change=${this.updateName} />
      <button @click=${this.addMatter}>Add matter</button>
    `;
  }
}
