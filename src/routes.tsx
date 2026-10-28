import Home from './app/page';
import About,{metadata as aboutMeta} from './app/about/page';
import Services,{metadata as servicesMeta} from './app/services/page';
import Work,{metadata as workMeta} from './app/work/page';
import Privacy from './app/privacy/page';
export const routes={'/':{Component:Home,title:'Avorlume | Salesforce architecture, Claude AI & ArcGIS',description:'Salesforce architecture, Claude AI workflows and ArcGIS integrations by Mansoor Ijaz.'},'/about':{Component:About,...aboutMeta},'/services':{Component:Services,...servicesMeta},'/work':{Component:Work,...workMeta},'/privacy':{Component:Privacy,title:'Privacy notice | Avorlume',description:'How Avorlume handles project enquiries.'}};
export function Page({path}:{path:string}){const route=routes[path as keyof typeof routes]||routes['/'];return <route.Component/>}
