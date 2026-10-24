/* World units are independent of screen pixels: 540 × 960. */
const LEVELS=[
 {name:'A little hello',hint:'Drop onto the bubble to free your friend.',targets:[[270,510]],platforms:[[270,590,230,20,0]],blocks:[],springs:[]},
 {name:'Around the bend',hint:'Ramps turn a drop into a roll.',targets:[[150,460],[385,640]],platforms:[[155,540,230,20,.18],[385,720,230,20,-.12]],blocks:[[140,510,22,38],[165,510,22,38]],springs:[]},
 {name:'The domino effect',hint:'Moving blocks can pop bubbles too.',targets:[[140,440],[350,420],[430,665]],platforms:[[235,560,330,22,.04],[420,740,150,20,0]],blocks:[[210,510,22,76],[244,510,22,76],[278,510,22,76],[312,510,22,76],[346,510,22,76],[380,510,22,76]],springs:[]},
 {name:'Spring into it',hint:'Land on mint pads for an extra spring.',targets:[[125,435],[390,490],[260,690]],platforms:[[110,520,150,20,.07],[425,575,160,20,-.12],[270,770,220,20,0]],blocks:[[420,547,38,38]],springs:[[120,490,100],[400,545,100]]},
 {name:'A little more chaos',hint:'Three friends. Three drops. Find your route.',targets:[[130,415],[410,440],[310,700]],platforms:[[100,530,140,20,0],[440,565,140,20,0],[270,775,240,20,0]],blocks:[[95,498,26,43],[135,498,26,43],[405,530,24,50],[442,530,24,50]],springs:[[270,745,100]],seesaw:[150,620,180]},
 {name:'Two little detours',hint:'Choose a side, then explore the centre.',targets:[[115,440],[425,455],[270,685]],platforms:[[115,530,160,20,.12],[425,545,160,20,-.12],[270,770,190,20,0]],blocks:[],springs:[]},
 {name:'Domino duet',hint:'Wake the toys with Kiana. Follow the chain.',targets:[[145,420],[370,435],[445,675]],platforms:[[225,550,320,20,.08],[440,750,140,20,0]],blocks:[[190,505,20,65],[220,505,20,65],[250,505,20,65],[280,505,20,65],[310,505,20,65]],springs:[]},
 {name:'Bounce between friends',hint:'One bounce per drop. Save it for the right moment.',targets:[[115,420],[420,430],[280,690]],platforms:[[100,525,130,20,0],[435,535,130,20,0],[270,775,220,20,0]],blocks:[],springs:[[110,495,95],[425,505,95]]},
 {name:'A balancing act',hint:'An off-centre landing tips the little seesaw.',targets:[[110,425],[425,445],[330,690]],platforms:[[100,520,130,20,0],[435,545,130,20,0],[330,775,180,20,0]],blocks:[],springs:[],seesaw:[155,630,190]},
 {name:'The bedroom finale',hint:'Explore three routes. Make every drop count.',targets:[[105,420],[425,445],[290,695]],platforms:[[100,530,130,20,.12],[440,560,130,20,-.08],[280,780,240,20,0]],blocks:[[85,498,20,42],[115,498,20,42],[425,525,22,50],[455,525,22,50]],springs:[[280,750,100]],seesaw:[150,630,180]}
];
if(typeof module!=='undefined')module.exports=LEVELS;
