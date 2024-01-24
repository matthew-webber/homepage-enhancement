import { render, html } from '../../../node_modules/lit-html/lit-html.js';
import { advanceHeading } from '../../templates/advanceHeading.js';
import { ctaTiles } from '../../templates/ctaTiles.js';
import { dataIncidentBanner } from '../../templates/data-incident-banner.js';
import { dna } from '../../templates/dna.js';
import { hero } from '../../templates/hero.js';
import { navbar } from '../../templates/navbar.js';
import { placeholderAdvanceStories } from '../../templates/placeholderAdvanceStories.js';
import { services } from '../../templates/services.js';

const app = html`
  ${navbar} ${hero} ${ctaTiles} ${dataIncidentBanner} ${services} ${dna}
  ${advanceHeading} ${placeholderAdvanceStories}
`;

render(app, document.querySelector('#app'));
