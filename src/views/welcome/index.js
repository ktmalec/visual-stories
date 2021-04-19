import './welcome.less'

import template from './welcome.html'
import {translate} from '../../helpers/templateHelpers';
import browser from "less/lib/less-browser/browser";

const translations = {
    pl: {
        welcomeHeader: 'To jest #myZeroWasteChallenge!',
        welcomeSubheader: 'pozostało do wdrożenia życia 80% ZERO WASTE!',
        readMore: 'Dowiedz się więcej',
        whyIDoItHeader: 'Moja misja',
        consious: 'beconscious.',
        angConsious: ' - bądź świadomy - ',
        whyIDoItParagraph1: '(ang. be conscious - bądź świadomy, beconscious = become + conscious - stań się świadomy) jest organizacją pozarządową non-profit, dzięki której pragnę zwiększać świadomść odpowiedzialnego gospodarowania surowcami naturalnymi oraz redukować ilość odpadów wytwarzanych przez gospodarstwa domowe.',
        whyIDoItParagraph2: 'Chcę, aby odsetek polskich rodzin żyjących świadomie, stosujących ideologię Zero Waste w codziennym życiu oraz dbających o lokalny ekosystem wzrósł i osiągną poziom, w którym będzie to uważane za normalne.',
        howIDoItHeader: 'Moje działania',
        howIDoItParagraph1: 'W ramach fundacji prowadzę działania ukierunkowane lokalnie oraz globalnie, oparte na trzech filarach: redukcji stresu, redukcji odpadów, zwiększania świadomości. ',
        howIDoItParagraph2: 'We współpracy z fundacją powstaje lista projektów i platform, które wynikają z obserwacji potrzeb społeczności. Ich celem jest szerzenie ideologii, ochrona lokalnego środowiska naturalnego oraz ułatwienie redukcji odpadów na poziomie konsumentów. Wszystkie produkty mają potencjał skalowania globalnego.',
        seePortfolioButton: 'Współpraca',
        implementationHeader: 'Realizacja',
        implementationSubheader: 'Dlaczego 80 zamiast 100%',
        implementationParagraph1: 'Podchodzę do problemu realistycznie i wiem, że z racji mieszkania w bloku pewnych strat nie jestem jeszcze w stanie wyeliminować w 100%. Należy do nich niestety bardzo cenna woda. To nie zmienia jednak faktu, że już teraz mogę istotnie ograniczć jej zużycie i to właśnie uwzględniam w mojej strategii.',
        implementationParagraph2: 'Natomiast straty, które teraz jeszcze są niemożliwe do wyeliminowania, pragnę rozpracować w ciągu najbliższych kilku lat.',
        myBackgroundHeader: 'Moje środowisko',
        myBackgroundSubheader: 'Współpraca',
        myBackgroundParagraph: 'Razem z mężem, trójką naszych dzieci i psem o oryginalnym imieniu Max tworzymy zwykłą polską rodzinę. Mieszkamy w małym mieszkanku, z którego posiadania jesteśmy bardzo szczęśliwi.',
        whatNextHeader: 'Co dalej',
        whatNextSubheader: 'Z wiarą spoglądam w przyszłość',
        whatNextParagraph1: 'Oprócz aktywnej pracy nad zawartością mojego portfolio, podejmuję działania w mediach społecznościowych i nawiązuję współpracę z innymi entuzjastami Zero Waste, aby szerzyć moją teorię na najniższym, a jednocześnie bardzo istotnym szczeblu - pojedynczych konsumentów. ',
        whatNextParagraph2: 'Obecnie zakładam w tym celu fundację, aby przypieczętować moje działania i nadać im charakter prawny.',
        aboutMeHeader: 'O mnie',
        aboutMeParagraph1: 'Wykorzystuję swoje doświadczenie w branży IT dla szerzenia idei Zero Waste oraz świadomego korzystania z zasobów Ziemi.',
        aboutMeParagraph2: 'Mam na uwadze, aby wszystkie prowadzone działania miały potencjał skalowalny.',

    },
    en: {
        welcomeHeader: 'This is #myWorldProgramChallenge!',
        days: 'Days',
        hours: 'Hours',
        minutes: 'Minutes',
        seconds: 'Seconds',
        welcomeSubheader: 'left until I made my family 80% ZERO WASTE!',
        readMore: 'Read More',
        whyIDoItSubheader: 'The need to change',
        whyIDoItParagraph1: 'Some time ago I started questionig the way I was used to live. I began to notice I am very environmentally burdensome and it made me sad, even depressed. So I started making plan along with small but constructive changes in my family everyday life to put limits on how much waste we produce.',
        whyIDoItParagraph2: 'I share the entire transformation process, my thoughts and doubts and guidance how to change your lifestyle even if it seems impossible at first.',
        whyIDoItHeader: 'Why I do it',
        howIDoItSubheader: 'My 3-factor strategy',
        howIDoItParagraph: 'Big changes takes some time. To be effective you need strategy and that\'s what I am creating as #myWorldProgramChallenge:',
        firstRule: 'Reduce stress ',
        firstRuleParagraph: 'Constantly decrease the stress level in your everyday life.',
        secondRule: 'Reduce waste ',
        secondRuleParagraph: 'Develop & implement a waste reduction strategy that is realistic for you.',
        thirdRule: 'Raise awareness ',
        thirdRuleParagraph: 'Constantly raise your awareness and pass it on vividly.',
        seePortfolioButton: 'See my portfolio,',
        implementationHeader: 'Implementation',
        implementationSubheader: 'Why 80 instead of 100%',
        implementationParagraph1: 'I take a realistic approach to the problem and I know that, because I live in a block of flats, there are certain losses that I am currently unable to eliminate 100%. Unfortunately, this includes very precious water. However, this does not change the fact that I can already significantly reduce its consumption what I am icluding in my strategy.',
        implementationParagraph2: 'And what seems impossible now, however, I want to work out over the next few years.',
        myBackgroundHeader: 'My background',
        myBackgroundSubheader: 'Some ordinary people in an ordinary world',
        myBackgroundParagraph: 'Together with my husband, the three kids of us and a dog originally called Max we create an ordinary Polish family. We live in a small flat which we are very happy to have.',
        whatNextHeader: 'What next',
        whatNextSubheader: 'With confidence into the future',
        whatNextParagraph1: 'In addition to actively working on the products in my portfolio, I am putting my efforts into social media and networking with other Zero Waste enthusiasts to spread my theory at the lowest, yet very important level - individual consumers.',
        whatNextParagraph2: 'I am currently setting up a foundation for this purpose to seal my activities and give them a legal character.',
        aboutMeHeader: 'About me',
        aboutMeSubheader: 'Through experience to idea',
        aboutMeParagraph1: 'I spent several valuable years of my life building experience as a Graphic Designer, UX Designer, Front-End Developer and finally Project Manager in a start-up. This built confidence in my own abilities and made me finally work on my own idea of fixing the world.',
        aboutMeParagraph2: 'If you want to keep up to date with my progress, you can follow me and my product pages on popular social media. I also invite you to join my LinkedIn network.',
    }
}

class WelcomeView {
    constructor() {
        this.render = this.render.bind(this)
    }

    render() {
        document.getElementById('page').innerHTML = translate(template, 'welcome', translations);
    }
}

const welcomeView = new WelcomeView()

export {
    welcomeView,
    translations
}
