'use client';

import { useRef } from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import './hero.css';

const scenes = [
  {id:'piping',number:'01',name:'Piping systems',detail:'Quiet by design. Strong by nature.',brand:'Peštan',caption:'S Line silent piping',image:'pestan-blue-fittings.png',href:'/products/pestan',alt:'Peštan blue S Line pipes and fittings'},
  {id:'drainage',number:'02',name:'Drainage solutions',detail:'Precision at every connection.',brand:'Confluo',caption:'Linear shower drainage',image:'confluo-drain-branded.png',href:'/products/confluo',alt:'Confluo stainless-steel linear shower drain in a stone floor'},
  {id:'sanitary',number:'03',name:'Sanitary spaces',detail:'Engineering meets everyday living.',brand:'Fluenta',caption:'Sanitary & pre-wall systems',image:'fluenta-bathroom.png',href:'/products/fluenta',alt:'Fluenta bathroom installation showing concealed pre-wall sanitary engineering'}
];

export default function Hero(){
 const stage = useRef<HTMLElement>(null);
 const move = (event:React.PointerEvent<HTMLElement>)=>{
   if(event.pointerType!=='mouse'||!window.matchMedia('(prefers-reduced-motion: no-preference) and (pointer: fine)').matches)return;
   const rect=event.currentTarget.getBoundingClientRect();
   stage.current?.style.setProperty('--hero-x',`${((event.clientX-rect.left)/rect.width-.5)*10}px`);
   stage.current?.style.setProperty('--hero-y',`${((event.clientY-rect.top)/rect.height-.5)*8}px`);
 };
 return <section className="wm-hero" aria-label="Wassermech product showcase" ref={stage} onPointerMove={move} onPointerLeave={()=>{stage.current?.style.setProperty('--hero-x','0px');stage.current?.style.setProperty('--hero-y','0px');}}>
  <Tabs defaultValue="sanitary" className="wm-hero-tabs">
   <div className="wm-hero-scenes">
    {scenes.map(scene=><TabsContent key={scene.id} value={scene.id} forceMount className={'wm-scene wm-scene-'+scene.id}>
      <div className="wm-scene-picture"><img src={'/assets/'+scene.image} alt={scene.alt} fetchPriority={scene.id==='sanitary'?'high':'low'} /></div>
      <div className="wm-scene-shade" aria-hidden="true"/>
      <a href={scene.href} className="wm-spotlight"><div><span className="wm-small">PRODUCT SPOTLIGHT / {scene.number}</span><strong>{scene.brand}</strong><span className="wm-spotlight-caption">{scene.caption}</span></div><span className="wm-spotlight-arrow"><ArrowUpRight size={25}/></span></a>
    </TabsContent>)}
   </div>
   <div className="wm-hero-content wrap">
    <p className="wm-kicker"><span/>EUROPEAN SYSTEMS. UAE EXPERTISE.</p>
    <h1>The detail behind<br/><em>exceptional</em><br/>spaces.</h1>
    <p className="wm-intro">Piping, drainage and sanitary systems.<br/>Engineered beneath the surface.<br/>Experienced in every space.</p>
    <div className="wm-actions"><a href="#products" className="wm-primary">Explore our systems <ArrowUpRight size={20}/></a><a href="/about" className="wm-secondary">Meet Wassermech <ArrowDown size={17}/></a></div>
    <div className="wm-hero-signature"><span>FLOW</span><i/><span>QUALITY</span><i/><span>PRECISION</span></div>
   </div>
   <div className="wm-selector wrap"><div className="wm-selector-intro"><span>BEYOND THE SURFACE</span><p>Explore the possibilities.</p></div><TabsList aria-label="Featured product scenes" className="wm-scene-list">{scenes.map(scene=><TabsTrigger key={scene.id} value={scene.id} className="wm-scene-trigger"><span className="wm-tab-number">{scene.number}</span><span className="wm-tab-copy"><strong>{scene.name}</strong><span>{scene.detail}</span></span><ArrowUpRight size={18}/></TabsTrigger>)}</TabsList></div>
  </Tabs>
 </section>;
}
