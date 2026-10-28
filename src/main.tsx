import {hydrateRoot} from 'react-dom/client';
import {Page} from './routes';
import './app/globals.css';
import './app/micro-details.css';
const path=window.location.pathname.replace(/\/$/,'').replace(/\.html$/,'')||'/';
hydrateRoot(document.getElementById('root')!,<Page path={path}/>);
