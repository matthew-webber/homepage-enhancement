import { render, html } from '../../../node_modules/lit-html/lit-html.js';
import { ctaTiles } from '../../templates/ctaTiles.js';
import { dataIncidentBanner } from '../../templates/data-incident-banner.js';
import { hero } from '../../templates/hero.js';
import { navbar } from '../../templates/navbar.js';

const app = html`
  ${dataIncidentBanner}${navbar}${hero}${ctaTiles}
`;

render(app, document.querySelector('#app'));
