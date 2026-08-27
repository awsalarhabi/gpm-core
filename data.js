const GPM={
 metrics:[['REVENUE MTD','SAR 4.82M','↗ +6.4%','TRUSTED · 96','trusted'],['GROSS MARGIN','37.1%','↘ -1.2%','CAUTION · 88','caution'],['CASH POSITION','SAR 11.3M','↗ +2.1%','TRUSTED · 97','trusted'],['RUNWAY','94 days','↘ -8%','CAUTION · 86','caution']],
 brief:[
 {tag:'TOP RISK',type:'red',trust:'TRUSTED · 90',title:'Compound Al Noor × Mouthwash event',text:'Largest AR concentration (32%) is also the largest Mouthwash buyer — stockout in 6 days would land the same week as a probable payment slip.',impact:'SAR 980K COMBINED EXPOSURE',time:'≤ 14 DAYS'},
 {tag:'TOP OPPORTUNITY',type:'green',trust:'TRUSTED · 88',title:'Dental channel expansion · Kemphor Ortho',text:'Capital allocator ranks Dental #1 across 5 ranking modes; opportunity cost vs Retail is SAR 240K annualized.',impact:'+SAR 1.8M ANNUALIZED AT 41% GM',time:'THIS QUARTER'},
 {tag:'BEST ACTION TODAY',type:'cyan',trust:'TRUSTED · 91',title:'Expedite Mouthwash PO via air freight, then tighten Al Noor terms',text:'Two-step move defuses the compound event: protects SAR 420K of immediate revenue and cuts SAR 560K of liquidity exposure inside one approval cycle.',impact:'+SAR 380K PROTECTED · SAR 560K EXPOSURE CUT',time:'DECIDE TODAY'}],
 ops:[['AR OVERDUE 30D+','SAR 1.74M','↘ +14%','VERIFY · 78','caution'],['STOCKOUT RISK SKUS','4 / 290','↗ +2%','TRUSTED · 94','trusted']],
 inventory:[['KMP-K','12,400','22','41','HEALTHY','healthy'],['KMP-1918','3,100','18','11','LOW','low'],['KMP-WHT','9,800','26','38','HEALTHY','healthy'],['KMP-MWS','1,450','14','6','CRITICAL','critical'],['KMP-ORT','6,700','31','52','HEALTHY','healthy']],
 channels:['PHARMA','HOSPIT','DENTAL','RETAIL','E-COMM'],
 matrix:[['Kemphor K',[28,39,37,35,33]],['Kemphor 1918',[42,40,38,36,47]],['Kemphor Whitening',[41,52,50,48,46]],['Kemphor Mouthwash',[30,28,26,24,22]],['Kemphor Ortho',[34,32,43,41,39]]],
 risks:[
 {sev:'CRITICAL',cls:'critical-tag',trust:'TRUSTED · 93',title:'Mouthwash stockout in 6 days',text:'Dental clinic channel demand +38% WoW; supplier lead time 18d.',impact:'SAR 420K REVENUE AT RISK'},
 {sev:'HIGH',cls:'high',trust:'CAUTION · 89',title:'AR concentration — Al Noor Group',text:'32% of overdue AR concentrated in one account; payment slipped 12d.',impact:'SAR 560K LIQUIDITY EXPOSURE'},
 {sev:'MEDIUM',cls:'medium',trust:'VERIFY · 74',title:'USD/SAR peg commentary unusual',text:'External signal fusion flagged 3 macro analyst notes.',impact:'FX HEDGE REVIEW'}],
 actions:[
 {cls:'CLASS B',trust:'TRUSTED · 91',title:'Expedite Mouthwash PO via air freight',text:'Protect the dental-channel revenue window while supplier lead time remains 18 days.',impact:'+SAR 380K PROTECTED REVENUE'},
 {cls:'CLASS C',trust:'CAUTION · 88',title:'Tighten Al Noor credit terms to NET-30 + deposit',text:'Reduce concentration while preserving the relationship and near-term liquidity.',impact:'CUT AR EXPOSURE SAR 560K'}]
};
