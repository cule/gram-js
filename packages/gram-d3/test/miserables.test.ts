import { gramParse } from '../src';

const miserables = `(\`Napoleon\`{name:"Napoleon",group:1})
(\`Myriel\`{name:"Myriel",group:1})
(\`Mlle.Baptistine\`{name:"Mlle.Baptistine",group:1})
(\`Mme.Magloire\`{name:"Mme.Magloire",group:1})
(\`CountessdeLo\`{name:"CountessdeLo",group:1})
(\`Geborand\`{name:"Geborand",group:1})
(\`Champtercier\`{name:"Champtercier",group:1})
(\`Cravatte\`{name:"Cravatte",group:1})
(\`Count\`{name:"Count",group:1})
(\`OldMan\`{name:"OldMan",group:1})
(\`Labarre\`{name:"Labarre",group:2})
(\`Valjean\`{name:"Valjean",group:2})
(\`Marguerite\`{name:"Marguerite",group:3})
(\`Mme.deR\`{name:"Mme.deR",group:2})
(\`Isabeau\`{name:"Isabeau",group:2})
(\`Gervais\`{name:"Gervais",group:2})
(\`Tholomyes\`{name:"Tholomyes",group:3})
(\`Listolier\`{name:"Listolier",group:3})
(\`Fameuil\`{name:"Fameuil",group:3})
(\`Blacheville\`{name:"Blacheville",group:3})
(\`Favourite\`{name:"Favourite",group:3})
(\`Dahlia\`{name:"Dahlia",group:3})
(\`Zephine\`{name:"Zephine",group:3})
(\`Fantine\`{name:"Fantine",group:3})
(\`Mme.Thenardier\`{name:"Mme.Thenardier",group:4})
(\`Thenardier\`{name:"Thenardier",group:4})
(\`Cosette\`{name:"Cosette",group:5})
(\`Javert\`{name:"Javert",group:4})
(\`Fauchelevent\`{name:"Fauchelevent",group:0})
(\`Bamatabois\`{name:"Bamatabois",group:2})
(\`Perpetue\`{name:"Perpetue",group:3})
(\`Simplice\`{name:"Simplice",group:2})
(\`Scaufflaire\`{name:"Scaufflaire",group:2})
(\`Woman1\`{name:"Woman1",group:2})
(\`Judge\`{name:"Judge",group:2})
(\`Champmathieu\`{name:"Champmathieu",group:2})
(\`Brevet\`{name:"Brevet",group:2})
(\`Chenildieu\`{name:"Chenildieu",group:2})
(\`Cochepaille\`{name:"Cochepaille",group:2})
(\`Pontmercy\`{name:"Pontmercy",group:4})
(\`Boulatruelle\`{name:"Boulatruelle",group:6})
(\`Eponine\`{name:"Eponine",group:4})
(\`Anzelma\`{name:"Anzelma",group:4})
(\`Woman2\`{name:"Woman2",group:5})
(\`MotherInnocent\`{name:"MotherInnocent",group:0})
(\`Gribier\`{name:"Gribier",group:0})
(\`Jondrette\`{name:"Jondrette",group:7})
(\`Mme.Burgon\`{name:"Mme.Burgon",group:7})
(\`Gavroche\`{name:"Gavroche",group:8})
(\`Gillenormand\`{name:"Gillenormand",group:5})
(\`Magnon\`{name:"Magnon",group:5})
(\`Mlle.Gillenormand\`{name:"Mlle.Gillenormand",group:5})
(\`Mme.Pontmercy\`{name:"Mme.Pontmercy",group:5})
(\`Mlle.Vaubois\`{name:"Mlle.Vaubois",group:5})
(\`Lt.Gillenormand\`{name:"Lt.Gillenormand",group:5})
(\`Marius\`{name:"Marius",group:8})
(\`BaronessT\`{name:"BaronessT",group:5})
(\`Mabeuf\`{name:"Mabeuf",group:8})
(\`Enjolras\`{name:"Enjolras",group:8})
(\`Combeferre\`{name:"Combeferre",group:8})
(\`Prouvaire\`{name:"Prouvaire",group:8})
(\`Feuilly\`{name:"Feuilly",group:8})
(\`Courfeyrac\`{name:"Courfeyrac",group:8})
(\`Bahorel\`{name:"Bahorel",group:8})
(\`Bossuet\`{name:"Bossuet",group:8})
(\`Joly\`{name:"Joly",group:8})
(\`Grantaire\`{name:"Grantaire",group:8})
(\`MotherPlutarch\`{name:"MotherPlutarch",group:9})
(\`Gueulemer\`{name:"Gueulemer",group:4})
(\`Babet\`{name:"Babet",group:4})
(\`Claquesous\`{name:"Claquesous",group:4})
(\`Montparnasse\`{name:"Montparnasse",group:4})
(\`Toussaint\`{name:"Toussaint",group:5})
(\`Child1\`{name:"Child1",group:10})
(\`Child2\`{name:"Child2",group:10})
(\`Brujon\`{name:"Brujon",group:4})
(\`Mme.Hucheloup\`{name:"Mme.Hucheloup",group:8})

(\`Napoleon\`)-[{value:1}]->(\`Myriel\`)
(\`Mlle.Baptistine\`)-[{value:8}]->(\`Myriel\`)
(\`Mme.Magloire\`)-[{value:10}]->(\`Myriel\`)
(\`Mme.Magloire\`)-[{value:6}]->(\`Mlle.Baptistine\`)
(\`CountessdeLo\`)-[{value:1}]->(\`Myriel\`)
(\`Geborand\`)-[{value:1}]->(\`Myriel\`)
(\`Champtercier\`)-[{value:1}]->(\`Myriel\`)
(\`Cravatte\`)-[{value:1}]->(\`Myriel\`)
(\`Count\`)-[{value:2}]->(\`Myriel\`)
(\`OldMan\`)-[{value:1}]->(\`Myriel\`)
(\`Valjean\`)-[{value:1}]->(\`Labarre\`)
(\`Valjean\`)-[{value:3}]->(\`Mme.Magloire\`)
(\`Valjean\`)-[{value:3}]->(\`Mlle.Baptistine\`)
(\`Valjean\`)-[{value:5}]->(\`Myriel\`)
(\`Marguerite\`)-[{value:1}]->(\`Valjean\`)
(\`Mme.deR\`)-[{value:1}]->(\`Valjean\`)
(\`Isabeau\`)-[{value:1}]->(\`Valjean\`)
(\`Gervais\`)-[{value:1}]->(\`Valjean\`)
(\`Listolier\`)-[{value:4}]->(\`Tholomyes\`)
(\`Fameuil\`)-[{value:4}]->(\`Tholomyes\`)
(\`Fameuil\`)-[{value:4}]->(\`Listolier\`)
(\`Blacheville\`)-[{value:4}]->(\`Tholomyes\`)
(\`Blacheville\`)-[{value:4}]->(\`Listolier\`)
(\`Blacheville\`)-[{value:4}]->(\`Fameuil\`)
(\`Favourite\`)-[{value:3}]->(\`Tholomyes\`)
(\`Favourite\`)-[{value:3}]->(\`Listolier\`)
(\`Favourite\`)-[{value:3}]->(\`Fameuil\`)
(\`Favourite\`)-[{value:4}]->(\`Blacheville\`)
(\`Dahlia\`)-[{value:3}]->(\`Tholomyes\`)
(\`Dahlia\`)-[{value:3}]->(\`Listolier\`)
(\`Dahlia\`)-[{value:3}]->(\`Fameuil\`)
(\`Dahlia\`)-[{value:3}]->(\`Blacheville\`)
(\`Dahlia\`)-[{value:5}]->(\`Favourite\`)
(\`Zephine\`)-[{value:3}]->(\`Tholomyes\`)
(\`Zephine\`)-[{value:3}]->(\`Listolier\`)
(\`Zephine\`)-[{value:3}]->(\`Fameuil\`)
(\`Zephine\`)-[{value:3}]->(\`Blacheville\`)
(\`Zephine\`)-[{value:4}]->(\`Favourite\`)
(\`Zephine\`)-[{value:4}]->(\`Dahlia\`)
(\`Fantine\`)-[{value:3}]->(\`Tholomyes\`)
(\`Fantine\`)-[{value:3}]->(\`Listolier\`)
(\`Fantine\`)-[{value:3}]->(\`Fameuil\`)
(\`Fantine\`)-[{value:3}]->(\`Blacheville\`)
(\`Fantine\`)-[{value:4}]->(\`Favourite\`)
(\`Fantine\`)-[{value:4}]->(\`Dahlia\`)
(\`Fantine\`)-[{value:4}]->(\`Zephine\`)
(\`Fantine\`)-[{value:2}]->(\`Marguerite\`)
(\`Fantine\`)-[{value:9}]->(\`Valjean\`)
(\`Mme.Thenardier\`)-[{value:2}]->(\`Fantine\`)
(\`Mme.Thenardier\`)-[{value:7}]->(\`Valjean\`)
(\`Thenardier\`)-[{value:3}]->(\`Mme.Thenardier\`)
(\`Thenardier\`)-[{value:1}]->(\`Fantine\`)
(\`Thenardier\`)-[{value:2}]->(\`Valjean\`)
(\`Cosette\`)-[{value:4}]->(\`Mme.Thenardier\`)
(\`Cosette\`)-[{value:1}]->(\`Valjean\`)
(\`Cosette\`)-[{value:1}]->(\`Tholomyes\`)
(\`Cosette\`)-[{value:1}]->(\`Thenardier\`)
(\`Javert\`)-[{value:7}]->(\`Valjean\`)
(\`Javert\`)-[{value:5}]->(\`Fantine\`)
(\`Javert\`)-[{value:5}]->(\`Thenardier\`)
(\`Javert\`)-[{value:1}]->(\`Mme.Thenardier\`)
(\`Javert\`)-[{value:1}]->(\`Cosette\`)
(\`Fauchelevent\`)-[{value:8}]->(\`Valjean\`)
(\`Fauchelevent\`)-[{value:1}]->(\`Javert\`)
(\`Bamatabois\`)-[{value:1}]->(\`Fantine\`)
(\`Bamatabois\`)-[{value:1}]->(\`Javert\`)
(\`Bamatabois\`)-[{value:2}]->(\`Valjean\`)
(\`Perpetue\`)-[{value:1}]->(\`Fantine\`)
(\`Simplice\`)-[{value:2}]->(\`Perpetue\`)
(\`Simplice\`)-[{value:3}]->(\`Valjean\`)
(\`Simplice\`)-[{value:2}]->(\`Fantine\`)
(\`Simplice\`)-[{value:1}]->(\`Javert\`)
(\`Scaufflaire\`)-[{value:1}]->(\`Valjean\`)
(\`Woman\`)-[{value:1}]->(\`Valjean\`)
(\`Woman\`)-[{}]->(\`Javert\`)
(\`Judge\`)-[{value:3}]->(\`Valjean\`)
(\`Judge\`)-[{value:2}]->(\`Bamatabois\`)
(\`Champmathieu\`)-[{value:3}]->(\`Valjean\`)
(\`Champmathieu\`)-[{value:3}]->(\`Judge\`)
(\`Champmathieu\`)-[{value:2}]->(\`Bamatabois\`)
(\`Brevet\`)-[{value:2}]->(\`Judge\`)
(\`Brevet\`)-[{value:2}]->(\`Champmathieu\`)
(\`Brevet\`)-[{value:2}]->(\`Valjean\`)
(\`Brevet\`)-[{value:1}]->(\`Bamatabois\`)
(\`Chenildieu\`)-[{value:2}]->(\`Judge\`)
(\`Chenildieu\`)-[{value:2}]->(\`Champmathieu\`)
(\`Chenildieu\`)-[{value:2}]->(\`Brevet\`)
(\`Chenildieu\`)-[{value:2}]->(\`Valjean\`)
(\`Chenildieu\`)-[{value:1}]->(\`Bamatabois\`)
(\`Cochepaille\`)-[{value:2}]->(\`Judge\`)
(\`Cochepaille\`)-[{value:2}]->(\`Champmathieu\`)
(\`Cochepaille\`)-[{value:2}]->(\`Brevet\`)
(\`Cochepaille\`)-[{value:2}]->(\`Chenildieu\`)
(\`Cochepaille\`)-[{value:2}]->(\`Valjean\`)
(\`Cochepaille\`)-[{value:1}]->(\`Bamatabois\`)
(\`Pontmercy\`)-[{value:1}]->(\`Thenardier\`)
(\`Boulatruelle\`)-[{value:1}]->(\`Thenardier\`)
(\`Eponine\`)-[{value:2}]->(\`Mme.Thenardier\`)
(\`Eponine\`)-[{value:3}]->(\`Thenardier\`)
(\`Anzelma\`)-[{value:2}]->(\`Eponine\`)
(\`Anzelma\`)-[{value:2}]->(\`Thenardier\`)
(\`Anzelma\`)-[{value:1}]->(\`Mme.Thenardier\`)
(\`Woman\`)-[{value:2}]->(\`Valjean\`)
(\`Woman\`)-[{value:2}]->(\`Cosette\`)
(\`Woman\`)-[{}]->(\`Javert\`)
(\`MotherInnocent\`)-[{value:3}]->(\`Fauchelevent\`)
(\`MotherInnocent\`)-[{value:1}]->(\`Valjean\`)
(\`Gribier\`)-[{value:2}]->(\`Fauchelevent\`)
(\`Mme.Burgon\`)-[{value:1}]->(\`Jondrette\`)
(\`Gavroche\`)-[{value:2}]->(\`Mme.Burgon\`)
(\`Gavroche\`)-[{value:1}]->(\`Thenardier\`)
(\`Gavroche\`)-[{value:1}]->(\`Javert\`)
(\`Gavroche\`)-[{value:1}]->(\`Valjean\`)
(\`Gillenormand\`)-[{value:3}]->(\`Cosette\`)
(\`Gillenormand\`)-[{value:2}]->(\`Valjean\`)
(\`Magnon\`)-[{value:1}]->(\`Gillenormand\`)
(\`Magnon\`)-[{value:1}]->(\`Mme.Thenardier\`)
(\`Mlle.Gillenormand\`)-[{value:9}]->(\`Gillenormand\`)
(\`Mlle.Gillenormand\`)-[{value:2}]->(\`Cosette\`)
(\`Mlle.Gillenormand\`)-[{value:2}]->(\`Valjean\`)
(\`Mme.Pontmercy\`)-[{value:1}]->(\`Mlle.Gillenormand\`)
(\`Mme.Pontmercy\`)-[{value:1}]->(\`Pontmercy\`)
(\`Mlle.Vaubois\`)-[{value:1}]->(\`Mlle.Gillenormand\`)
(\`Lt.Gillenormand\`)-[{value:2}]->(\`Mlle.Gillenormand\`)
(\`Lt.Gillenormand\`)-[{value:1}]->(\`Gillenormand\`)
(\`Lt.Gillenormand\`)-[{value:1}]->(\`Cosette\`)
(\`Marius\`)-[{value:6}]->(\`Mlle.Gillenormand\`)
(\`Marius\`)-[{value:2}]->(\`Gillenormand\`)
(\`Marius\`)-[{value:1}]->(\`Pontmercy\`)
(\`Marius\`)-[{value:1}]->(\`Lt.Gillenormand\`)
(\`Marius\`)-[{value:1}]->(\`Cosette\`)
(\`Marius\`)-[{value:9}]->(\`Valjean\`)
(\`Marius\`)-[{value:1}]->(\`Tholomyes\`)
(\`Marius\`)-[{value:2}]->(\`Thenardier\`)
(\`Marius\`)-[{value:5}]->(\`Eponine\`)
(\`Marius\`)-[{value:4}]->(\`Gavroche\`)
(\`BaronessT\`)-[{value:1}]->(\`Gillenormand\`)
(\`BaronessT\`)-[{value:1}]->(\`Marius\`)
(\`Mabeuf\`)-[{value:1}]->(\`Marius\`)
(\`Mabeuf\`)-[{value:1}]->(\`Eponine\`)
(\`Mabeuf\`)-[{value:1}]->(\`Gavroche\`)
(\`Enjolras\`)-[{value:7}]->(\`Marius\`)
(\`Enjolras\`)-[{value:7}]->(\`Gavroche\`)
(\`Enjolras\`)-[{value:6}]->(\`Javert\`)
(\`Enjolras\`)-[{value:1}]->(\`Mabeuf\`)
(\`Enjolras\`)-[{value:4}]->(\`Valjean\`)
(\`Combeferre\`)-[{value:5}]->(\`Enjolras\`)
(\`Combeferre\`)-[{value:5}]->(\`Marius\`)
(\`Combeferre\`)-[{value:6}]->(\`Gavroche\`)
(\`Combeferre\`)-[{value:2}]->(\`Mabeuf\`)
(\`Prouvaire\`)-[{value:1}]->(\`Gavroche\`)
(\`Prouvaire\`)-[{value:4}]->(\`Enjolras\`)
(\`Prouvaire\`)-[{value:2}]->(\`Combeferre\`)
(\`Feuilly\`)-[{value:2}]->(\`Gavroche\`)
(\`Feuilly\`)-[{value:6}]->(\`Enjolras\`)
(\`Feuilly\`)-[{value:2}]->(\`Prouvaire\`)
(\`Feuilly\`)-[{value:5}]->(\`Combeferre\`)
(\`Feuilly\`)-[{value:1}]->(\`Mabeuf\`)
(\`Feuilly\`)-[{value:1}]->(\`Marius\`)
(\`Courfeyrac\`)-[{value:9}]->(\`Marius\`)
(\`Courfeyrac\`)-[{value:7}]->(\`Enjolras\`)
(\`Courfeyrac\`)-[{value:3}]->(\`Combeferre\`)
(\`Courfeyrac\`)-[{value:7}]->(\`Gavroche\`)
(\`Courfeyrac\`)-[{value:2}]->(\`Mabeuf\`)
(\`Courfeyrac\`)-[{value:1}]->(\`Eponine\`)
(\`Courfeyrac\`)-[{value:6}]->(\`Feuilly\`)
(\`Courfeyrac\`)-[{value:3}]->(\`Prouvaire\`)
(\`Bahorel\`)-[{value:5}]->(\`Combeferre\`)
(\`Bahorel\`)-[{value:5}]->(\`Gavroche\`)
(\`Bahorel\`)-[{value:6}]->(\`Courfeyrac\`)
(\`Bahorel\`)-[{value:2}]->(\`Mabeuf\`)
(\`Bahorel\`)-[{value:4}]->(\`Enjolras\`)
(\`Bahorel\`)-[{value:3}]->(\`Feuilly\`)
(\`Bahorel\`)-[{value:2}]->(\`Prouvaire\`)
(\`Bahorel\`)-[{value:1}]->(\`Marius\`)
(\`Bossuet\`)-[{value:5}]->(\`Marius\`)
(\`Bossuet\`)-[{value:2}]->(\`Courfeyrac\`)
(\`Bossuet\`)-[{value:5}]->(\`Gavroche\`)
(\`Bossuet\`)-[{value:4}]->(\`Bahorel\`)
(\`Bossuet\`)-[{value:0}]->(\`Enjolras\`)
(\`Bossuet\`)-[{value:6}]->(\`Feuilly\`)
(\`Bossuet\`)-[{value:2}]->(\`Prouvaire\`)
(\`Bossuet\`)-[{value:9}]->(\`Combeferre\`)
(\`Bossuet\`)-[{value:1}]->(\`Mabeuf\`)
(\`Bossuet\`)-[{value:1}]->(\`Valjean\`)
(\`Joly\`)-[{value:5}]->(\`Bahorel\`)
(\`Joly\`)-[{value:7}]->(\`Bossuet\`)
(\`Joly\`)-[{value:3}]->(\`Gavroche\`)
(\`Joly\`)-[{value:5}]->(\`Courfeyrac\`)
(\`Joly\`)-[{value:5}]->(\`Enjolras\`)
(\`Joly\`)-[{value:5}]->(\`Feuilly\`)
(\`Joly\`)-[{value:2}]->(\`Prouvaire\`)
(\`Joly\`)-[{value:5}]->(\`Combeferre\`)
(\`Joly\`)-[{value:1}]->(\`Mabeuf\`)
(\`Joly\`)-[{value:2}]->(\`Marius\`)
(\`Grantaire\`)-[{value:3}]->(\`Bossuet\`)
(\`Grantaire\`)-[{value:3}]->(\`Enjolras\`)
(\`Grantaire\`)-[{value:1}]->(\`Combeferre\`)
(\`Grantaire\`)-[{value:2}]->(\`Courfeyrac\`)
(\`Grantaire\`)-[{value:2}]->(\`Joly\`)
(\`Grantaire\`)-[{value:1}]->(\`Gavroche\`)
(\`Grantaire\`)-[{value:1}]->(\`Bahorel\`)
(\`Grantaire\`)-[{value:1}]->(\`Feuilly\`)
(\`Grantaire\`)-[{value:1}]->(\`Prouvaire\`)
(\`MotherPlutarch\`)-[{value:3}]->(\`Mabeuf\`)
(\`Gueulemer\`)-[{value:5}]->(\`Thenardier\`)
(\`Gueulemer\`)-[{value:1}]->(\`Valjean\`)
(\`Gueulemer\`)-[{value:1}]->(\`Mme.Thenardier\`)
(\`Gueulemer\`)-[{value:1}]->(\`Javert\`)
(\`Gueulemer\`)-[{value:1}]->(\`Gavroche\`)
(\`Gueulemer\`)-[{value:1}]->(\`Eponine\`)
(\`Babet\`)-[{value:6}]->(\`Thenardier\`)
(\`Babet\`)-[{value:6}]->(\`Gueulemer\`)
(\`Babet\`)-[{value:1}]->(\`Valjean\`)
(\`Babet\`)-[{value:1}]->(\`Mme.Thenardier\`)
(\`Babet\`)-[{value:2}]->(\`Javert\`)
(\`Babet\`)-[{value:1}]->(\`Gavroche\`)
(\`Babet\`)-[{value:1}]->(\`Eponine\`)
(\`Claquesous\`)-[{value:4}]->(\`Thenardier\`)
(\`Claquesous\`)-[{value:4}]->(\`Babet\`)
(\`Claquesous\`)-[{value:4}]->(\`Gueulemer\`)
(\`Claquesous\`)-[{value:1}]->(\`Valjean\`)
(\`Claquesous\`)-[{value:1}]->(\`Mme.Thenardier\`)
(\`Claquesous\`)-[{value:1}]->(\`Javert\`)
(\`Claquesous\`)-[{value:1}]->(\`Eponine\`)
(\`Claquesous\`)-[{value:1}]->(\`Enjolras\`)
(\`Montparnasse\`)-[{value:1}]->(\`Javert\`)
(\`Montparnasse\`)-[{value:2}]->(\`Babet\`)
(\`Montparnasse\`)-[{value:2}]->(\`Gueulemer\`)
(\`Montparnasse\`)-[{value:2}]->(\`Claquesous\`)
(\`Montparnasse\`)-[{value:1}]->(\`Valjean\`)
(\`Montparnasse\`)-[{value:1}]->(\`Gavroche\`)
(\`Montparnasse\`)-[{value:1}]->(\`Eponine\`)
(\`Montparnasse\`)-[{value:1}]->(\`Thenardier\`)
(\`Toussaint\`)-[{value:2}]->(\`Cosette\`)
(\`Toussaint\`)-[{value:1}]->(\`Javert\`)
(\`Toussaint\`)-[{value:1}]->(\`Valjean\`)
(\`Child\`)-[{value:2}]->(\`Gavroche\`)
(\`Child\`)-[{value:2}]->(\`Gavroche\`)
(\`Child\`)-[{}]->(\`Child1\`)
(\`Brujon\`)-[{value:3}]->(\`Babet\`)
(\`Brujon\`)-[{value:3}]->(\`Gueulemer\`)
(\`Brujon\`)-[{value:3}]->(\`Thenardier\`)
(\`Brujon\`)-[{value:1}]->(\`Gavroche\`)
(\`Brujon\`)-[{value:1}]->(\`Eponine\`)
(\`Brujon\`)-[{value:1}]->(\`Claquesous\`)
(\`Brujon\`)-[{value:1}]->(\`Montparnasse\`)
(\`Mme.Hucheloup\`)-[{value:1}]->(\`Bossuet\`)
(\`Mme.Hucheloup\`)-[{value:1}]->(\`Joly\`)
(\`Mme.Hucheloup\`)-[{value:1}]->(\`Grantaire\`)
(\`Mme.Hucheloup\`)-[{value:1}]->(\`Bahorel\`)
(\`Mme.Hucheloup\`)-[{value:1}]->(\`Courfeyrac\`)
(\`Mme.Hucheloup\`)-[{value:1}]->(\`Gavroche\`)
(\`Mme.Hucheloup\`)-[{value:1}]->(\`Enjolras\`)

`;
const napoleonIndex = 0;
const myrielIndex = 1;

describe('gramParse', () => {
  it('links "right" direction from source to target', () => {
    const src = miserables;
    const d3Graph = gramParse(src);
    expect(d3Graph.links[0].source).toBe(d3Graph.nodes[napoleonIndex].id);
    expect(d3Graph.links[0].target).toBe(d3Graph.nodes[myrielIndex].id);
  });

  it('handles node data records as a nested "record" object', () => {
    const src = miserables;
    const expectedName = 'Napoleon';
    const expectedGroup = 1;
    const d3Graph = gramParse(src);
    const d3Node = d3Graph.nodes[0];
    console.dir(d3Node);
    expect(d3Node.record).toHaveProperty('name');
    expect(d3Node.record.name).toStrictEqual(expectedName);
    expect(d3Node.record).toHaveProperty('group');
    expect(d3Node.record.group).toStrictEqual(expectedGroup);
  });
});
