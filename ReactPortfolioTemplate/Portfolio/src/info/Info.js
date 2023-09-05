import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Gabriel",
    lastName: "Anacleto",
    initials: "js", // the example uses first and last, but feel free to use three or more if you like.
    position: "Web Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'Powered by coffee'
        },
        {
            emoji: '🌎',
            text: 'Bauru-SP'
        },
        {
            emoji: "💼",
            text: "Developer front-end"
        },
        {
            emoji: "📧",
            text: "gabrielanacleto159@live.com"
        }
    ],
    socials: [
        {
            link: "https://https://www.instagram.com/anacletogah/",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/gabrielAnacletoo",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/gabriel-anacletoo/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello, my name is Gabriel. I'm a front-end developer. I studied 1 year of full stack development at Arnia.com.br, I like music, drawing and I believe that artificial intelligence will inevitably dominate all of us one day. You should hire me!",
    skills:
        {
            proficientWith: ['javascript', 'Typescript', 'MongoDB', 'react', 'git', 'github', 'bootstrap', 'html5', 'css3', 'React Hooks', 'Styled components'],
            exposedTo: ['Java', 'C#']
        }
    ,
    hobbies: [
        {
            label: 'Drawn',
            emoji: '✏️'
        },
        {
            label: 'Music',
            emoji: '🎵'
        },
        {
            label: 'Movies',
            emoji: '🎥'
        },
        {
            label: 'Cooking',
            emoji: '🌶'
        },
        {
            label: 'History',
            emoji: '📚'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Wexer",
            live: "https://projetofinalgabriel.vercel.app/index.html", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/gabrielAnacletoo/ProjetoFinalModulo1", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "W3ERP",
            live: "https://projetow3erp.vercel.app/",
            source: "https://github.com/gabrielAnacletoo/projetow3erp",
            image: mock2
        },
        // {
        //     title: "Project 3",
        //     live: "https://paytonpierce.dev",
        //     source: "https://github.com/paytonjewell",
        //     image: mock3
        // },
        // {
        //     title: "Project 4",
        //     live: "https://paytonpierce.dev",
        //     source: "https://github.com/paytonjewell",
        //     image: mock4
        // },
        // {
        //     title: "Project 5",
        //     live: "https://paytonpierce.dev",
        //     source: "https://github.com/paytonjewell",
        //     image: mock5
        // }
    ]
}