
// import netflix from '../../assets/projects/netflix.png';
// import marioGame from '../../assets/projects/mario.png';
// import soundGarden from '../../assets/projects/soundgarden.png';
// import laVie from '../../assets/projects/lavie.png';
// import spotify from '../../assets/projects/spotify.png';
// import parrot from '../../assets/projects/parrot.png';
// import skatepark from '../../assets/projects/skatepark.png';
// import gz from '../../assets/projects/gzlogin.png';
// import pokedex from '../../assets/projects/pokedex.png';
// import vidaEmDia from '../../assets/projects/vidaemdia.png';

const projects = [
    {
        id: 7,
        category: 'Bootstrap',
        image: 'skatepark',
        link1: 'https://github.com/GabrielZolk/skatepark-bootstrap-libs',
        link2: 'https://gabrielzolk.github.io/skatepark-bootstrap-libs/',
        title: 'Skatepark',
        text: 'Project7'
    },
    {
        id: 9,
        category: 'React',
        image: 'pokedex',
        link1: 'https://github.com/GabrielZolk/pokedex',
        link2: 'https://pokedex-sk.vercel.app/',
        title: 'Pokemon React App',
        text: 'Project9'
    },
    {
        id: 10,
        category: 'React',
        image: 'vidaemdia',
        link1: 'https://github.com/GabrielZolk/Prontuario-Digital--front-',
        link2: 'https://vida-em-dia.vercel.app/',
        title: 'Vida em dia',
        text: 'Project10'
    },
    {
        id: 12,
        category: 'Angular',
        image: 'nubankangular',
        link1: 'https://github.com/GabrielZolk/nubank-angular',
        link2: 'https://nubank-angular.vercel.app/',
        title: 'Nubank WebApp Version',
        text: 'Project12'
    },
    {
        id: 13,
        category: '',
        image: 'nuuberwallet',
        link1: 'https://github.com/GabrielZolk/uber-clone-1-0',
        link2: '',
        title: 'Uber / Nubank App Mobile',
        text: 'Project13'
    },
    {
        id: 15,
        category: 'Javascript',
        image: 'piano',
        link1: 'https://github.com/GabrielZolk/enchanted-piano',
        link2: 'https://enchanted-piano.vercel.app/',
        title: 'Pian',
        text: 'Project15'
    },
    {
        id: 17,
        category: 'Javascript',
        image: 'riotclient',
        link1: 'https://github.com/GabrielZolk/riot-client',
        link2: 'https://gabrielzolk.github.io/riot-client/',
        title: 'League of Legends Client',
        text: 'Project17'
    },
    {
        id: 18,
        category: 'Javascript',
        image: 'tesla',
        link1: 'https://github.com/GabrielZolk/tesla-clone',
        link2: 'https://tesla-clone-ten-sigma.vercel.app/',
        title: 'Custom Tesla Homepage',
        text: 'Project18'
    },
    {
        id: 23,
        category: 'TailwindCSS',
        image: 'gpttail',
        link1: 'https://github.com/GabrielZolk/chatgpt3-next',
        link2: 'https://chatgpt3-next.vercel.app/',
        title: 'ChatGPT Clone Interface',
        text: 'Project23'
    },
    {
        id: 31,
        category: 'ReactJS',
        image: 'port3',
        link1: '',
        link2: '',
        title: 'Portfolio 3.0',
        text: 'Project31'
    },
    {
        id: 32,
        category: 'ReactJS',
        image: 'port2',
        link1: 'https://github.com/GabrielZolk/new-portfolio',
        link2: 'https://gabrielzolk.github.io/new-portfolio/',
        title: 'Portfolio 2.0',
        text: 'Project32'
    },
    {
        id: 33,
        category: 'ReactJS',
        image: 'port1',
        link1: 'https://github.com/GabrielZolk/portfolio-1',
        link2: 'https://portfolio-gabrieleagle.vercel.app/',
        title: 'Portfolio 1.0',
        text: 'Project33'
    },
    {
        id: 35,
        category: 'Vanilla',
        image: 'spaceport',
        link1: 'https://github.com/GabrielZolk/space-portfolio3d',
        link2: 'https://space-portfolio3d.vercel.app/',
        title: 'Portfolio 4.0 3D',
        text: 'Project35'
    },
    {
        id: 36,
        category: 'ReactJS',
        image: 'shero',
        link1: 'https://github.com/GabrielZolk/superhero-deck',
        link2: 'https://superhero-deck.vercel.app/',
        title: 'SuperHero Deck',
        text: 'Project36'
    },
    {
        id: 37,
        category: 'ReactJS',
        image: 'scrjs',
        link1: 'https://github.com/GabrielZolk/shopping-cart',
        link2: 'https://shopping-cart-xi-ebon.vercel.app/',
        title: 'Shopping Cart',
        text: 'Project37'
    },
    {
        id: 38,
        category: 'ReactJS',
        image: 'pigz',
        link1: 'https://github.com/GabrielZolk/pigz-store',
        link2: 'https://pigz-store.vercel.app/',
        title: 'OrangeLabs Store Page',
        text: 'Project38'
    },
    {
        id: 40,
        category: 'Angular',
        image: 'weatherag',
        link1: 'https://github.com/GabrielZolk/weather-angular/tree/main',
        link2: 'https://weather-angular-eta.vercel.app/',
        title: 'WeatherApp',
        text: 'Project40'
    },
        {
        id: 41,
        category: 'ReactJS',
        image: 'blockchainws',
        link1: 'https://github.com/GabrielZolk/blockchainws',
        link2: 'https://blockchainws.vercel.app/',
        title: 'Blockchain Website',
        text: 'Project41'
    },
    {
        id: 42,
        category: 'ReactJS',
        image: 'dreamcloud',
        link1: 'https://github.com/GabrielZolk/dreamcloud',
        link2: 'https://dreamcloud.vercel.app/',
        title: 'DreamCloud Host',
        text: 'Project42'
    },
    {
        id: 43,
        category: 'ReactJS',
        image: 'sweden',
        link1: 'https://github.com/GabrielZolk/sweden',
        link2: 'https://sweden-nine.vercel.app/',
        title: 'Sweden App',
        text: 'Project43'
    },
    {
        id: 44,
        category: 'ReactJS',
        image: 'apollo',
        link1: 'https://github.com/GabrielZolk/apollo',
        link2: 'https://apollo-murex.vercel.app/',
        title: 'Apollo NFT',
        text: 'Project44'
    },
    {
        id: 45,
        category: 'ReactJS',
        image: 'webtech',
        link1: 'https://github.com/GabrielZolk/webtech',
        link2: 'https://webtech-omega.vercel.app/',
        title: 'Webtech Website',
        text: 'Project45'
    },
    {
        id: 46,
        category: 'ReactJS',
        image: 'autoflux',
        link1: 'https://github.com/GabrielZolk/autoflux',
        link2: 'https://autoflux.vercel.app/',
        title: 'Autoflux Car',
        text: 'Project46'
    },
    {
        id: 47,
        category: 'ReactJS',
        image: 'baianotv',
        link1: 'https://github.com/GabrielZolk/idltv',
        link2: 'https://idltv.vercel.app/',
        title: 'Baiano TV',
        text: 'Project47'
    },
    {
        id: 48,
        category: 'Angular',
        image: 'ivip',
        link1: 'https://github.com/GabrielZolk/taskmanager-vip-frontend',
        link2: 'https://taskmanager-vip.vercel.app/',
        title: 'TaskManager Fullstack',
        text: 'Project48'
    },
    {
        id: 49,
        category: 'Node-Express',
        image: 'localcrud',
        link1: 'https://github.com/GabrielZolk/jsondb-products-api',
        link2: 'https://github.com/GabrielZolk/jsondb-products-api',
        title: 'Api Json Database',
        text: 'Project49'
    },
    {
        id: 50,
        category: 'Angular',
        image: 'hpdeck',
        link1: 'https://github.com/GabrielZolk/harrypotter-deck',
        link2: 'https://harrypotter-deck.vercel.app/',
        title: 'HarryPotter Deck',
        text: 'Project50'
    },
    {
        id: 52,
        category: 'Javascript',
        image: 'codeeditor',
        link1: 'https://github.com/GabrielZolk/fastjs-codeEditor',
        link2: 'https://gabrielzolk.github.io/fastjs-codeEditor/',
        title: 'Code Editor',
        text: 'Project52'
    },
    {
        id: 53,
        category: 'Javascript',
        image: 'paint',
        link1: 'https://github.com/GabrielZolk/paint-web',
        link2: 'https://gabrielzolk.github.io/paint-web/',
        title: 'Paint Web',
        text: 'Project53'
    },
    {
        id: 54,
        category: 'Node-Express',
        image: 'jarvisgpt',
        link1: 'https://github.com/GabrielZolk/jarvisgpt/tree/main/src',
        link2: 'https://github.com/GabrielZolk/jarvisgpt/tree/main/src',
        title: 'Jarvis GPT 1.0',
        text: 'Project54'
    },
    {
        id: 55,
        category: 'Node-Express',
        image: 'wppbot',
        link1: 'https://github.com/GabrielZolk/attendant-whatsapp-bot',
        link2: 'https://github.com/GabrielZolk/attendant-whatsapp-bot',
        title: 'Whatsapp bot',
        text: 'Project55'
    },
    {
        id: 56,
        category: 'Node-Express',
        image: 'telbot',
        link1: 'https://github.com/GabrielZolk/weather-telegram-bot',
        link2: 'https://github.com/GabrielZolk/weather-telegram-bot',
        title: 'Telegram bot',
        text: 'Project56'
    },
    {
        id: 57,
        category: 'ReactJS',
        image: 'freelaport',
        link1: 'https://github.com/GabrielZolk/freela-portfolio',
        link2: 'https://gabrielzolk.github.io/freela-portfolio/',
        title: 'Freela Portfolio',
        text: 'Project57'
    },
]

export default projects;