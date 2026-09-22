import Link from 'next/link';
import { ArrowUpRight, Download } from 'lucide-react';
import Hero from './hero';
import './partners.css';
import ProductShowcase from './product-showcase';
import { Header, Footer, Contact } from './site-shell';
export default function Home() {
 return <><Header/><main id="main"><Hero/>
 <section className="partner-strip" aria-label="Our product partners"><div className="wrap partner-inner"><span className="eyebrow">OUR PRODUCT PARTNERS</span><div className="partner-logos">{[{name:'Peštan',file:'pestan'},{name:'Coestilen',file:'coestilen'},{name:'Future Support Systems',file:'future'},{name:'Confluo',file:'confluo'},{name:'Fluenta',file:'fluenta'},{name:'KAJ',file:'kaj'}].map(brand=><div className={'partner-logo partner-'+brand.file} key={brand.file}><img src={'/assets/partners/'+brand.file+'.png'} alt={brand.name} loading="lazy"/></div>)}</div></div></section>
 <ProductShowcase/>
 <section className="about-band" id="about"><div className="wrap about-grid"><div><p className="eyebrow">WASSERMECH MIDDLE EAST LLC</p><h2>Built around<br/>what flows within.</h2><div className="principles"><span>Flow</span><span>Quality</span><span>Precision</span></div></div><div className="about-copy"><p>Wassermech Middle East LLC supplies advanced European piping, drainage and sanitary product systems for residential, commercial and industrial projects across the United Arab Emirates.</p><p>Based in Sharjah, our portfolio brings together silent piping, HDPE drainage, high-rise drainage components, pipe supports, sanitary solutions and access systems.</p><a className="text-link light" href="#contact">Connect with our team <ArrowUpRight size={19}/></a></div></div></section>
 <section className="portfolio-download wrap"><div><p className="eyebrow">THE COMPLETE COLLECTION</p><h2>Take a closer look.</h2><p>Product information, technical features and applications.<br/>All together in our 2026 portfolio.</p></div><a className="download-card" href="/wassermech-portfolio.pdf" download><span className="pdf-icon">PDF</span><div><strong>Wassermech Product Portfolio</strong><span>2026 edition · 7 pages · 11.6 MB</span></div><Download size={23}/></a></section><Contact/></main><Footer/></>;
}
