import { render, html } from '../../node_modules/lit-html/lit-html.js';
import { blogHeading } from '../../templates/blog-heading.js';
import { ctaTiles } from '../../templates/ctaTiles.js';
import { dataIncidentBanner } from '../../templates/data-incident-banner.js';
import { dna } from '../../templates/dna.js';
import { hero } from '../../templates/hero.js';
import { navbar } from '../../templates/navbar.js';
import { blogPreview } from '../../templates/blog-preview.js';
import { services } from '../../templates/services.js';

const app = html`
  ${navbar} ${hero} ${ctaTiles} ${dataIncidentBanner} ${services} ${dna}
  ${blogHeading} ${blogPreview}
`;

render(app, document.querySelector('#app'));
