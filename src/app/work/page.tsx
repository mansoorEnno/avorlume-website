import {Header,Footer,ProjectCTA} from '../components/site';
import {WorkGallery} from './work-gallery';
export const metadata={title:'Selected work & delivery samples | Avorlume',description:'Explore personal demonstrations, synthetic architecture samples and location-service concepts by Mansoor Ijaz. Clear evidence and honest project boundaries.'};
export default function Work(){return <><Header active="/work"/><main id="main"><section className="wrap page-intro"><h1>A closer look<br/>at the work.</h1><p className="lead">Personal demonstrations, sample deliverables and service concepts. Each is labelled so you know exactly what you’re looking at.</p></section><WorkGallery/><ProjectCTA/></main><Footer/></>}
