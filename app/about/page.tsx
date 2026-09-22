import type { Metadata } from 'next';
import { ArrowUpRight } from 'lucide-react';
import { Header, Footer, Contact } from '../site-shell';
import './about.css';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Meet Wassermech Middle East LLC, based in Sharjah and supplying European piping, drainage and sanitary systems across the United Arab Emirates.',
};

export default function AboutPage() {
  return <><Header/><main id="main" className="about-page">
    <section className="about-intro wrap">
      <div className="about-intro-copy"><p className="eyebrow">ABOUT WASSERMECH</p><h1>Built around<br/>what flows <em>within.</em></h1><p>European systems.<br/>UAE expertise.</p><a href="/#products" className="button">Explore our products <ArrowUpRight size={19}/></a></div>
      <figure><img src="/assets/fluenta-bathroom.png" alt="Fluenta sanitary installation in a contemporary bathroom"/><figcaption>Piping, drainage & sanitary solutions.</figcaption></figure>
    </section>
    <section className="about-band"><div className="wrap about-grid"><div><p className="eyebrow">WASSERMECH MIDDLE EAST LLC</p><h2>Behind the spaces<br/>we build.</h2><div className="principles"><span>Flow</span><span>Quality</span><span>Precision</span></div></div><div className="about-copy"><p>Wassermech Middle East LLC supplies advanced European piping, drainage and sanitary product systems for residential, commercial and industrial projects across the United Arab Emirates.</p><p>Based in Sharjah, our portfolio brings together silent piping, HDPE drainage, high-rise drainage components, pipe supports, sanitary solutions and access systems.</p><a className="text-link light" href="/wassermech-portfolio.pdf" download>View our company portfolio <ArrowUpRight size={19}/></a></div></div></section>
    <Contact/>
  </main><Footer/></>;
}
