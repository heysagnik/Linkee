import website from '../assets/website.png'
import instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.jpg'
import youtube from '../assets/youtube.jpeg'
import github from '../assets/github.png'
import telegram from '../assets/telegram.png'
import twitter from '../assets/twitter.png'
import xyz from '../assets/custom.png' 

import { ItemType } from '../ts';
import { SponsorsType } from '../ts';

const items: ItemType[] = [{
    "title": "Website",
    "subtitle": "Look at my work!",
    "image": website,
    "link": "https://sagniksahoo.codes" //your personal website or portfolio  link
},
{
    "title": "GitHub",
    "subtitle": "@heysagnik | 🏡 to all my open-source projects",
    "image": github,
    "link": "https://github.com/heysagnik" //Github Profile link
},
{
    "title": "Instagram",
    "subtitle": "@heysagnik |  Shots of my life 🙂",
    "image": instagram,
    "link": "https://instagram.com/heysagnik" //instagram profile link 
},
{
    "title": "Twitter",
    "subtitle": "@heysagnik | 😉",
    "image": twitter,
    "link": "https://twitter.com/heysagnik"// twitter profile link 
},
{
    "title": "LinkedIn",
    "subtitle": "Know more about my profession 👨‍💼",
    "image": linkedin,
    "link": "https://www.linkedin.com/in/heysagnik/" // linkedin
},
{
    "title": "YouTube",
    "subtitle": "CODER SAGNIK | Official channel of mine",
    "image": youtube,
    "link": "https://www.youtube.com/channel/UCOUa9hvd4sJWQWQRIQctbSg"//youtube channel link 
},

{
    "title": "Offer",
    "subtitle": "villioniare | I can help you to build your dream website ",
    "image": xyz,
    "link": "https://discord.com" // Dribbble profile link 
},
{
    "title": "Telegram",
    "subtitle": "@heysagnik | Chat with me instantly ",
    "image": telegram,
    "link": "https://telegram.me/heysagnik" //Telegram Pofile 
}]

const sponsors: SponsorsType[] = [{
        "link": "https://www.youtube.com/channel/UCOUa9hvd4sJWQWQRIQctbSg",
        'image': xyz
    },
    {
        'link': 'https://www.instagram.com/heysagnik/',
        'image': xyz
    }]

export { items, sponsors }


