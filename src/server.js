const express = require('express');
const http = require('http');
const path = require('path');

const app = express();
const port = process.env.PORT || 3001;


const indexRouter = require('./app/routes/index');
const contactRouter = require('./app/routes/contact');
const encode = require('./encode')


app.use(express.static(__dirname + '/app/'))
app.use(express.json())
app.get('*.*', (req,res) => res.sendFile(path.join(__dirname)));


// Add headers
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

app.post('/api/contact', encode);

let title = '"""""""';

let content = `""
"AMERIČKI predsjednik Donald Trump nahvalio je svog mađarskog kolegu Viktora Orbana pri susretu u Bijeloj kući. Među ostalim, rekao je kako mu je "velika čast" primiti ga u posjet, kako je Orban napravio "ogroman posao na toliko različitih načina" i kako je "vrlo poštovan diljem Europe" - što evidentno nije istina.

"Vjerojatno je, kao i ja, pomalo kontroverzan, ali to je ok", najbliže je kritici - iako to ustvari nije - što je Trump došao prilikom susreta s mađarskim ekstremno desnim populistom. "Učinili ste dobar posao i održali svoju zemlju sigurnom", odmah je dodao.

To i nije iznenađujuće jer Trump i Orban imaju puno više zajedničkog nego onoga što ih dijeli. Prvenstveno je to - "borba protiv ilegalne imigracije", kao što je sam Orban naglasio.

"Učinili ste dobru stvar u vezi imigracije, mnogi to misle", uvjeravao ga je Trump, hvaleći ga da je zaista "podigao blok", u aluziji na mađarsko postavljanje žičane ograde na granici sa Srbijom i Hrvatskom prije nekoliko godina. Ograde zbog koje je, podsjetimo, migrantski val preusmjeren prvo preko Hrvatske, a sada preko BiH pa onda preko Hrvatske. 

U priopćenju Bijele kuće nakon susreta navodi se kako su "dvojica lidera potvrdila svoju predanost NATO savezu i demokratskom sustavu vladavine koji osigurava slobodu i kultivira prosperitet koji SAD i Mađarska uživaju". No kako brojni kritičari upozoravaju, upravo su Trump i Orban ti koji nasrću na demokratski sustav vladavine i podrivaju ga iznutra. O NATO-u, koji Trump shvaća kao zaštitni reket koji druge zemlje trebaju plaćati SAD-u, da ne govorimo.



Trumpovi kritičari su, kako piše Guardian, opisali Orbanov posjet Bijeloj kući (na Trumpov poziv, naravno) kao posljednju potvrdu Trumpovog preferiranja suradnje sa stranim liderima "čvrste ruke", bez obzira na njihovo gušenje ljudskih prava i građanskih sloboda.

"Orban predstavlja toliko stvari koje su antiteza središnjim američkim vrijednostima. On je nadgledao unazađivanje demokracije u svojoj zemlji, koristio antisemitske i ksenofobne izraze u svojoj političkoj komunikaciji i zbližio se s Vladimirom Putinom i Kremljem. Zabrinjava nas što vidimo da se predsjednik naše zemlje, koja je kroz povijest podržavala zaštitu i promicanje demokracije i ljudskih prava diljem svijeta, susreće s čovjekom koji tako redovito zanemaruje ove vrijednosti", stoji u otvorenom pismu demokratskih kongresnika predvođenih Eliotom Engelom upućenom Trumpu prije samog posjeta, u kojem su tražili da se Orbanov posjet otkaže.

Mađarska direktno prkosi SAD-u, Trump se dodvorava Orbanu

Osim što je Orban u Mađarskoj nametnuo svoj model "iliberalne demokracije", kako ga je sam nazvao, temeljito potkopavajući neovisnost pravosuđa, medija, civilnog društva i ekonomije, Orban je, kako ističe direktorica Europskog programa u Centru za strateške i međunarodne studije Heather Conley, u više navrata išao protiv američkih interesa u regiji.

Conley nabraja kako je Orban to učinio: kultivirajući bliske odnose s Putinom (iako je to, moglo bi se reći, učinio i sam Trump), pojačavajući svoju energetsku ovisnost o Rusiji, bilo putem novog plinovoda TurkStreama ili nuklearne elektrane Paks koju grade Rusi, ne suzbijajući kineski ekonomski utjecaj u Mađarskoj i Europi, dopuštajući Ruskoj međunarodnoj investicijskoj banci, koju se naširoko smatra instrumentom ruskih obavještajnih službi, da uspostavi sjedište u Budimpešti, odbijajući izručiti dvojicu osumnjičenih ruskih dilera oružja, blokirajući ukrajinske razgovore s NATO-om zbog zakona o službenom jeziku u toj zemlji i dajući azil odbjeglom bivšem premijeru Sjeverne Makedonije Nikoli Gruevskom protiv kojeg je u njegovoj zemlji podignuta optužnica zbog korupcije. 

Svemu ovome može se pridodati i Orbanovu vulgarnu i dezinformirajuće propagandnu kampanju protiv Bruxellesa, predsjednika Europske komisije Jean-Claude Junckera, židovsko-mađarskog milijardera i aktivista Georgea Sorosa i njegovog Srednjeeuropskog sveučlišta, zbog čega je i Europska pučka stranka suspendirala članstvo Orbanovog Fidesza.

"Ovo je ponižavajuće za SAD."

"Nagrađujete ovu opstrukciju čašću sastanka u Ovalnom uredu (Bijele kuće)?" napisala je Conley u tekstu naslovljenom "Umijeće iliberalnog dogovora" na stranici svog centra i dodala: "Ovo je ponižavajuće za SAD."

Štoviše, iako je Trump već mnogo puta grmio protiv NATO saveznica koje ne "plaćaju dovoljno SAD-u" - odnosno, prevedeno na jezik činjenica, ne ulažu dovoljno u svoj nacionalni vojni proračun koji posljedično jača zajedničku obranu saveza - Orbana nije prekorio za isto, iako Mađarska ulaže samo 1,15% svog BDP-a u obranu. To je vrlo daleko od dogovorene smjernice za NATO članice od 2% BDP-a. 

Znakovito je da je posljednji put kad je Orban posjetio Bijelu kuću bio davne 1998., kad je predsjednik bio Bill Clinton. Ni George W. Bush ni Barack Obama nisu ga pozvali za vrijeme svog mandata. Nedavni posjet Mikea Pompea Budimpešti bio je prvi posjet američkog državnog tajnika od 2011.

No umjesto da nametne stroge i konkretne uvjete za ponovno zatopljavanje odnosa - udaljavanje od Rusije i Kine, suzbijanje korupcije, prestanak represije nad nevladinim udrugama, prestanak sabotiranja ukrajinskih pregovora s NATO-om - SAD tolerira jogunjenje nelojalnog saveznika zbog Trumpovih simpatija prema autoritarno nastrojenim populistima. 


"""`;


//Python
let spawn = require("child_process").spawn;
let pythonProcess = spawn('python',["./assets/summarize.py", title, content]);

pythonProcess.stdout.on('data', (data) => {
         console.log(data.toString())
});


const server = http.createServer(app);

server.listen(port, () => {
    console.log('Server started')
})