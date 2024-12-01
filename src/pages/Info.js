import React from 'react';

export default function Info() {
    return(
        <div className="App">
            <header>
                <h1>Projektbeskrivelse</h1>
                <div className="App-row">
                    <div className="App-column">
                        <p>JavaScript</p>
                        <p>
                        Projektet går ud på, at anvende React og JavaScript til, at udvikle en digital ordrebog, i form af en webapplikation. Klienten, der er guldsmed, ønsker en admin platform, hvor hun kan opbevare oplysninger om hendes kunder og ordrer. Vi skal som en tværfaglig gruppe af studerende uddelegere arbejdsopgaver og mødes om faglig sparring, i udviklingen af produktet. Forneden finder du studierelevante læringsmål  og produktrelaterede kvalitetskriterier.
                        </p>
                    </div>
                    <div className="App-column">
                        <p>Embedded C</p>
                        <p>
                        Som en del af projektet, ønsker jeg at udvikle en kundeundersøgelse i form af en mikrocontroller, der består af et Arduino Giga R1 WiFi Board og et Arduino Giga Display Shield. På skærmen skal en kunde kunne vælge mellem 1 og 3 stjerner, alt efter deres oplevelse i butikken. Mikrocontrolleren skal kunne registrere, hvilken stjerne der trykkes på, og sende den data videre, så den kan blive opfanget, og eventuelt vist på en side i den digitale ordrebog.
                        </p>
                    </div>
                </div>
                <h1>Læringsmål</h1>
                <div className="App-row">
                    <div className="App-column">
                        <p>JavaScript</p>
                        <p>Viden</p>
                        <ul>
                            <li>Kendskab til de anvendte teorier, metoder og praksisser inden for frontend udvikling med React og programmering med JavaScript, der er relevante for projektets omfang.</li>
                            <li>Viden om React, især i forhold til dets opbygning og anvendelse i udviklingen af interaktive webapplikationer med dynamiske brugergrænsflader.</li>
                            <li>Forståelse for JavaScript, de tilhørende metoder og redskaber, og deres anvendelse. Herunder f.eks. betydningen og anvendelsen af JSON, Fetch og DOM.</li>
                        </ul>
                        <p>Færdigheder</p>
                        <ul>
                            <li>Anvende de lærte metoder og redskaber i React og JavaScript til at udvikle og implentere en interaktiv webapplikation i samarbejde med produktgruppen.</li>
                            <li>Vurdere problemstillinger, når de dukker op i løbet af processen, og vælge relevante og begrundede løsninger ved at bruge viden om React og JavaScript.</li>
                            <li>Formidle faglige problemstillinger og løsningsmodeller til medstuderende og virksomhedsklienten, for at møde klientens behov og forbedre brugeroplevelsen.</li>
                        </ul>
                        <p>Kompetencer</p>
                        <ul>
                            <li>Håndtere komplekse problematikker i løbet af udviklings- og implementeringsprocessen af webapplikationen, nogle gange ved at søge ny viden.</li>
                            <li>Indgå i fagligt og tværfagligt samarbejde om udviklingen og implementeringen af en webapplikation ved at kommunikere med guild, procesgruppe og produktgruppe.</li>
                            <li>Identificere egne læringsforløb og strukturere egen læring i tilegnelsen af viden og opbyggelsen af færdigheder i relation til webudvikling med React og JavaScript.</li>
                        </ul>
                    </div>
                    <div className="App-column">
                        <p>Embedded C</p>
                        <p>Viden</p>
                        <ul>
                            <li>Kendskab til de anvendte teorier, metoder og praksisser, som findes i forbindelse med udviklingen af embedded systemer, der programmeres i C.</li>
                            <li>Viden om Arduino, bl.a. de relevante hardware komponenter og deres anvendelse i udviklingen af et mikrocontrollerbaseret system.</li>
                            <li>Forståelse for C, de metoder og redskaber, der hører til, og deres anvendelse i Arduino. F.eks. betydningen og implementeringen af JSON, WiFi og diverse biblioteker.</li>
                        </ul>
                        <p>Færdigheder</p>
                        <ul>
                            <li>Anvende de tillærte metoder og redskaber i Arduino og C til at udvikle og implementere et mikrocontrollersystem.</li>
                            <li>Vurdere problemstillinger, når de dukker op i løbet af processen, og vælge relevante og begrundede løsningsmodeller ved at trække på viden om Arduino og C.</li>
                            <li>Formidle faglige problemstillinger og løsningsmodeller til medstuderende og virksomhedsklienten, for igen at møde klientens behov og forbedre brugeroplevelsen.</li>
                        </ul>
                        <p>Kompetencer</p>
                        <ul>
                            <li>Håndtere komplekse problemer i løbet af udviklings- og implementeringsprocessen, med fokus på at sende data fra mikrocontrolleren.</li>
                            <li>Indgå i fagligt og tværfagligt samarbejde ved flittig brug af guild, procesgruppe og kontinuerlig kommunikation med produktgruppen.</li>
                            <li>Identificere egne læringsforløb og strukturere egen læring i tilegnelsen af viden og opbyggelsen af færdigheder i relation til embedded systemer.</li>
                        </ul>
                    </div>
                </div>
                <h1>Kvalitetskriterier</h1>
                <div className="App-row">
                    <div className="App-column">
                        <p>JavaScript</p>
                        <p>Specifikt</p>
                        <ul>
                            <li>Målet med projektet er at udvikle en webapplikation, der skal fungere som en digital ordrebog for klienten, der er guldsmed.</li>
                            <li>Brugeren skal kunne oprette, redigere og slette en kunde i sin digitale ordrebog.</li>
                            <li>En kunde, i den digitale ordrebog, skal vise vigtige informationer, såsom kontaktoplysninger.</li>
                            <li>Brugeren skal også kunne oprette en eller flere ordrer knyttet til en kunde, og skal kunne redigere og slette individuelle ordrer.</li>
                            <li>En ordre skal indeholde afleveringsfrist og detaljer vedrørende produceringen.</li>
                        </ul>
                        <p>Målbart</p>
                        <ul>
                            <li>Opnåelse af projektets overordnede mål er målt i dialog med klienten, og er baseret på deres tilfredshed.</li>
                            <li>Delmålene er til gængæld målt på deres konkrete implementering og på fungerende funktionalitet.</li>
                        </ul>
                        <p>Acceptabelt</p>
                        <ul>
                            <li>Målene kan opnås med hjælp fra Kolbs læringscirkel. Først ved at opsøge viden for at fremme begrebsdannelsen, så ved at udføre aktiviteter og eksperimenter, ud fra den viden, man har tilegnet sig. Det gør man sig erfaringer ud fra, som man kan tage til refleksion og eftertanke.</li>
                            <li>For hver iteration med Kolbs læringscirkel, kommer vi tættere på at opfylde både læringsmålene og projektets problemstilling.</li>
                        </ul>
                        <p>Realistisk</p>
                        <ul>
                            <li>Målet med at udvikle en webapplikation skal opnås ved brug af React og JavaScript, og derfor understøtter det læringsmålene relateret til webudvikling.</li>
                            <li>Delmålene understøtter muligheden for at illustrere og implementere redskaber og metoder i React og JavaScript, som beskrevet i læringsmålene.</li>
                        </ul>
                        <p>Tidsbestemt</p>
                        <ul>
                            <li>Den digitale ordrebog skal afleveres den 2. december 2024.</li>
                            <li>Delmålenes frister er opdelte i sprint, som projektlederen faciliterer.</li>
                        </ul>
                    </div>
                    <div className="App-column">
                        <p>Embedded C</p>
                        <p>Specifikt</p>
                        <ul>
                            <li>Målet med projektet er at udvikle en mikrocontroller, der skal fungere som en kundeundersøgelse for klienten, der er guldsmed.</li>
                            <li>På vej ud ad døren, skal kunden kunne trykke på et touch display, for at indikere, hvor tilfredse de var med besøget i butikken.</li>
                            <li>Mikrocontrolleren registrerer interaktionen og udskriver data, der kan samles op af en ekstern entitet.</li>
                        </ul>
                        <p>Målbart</p>
                        <ul>
                            <li>Opnåelse af projektets overordnede mål er målt i dialog med klienten, og er baseret på deres tilfredshed.</li>
                            <li>For at delmålene er opnåede, skal mikrokontrolleren registrere at man interagerer med den, og staks udsende den rigtige data, baseret på interaktionen.</li>
                        </ul>
                        <p>Acceptabelt</p>
                        <ul>
                            <li>Målene kan opnås med hjælp fra Kolbs læringscirkel. Først opsøges viden for at fremme begrebsdannelsen inden for programmering i C og udvikling af embedded systemer. I den forbindelse, bliver der udført nogle aktiviteter i form af tutorials, som Arduino udbyder. Det gør man sig erfaringer ud fra, som man kan tage til refleksion og eftertanke, når projektet skal implementeres.</li>
                            <li>For hver iteration med Kolbs læringscirkel, kommer vi tættere på at opfylde både læringsmålene og projektets problemstilling.</li>
                        </ul>
                        <p>Realistisk</p>
                        <ul>
                            <li>Målet med at udvikle en mikrocontroller skal opnås ved brug af Arduino og C, og derfor understøtter det læringsmålene relateret til Embedded C.</li>
                            <li>Delmålene understøtter muligheden for at illustrere og implementere redskaber og metoder i Arduino og C, som beskrevet i læringsmålene.</li>
                        </ul>
                        <p>Tidsbestemt</p>
                        <ul>
                            <li>Mikrocontrollerens resultater skal afleveres den 2. december 2024.</li>
                            <li>Delmålenes frister er opdelte i sprint, der løber asynkront fra webudviklingens sprints.</li>
                        </ul>
                    </div>
                </div>
                <h1>Kildemateriale</h1>
                <div className="App-row">
                    <div className="App-column">
                        <p>Proces</p>
                        <ul>
                            <li>Andersen, Lene(2024):”Projektbaseret læring med individuelle læringsmål”, Articulate 360, 2024, <a href="https://rise.articulate.com/share/KPnM6f3Fl_8JemRWhkrGQTRH50UXESyE#/">rise.articulate.com</a> (tilgået 12/08/2024)</li>
                            <li>Andersen, Lene (2024): “At skrive læringsmål”, Articulate 360, 2024, <a href="https://rise.articulate.com/share/0cqLbVL1QMZ4ZrL6hJlUD1_fj4uMGWP9#/">rise.articulate.com</a> (tilgået 14/10/2024)</li>
                            <li>Aldrigmere.dk: <a href="https://www.aldrigmere.dk/materialer/hjaelpetekster/blooms-taksonomi">aldrigmere.dk/materialer/hjaelpetekster/blooms-taksonomi</a> (tilgået 30/11/2024)</li>
                            <li></li>
                        </ul>
                        <p>JavaScript</p>
                        <ul>
                            <li>Joubran, Jad (2024): ”Learn JavaScript”, Learn JavaScript, 2024, <a href="https://learnjavascript.online/app.html?id=1435">learnjavascript.online</a> (tilgået 30/11/2024)</li>
                            <li>Rand-Hendriksen, Morten (2024): ”JavaScript Essential Training”, LinkedIn Learning, 07/06/2024, <a href="https://www.linkedin.com/learning-login/share?account=57075649&forceAccount=false&redirect=https%3A%2F%2Fwww.linkedin.com%2Flearning%2Fjavascript-essential-training%3Ftrk%3Dshare_ent_url%26shareId%3DdBa5PaXTQ6eJIbvy3Lm62Q%253D%253D">linkedin.com/learning</a> (tilgået 20/08/2024)</li>
                            <li>JavaScript Mastery (2022): ” React JS Full Course”, YouTube, 04/03/2022, <a href="https://www.youtube.com/watch?v=b9eMGE7QtTk&t=790s">youtube.com</a> (tilgået 30/11/2024)</li>
                            <li>Web Dev Simplified (2022): “How To Create A Navbar In React With Routing”, YouTube, 24/05/2022, <a href="https://www.youtube.com/watch?v=SLfhMt5OUPI">youtube.com</a> (tilgået 30/11/2024)</li>
                            <li>nodejs.org: <a href="https://nodejs.org/en">nodejs.org/en</a> (tilgået 30/11/2024)</li>
                            <li>nodejs.org: <a href="https://nodejs.org/en/download/package-manager">nodejs.org/en/download/package-manager</a> (tilgået 30/11/2024)</li>
                            <li>tailwindcss.com: <a href=": https://tailwindcss.com/docs/installation">tailwindcss.com/docs/installation</a> (tilgået 30/11/2014)</li>
                        </ul>
                    </div>
                    <div className="App-column">
                        <p>Embedded C</p>
                        <ul>
                            <li>Arduino: “Arduino Starter Kit Multi-language”</li>
                            <li>Arduino: “Arduino GIGA Display Bundle”</li>
                            <li>Shiffman, Daniel (2009): “Learning Processing: A Beginner’s Guide to Programming Images, Animation, and Interaction”, Second Edition, Morgan Kaufmann</li>
                            <li>Gookin, Dan (2020): ”C Essential Learning”, LinkedIn Learning, 24/09/2020, <a href="https://www.linkedin.com/learning-login/share?account=57075649&forceAccount=false&redirect=https%3A%2F%2Fwww.linkedin.com%2Flearning%2Fc-essential-training%3Ftrk%3Dshare_ent_url%26shareId%3DpW52prKHS92QoXMpi%252BQoyQ%253D%253D">linkedin.com/learning</a> (tilgået 25/09/2024)</li>
                            <li>Gooking, Dan (2020): “Master C Language Pointers”, LinkedIn Learning, 21/04/2020, <a href="https://www.linkedin.com/learning-login/share?account=57075649&forceAccount=false&redirect=https%3A%2F%2Fwww.linkedin.com%2Flearning%2Fmaster-c-language-pointers%3Ftrk%3Dshare_ent_url%26shareId%3DbdHviiLAQUqQ5WT4WGGikA%253D%253D">linkedin.com/learning</a> (tilgået 07/10/2024)</li>
                            <li>Reas, Casey & Ben Fry (2015): “Getting Started”, Processing, 2015, <a href="https://processing.org/tutorials/gettingstarted">processing.org/tutorials</a> (tilgået 30/11/2024)</li>
                            <li>Reas, Casey & Ben Fry (2007): “Processing Overview”, Processing, 2007, <a href="https://processing.org/tutorials/overview">processing.org/tutorials</a> (tilgået 30/11/2024)</li>
                            <li>Dannegård, Benjamin (2024): “GIGA Display Shield LVGL Guide”, Arduino, 23/10/2024, <a href="https://docs.arduino.cc/tutorials/giga-display-shield/lvgl-guide/">docs.arduino.cc/tutorials</a> (tilgået 30/11/2024)</li>
                            <li>Dannegård, Benjamin (2024): “GIGA Display Shield Draw Images Guide, Arduino, 23/10/2024, <a href="https://docs.arduino.cc/tutorials/giga-display-shield/basic-draw-and-image/">docs.arduino.cc/tutorials</a> (tilgået 30/11/2024)</li>
                            <li>Söderby, Karl (2024): “GIGA Display Shield Touch Interface”, Arduino, 23/10/2024, <a href="https://docs.arduino.cc/tutorials/giga-display-shield/basic-touch/ ">docs.arduino.cc/tutorials</a> (tilgået 30/11/2024)</li>
                            <li>Söderby, Karl (2024): “GIGA R1 WiFi Network Examples”, Arduino, 23/10/2024, <a href="https://docs.arduino.cc/tutorials/giga-r1-wifi/giga-wifi/">docs.arduino.cc/tutorials</a> (tilgået 30/11/2024)</li>
                            <li>stackoverflow.com: <a href="https://stackoverflow.com/questions/3677400/making-a-http-post-request-using-arduino">https://stackoverflow.com/questions/3677400/making-a-http-post-request-using-arduino</a> (tilgået 30/11/2024)</li>
                        </ul>
                    </div>
                </div>
            </header>
        </div>
    )
}