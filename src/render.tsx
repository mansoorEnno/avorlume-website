import {renderToString} from 'react-dom/server';
import {Page,routes} from './routes';
export {routes};
export const render=(path:string)=>renderToString(<Page path={path}/>);

export {offerings} from './app/lib/portfolio';
