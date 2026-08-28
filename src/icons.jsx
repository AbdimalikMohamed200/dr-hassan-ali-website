import React from 'react';
const Icon = ({children,size=20,...props}) => <span aria-hidden="true" {...props} style={{width:size,height:size,display:'inline-grid',placeItems:'center',flex:'0 0 auto'}}>{children}</span>;
export const Menu=p=><Icon {...p}>☰</Icon>; export const X=p=><Icon {...p}>×</Icon>;
export const ArrowRight=p=><Icon {...p}>→</Icon>; export const CalendarDays=p=><Icon {...p}>▣</Icon>;
export const Facebook=p=><Icon {...p}>f</Icon>; export const Stethoscope=p=><Icon {...p}>✚</Icon>;
export const HeartPulse=p=><Icon {...p}>♥</Icon>; export const BookOpen=p=><Icon {...p}>▤</Icon>;
export const MapPin=p=><Icon {...p}>⌖</Icon>; export const Clock=p=><Icon {...p}>◷</Icon>;
export const CheckCircle2=p=><Icon {...p}>✓</Icon>; export const Send=p=><Icon {...p}>➤</Icon>;
export const ShieldCheck=p=><Icon {...p}>✓</Icon>;
