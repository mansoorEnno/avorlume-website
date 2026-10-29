import {hydrateRoot} from 'react-dom/client';
import {Page} from './routes';
import './app/globals.css';
import './app/micro-details.css';
import './app/interaction-refinements.css';
document.addEventListener('keydown',e=>{if(e.key==='Tab'||e.key.startsWith('Arrow'))document.documentElement.dataset.input='keyboard'});
document.addEventListener('pointerdown',()=>{document.documentElement.dataset.input='pointer'});
const path=window.location.pathname.replace(/\/$/,'').replace(/\.html$/,'')||'/';
hydrateRoot(document.getElementById('root')!,<Page path={path}/>);
