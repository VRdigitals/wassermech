'use client';
import type {PointerEvent,ReactNode} from 'react';
export default function ProductStage({children,className=''}:{children:ReactNode;className?:string}){
 function move(e:PointerEvent<HTMLDivElement>){
  if(e.pointerType!=='mouse'||!window.matchMedia('(hover: hover) and (prefers-reduced-motion: no-preference)').matches)return;
  const r=e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty('--rx',`${-((e.clientY-r.top)/r.height-.5)*6}deg`);
  e.currentTarget.style.setProperty('--ry',`${((e.clientX-r.left)/r.width-.5)*8}deg`);
 }
 return <div className={'product-stage '+className} onPointerMove={move} onPointerLeave={e=>{e.currentTarget.style.setProperty('--rx','0deg');e.currentTarget.style.setProperty('--ry','0deg')}}>{children}</div>
}
