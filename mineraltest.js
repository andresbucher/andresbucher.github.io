function test() {
    let sum = 0;
    let answered = true;
    for( let i = 0; i < 10; i++) {
        let answer = 0;
        for( let j = 1; j < 5; j++){
            let label = document.getElementById("label" + i + "" + j);
            if(label.checked) {
                answer = parseInt(label.value);
            }
        }
        if( answer === 0){
            alert("Die Frage " + (i+1) + " wurde nicht ausgefüllt.");
            answered = false;
        } 
        else{
            sum += answer;
        }
    }
    if(answered){
        if(sum < 15){
            document.getElementById("AuswertungText").innerHTML = "Du hast einen Score von: " + sum + " bekommen, somit bist du ein Amethyst. Du bist ein impulsiver Typ, der ehrgeizig, energiegeladen und kämpferisch ist. Deshalb brauchst du einen Stein, der ihm innere Ruhe und Ausgeglichenheit schenkt. Mit Hilfe des Amethysts kannst du optimal deine starke Persönlichkeit entfalten und dennoch von einer inneren Harmonie, Zufriedenheit sowie Verständnis profitieren. Zudem soll der Stein von Blockaden und äußeren Einflüssen befreien.";
        }
        else if(sum < 18){
            document.getElementById("AuswertungText").innerHTML ="Du hast einen Score von: " + sum + " bekommen, somit bist du ein Turmalin! Du bist stur und willensstark, jedoch verbirgt sich unter der harten Schale meist ein weicher Kern. Du bist ein sinnliche Genießer und erfreust dich besonders an den schönen Dingen des Lebens. Unterstützt werden die positiven Seiten von dir mit Hilfe des Turmalins. Der Heilstein gilt nicht nur als Schutzstein, sondern ist auch als Stein der Lebensfreude und des Optimismus bekannt. Er soll Ängste und Depressionen lindern können, begünstigt kreative Ideen und sorgt für mehr Entscheidungsfreude sowie Flexibilität.";
        }
        else if(sum < 22){
            document.getElementById("AuswertungText").innerHTML ="Du hast einen Score von: " + sum + " bekommen, somit bist du ein Pyrit! Kaum ein anderer Mensch ist so anpassungsfähig und flexibel wie du. Du bist intellektuell, kommunikativ und findest immer einen Weg, mit anderen Menschen auf eine Ebene zu kommen. Gefördert werden die guten Seiten durch die Wirkung des Heilsteins Pyrit, der zugleich auch für innere Ruhe und Festigkeit sorgt. Außerdem bringt der Stein dich dazu, dich selbst zu reflektieren, über Schwächen und Kehrseiten nachzudenken und hilft, Blockaden sowie Ängste, Stress und Nervosität zu lösen.";
        }
        else if(sum < 25){
            document.getElementById("AuswertungText").innerHTML ="Du hast einen Score von: " + sum + " bekommen, somit bist du ein Olivin! Du wirkst nach außen hin meist ruhig und gelassen. Ausserdem bist du empathisch und bietest durch deine sanfte Art eine angenehme Gesellschaft. Jedoch wirst du auch stets von einem sensiblen und empfindsamen Innenleben begleitet, weshalb du einen Heilstein brauchst, der dich bei der Verarbeitung deiner Emotionen unterstützt. Olivin gilt unter den Edelsteinen als Schutzstein und soll vor schlechten Gedanken, negativen Energien und Unwahrheiten warnen. Er wird deinem Typ zugeordnet, um Anspannungen, Blockaden, Depressionen oder Ängste zu lösen und beschert Hoffnung sowie Ausgeglichenheit.";
        }
        else if(sum < 28){
            document.getElementById("AuswertungText").innerHTML ="Du hast einen Score von: " + sum + " bekommen, somit bist du ein Rhodonit! Du bist einerseits großzügig, warmherzig und kreativ – du möchtest andererseits aber auch immer das Sagen haben. Grund dafür ist dein stark ausgeprägtes Selbstbewusstsein sowie der Glaube an die eigene Fähigkeit. Daher brauchst du einen Edelstein, der das Selbstvertrauen weiter stärkt und es zugleich in seiner Kreativität und Großzügigkeit unterstützt. Rhodonit passt hervorragend zu dir, denn der Edelstein gibt dir nicht nur Mut und Selbstvertrauen, sondern hilft auch gegen Stress und Kummer. Zudem schenkt der goldgelbe Stein Lebensfreude, Klarheit und Entschlossenheit, weckt die Neugierde und spendet Kraft, um Erfahrungen oder Enttäuschungen besser verarbeiten zu können.";
        }
        else if(sum < 30){
            document.getElementById("AuswertungText").innerHTML ="Du hast einen Score von: " + sum + " bekommen, somit bist du ein Malachit! Du bist vor allem eins: pflichtbewusst und strukturiert. Du neigst zum Perfektionismus und leidest deshalb oftmals unter Stress. Für dieses Zeichen ist daher ein Stein nötig, der zu innerer Ruhe und Entspannung verhilft. Durch Malachit werden sowohl Herzlichkeit und Optimismus geschenkt als auch die Lernfähigkeit sowie die Konzentration gesteigert. Der Stein kann Stress reduzieren und ist angeblich auch dazu in der Lage, Beklemmungen, Ängste oder Alpträume zu lösen.";
        }
        else if(sum < 33){
            document.getElementById("AuswertungText").innerHTML ="Du hast einen Score von: " + sum + " bekommen, somit bist du ein Azurit! Das Wichtigste für dich ist Harmonie – aber auch an Sensibilität und einem ausgeprägten Sinn für Gerechtigkeit fehlt es dir nicht. Du setzt dich gerne für andere ein und sind stets um deren Wohl bemüht. Azurit ist der perfekte Edelstein für dich, denn er stärkt den Wunsch nach einem harmonischen Leben und sorgt für einen ausgeprägten Gerechtigkeitssinn. Zudem verbreitet der Stein innere Balance und schenkt Lebenslust, Freude und Aufgeschlossenheit.";
        }
        else if(sum < 36){
            document.getElementById("AuswertungText").innerHTML ="Du hast einen Score von: " + sum + " bekommen, somit bist du ein Korund! Du geltest als kämpferisch und unnachgiebig. Du nimmst niemals den einfachen Weg, sondern stellen sich dem Hindernis und bist stolz, wenn du ein Problem löst. Jedoch laufst du durch diese Einstellung auch Gefahr, den ein oder anderen Nachteil hinnehmen zu müssen. Der Edelstein Korund soll dich schützen, da er vor kommenden Gefahren warnt. Zudem stärkt er das Selbstbewusstsein und das Durchsetzungsvermögen, verhilft zu mehr Erfolg und verbessert die Kommunikationsfähigkeit.";
        }
        else if(sum < 40){
            document.getElementById("AuswertungText").innerHTML ="Du hast einen Score von: " + sum + " bekommen, somit bist du ein Fluorit! Du bist nicht nur abenteuerlustig, spontan und verträumt, sondern auch grenzenlose Optimisten. In zwischenmenschlichen Situationen bist du tolerant und verständnisvoll, allerdings erwartest du das gleiche Verhalten auch von ihrem Gegenüber. Damit du zur inneren Ruhe findest, brauchst du die Kraft des Heilsteins Fluorit. Er stärkt neben einer innerlichen Ausgeglichenheit auch das Selbstbewusstsein und steigert die Aufmerksamkeit. Außerdem sagt man, dass der Edelstein vor Schlafstörungen, Alpträumen und Melancholie bewahren kann.";
        }
        else if(sum < 44){
            document.getElementById("AuswertungText").innerHTML ="Du hast einen Score von: " + sum + " bekommen, somit bist du ein Tigerauge! Du hast die Eigenschaft geradlinig, sachlich und praktisch veranlagt zu sein. Du brauchst eine gewisse Sicherheit und liebst es, immer alles unter Kontrolle zu haben. Das Tigerauge ist der ideale Stein für dieses Sternzeichen. Es hat eine beruhigende und positive Wirkung, fördert das Durchhaltevermögen sowie die Konzentrationsfähigkeit und soll dir Mut und Kraft schenken.";
        }
        else if(sum < 48){
            document.getElementById("AuswertungText").innerHTML ="Du hast einen Score von: " + sum + " bekommen, somit bist du ein Beryll! Menschen mit wie du gelten nicht nur als kommunikationsstark und unabhängig, sondern sind auch wahre Individualisten. Sie schätzen alles, was außergewöhnlich ist, und haben ein Gespür für kreative und innovative Ideen. Damit du deine Projekte bis zum Schluss durchführen kannst, schenkt dir der Beryll die nötige Kraft sowie ein ausreichendes Durchhaltevermögen. Weitere Wirkungen des hellblauen Heilsteins sind Besonnenheit, Ausdauer und Widerstandskraft.";
        }
        else if(sum < 52){
            document.getElementById("AuswertungText").innerHTML ="Du hast einen Score von: " + sum + " bekommen, somit bist du ein Topas! Menschen wie du besitzen ein großes Einfühlvermögen, umgeben sich gerne mit Freunden, gelten als sensible Seelen und sind meist auch noch verträumt, gutmütig und verletzlich. Der Topas ist der perfekte Edelstein für dich, denn er gilt als Heilstein für das Herz. Romantik und Sensibilität werden in der Kraft des Steins vereint und helfen, damit Beziehungsängste, Unverständnis und negative Gefühle verschwinden. Zudem soll der rosafarbene Edelstein seinem Träger mehr Aufgeschlossenheit und Vertrauen verleihen.";
        }
        else if(sum < 100){
            document.getElementById("AuswertungText").innerHTML ="Sie haben gecheatet, Resultat somit ungültig";
        }
    }
    else{
    }
}