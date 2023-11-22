export const projects = [
  {
    id: 1,
    title: "Entities",
    imageUrl: process.env.PUBLIC_URL + "/images/entities.png",
    description:
      "A random AI generator for creating any kind of narrative Entity with emphasis on game usage.",
    link: "/entities",
    software:
      "Javascript React Frontend, Python Backend, GPT-3.5, GPT-4, Dalle-3, OpenAI API, Supabase, Fly.io",
    year: "2023",
    inspiration:
      "I have been building some version of this project for a long time. I have always been interested in random generation, during Covid, I spent a lot of time making lists upon lists of data. Then along came AI, and I could ask for lists instead of make them. This project is the culmination of TurboGenesis and another worldbuilding AI that turned into Entities.",
  },
  {
    id: 2,
    title: "TurboGenesis",
    imageUrl: process.env.PUBLIC_URL + "/images/tg.png",
    description:
      "An early organization and random generation suite. Precursor to Entities. and also the successor of an Excel macro version of this I created to play a lost in space type of homebrew TTRPG with my friends. The Excel version was hard to navigate, and hard to code, hard to not break with a stray click or note. So during the Covid lockdown I decided to make a better version, and I did, it's not listed here. But it was a good start. I then decided to make a web version, and that is what you see here. I manually or with the help of chatgpt generated a lot of list content, and then I made a way to organize it, and then I made a way to generate it. TurboGenesis is currently hosted on the web through aws, but there isn't any authentication, or data protection, so I can't share it. I will try to share more screenshots of it in the future.",
    inspiration:
      "This projects initial inspiration was the thought, how can I generate a whole bunch of stuff that makes sense, and then organize it in a way that makes sense. So I as a GM can use it to run a game, take notes for a game, and then generate more stuff for the game. I also wanted to be able to share it with my players, so they could see the world, and the things in it. I also have been playing TTRPGs as the GM for a long time, and I wanted to make a tool that would let me be along for the ride, a mystery even to the GM running the game.",
    software:
      "Javascript React Frontend, Javascript Express Backend, midjourney Art Generation, OpenAI API, Postgresql, AWS",
    year: "2022-2023",
    link: "/TurboGenesis",
  },
  {
    id: 3,
    title: "VR Superhero simulator",
    imageUrl: process.env.PUBLIC_URL + "/images/superpowerVR.png",
    description:
      "A sandbox for showing off my VR system. You pick some powers and go to town. This was an ambitious attempt to give a user in VR the feel like they were a superhero, and I wanted to make sure they got to pick their powers. Players had options to shoot from head, chest, and hands. You could pick from beams, projectiles, blasts, and other options. Of course you could pick the color of your powers, and the size, speed, etc. My favorite power utilized the Vive Pro's controller circle tracking pad. One axis was either beam or cone, and the other axis was distance and power, So you could have a laser beam, or a cone, a close blast, or a big weak blast. It really felt cool blasting boxes and enemies around the space. Unfortunately, I no longer have a Vive, and I haven't attempted to get this working on my new VR headset.",
    inspiration:
      "I think this was peak Marvel Cinematic Universe, I think pre infinity war. I was also big into VR, and I wanted to make a game that felt like you were a superhero. It was one of my first in depth programs using all I'd learned in Unity and Vive development.",
    software: "Unity, C#, SteamVR, Vive Pro",
    year: "2018",
    link: "Not Available",
  },
  {
    id: 4,
    title: "The Shrubber",
    imageUrl: process.env.PUBLIC_URL + "/images/shrubber.png",
    description:
      "The shrubber stemmed from my interest in randomly generating things. It turned into a tree generation project. The concept was, that this tree would keep growing and branching, and using VR interaction, you could trim and shape the tree.",
    inspiration:
      "I've always loved nature, but this project didn't really start from that. I think initially I was just playing with objects in unity, and trying to play around with objects growing and shrinking in VR. Kind of a honey I shrunk the kids vibe. The thought of growing a little cylindar and spawning similar stems randomly around it, in a big chaotic mess, just to see if it looked like a real tree. I was surprised at how close I could get by refining some of the parameters like angle of growth, speed of growth, and how many stems to spawn. In the end I thought, if this were in VR and I had a huge shrub trimmer, I could trim this thing into a nice looking tree and affect it's growth. I never got that far, but I did get a nice looking tree.",
    software: "Unity, C#, SteamVR, Vive Pro",
    year: "2018",
    link: "Not Available",
  },
  {
    id: 5,
    title: "My RPG Tabletop",
    imageUrl: process.env.PUBLIC_URL + "/images/MyRPGTabletop.jpg",
    description:
      "A simple one shot project born from the exploration phase of Unity programming. I was doing tutorials on some rpg mechanics, and rigging and built a simple scenario for our group to play in for the campaign we were playing at the time. The players were traveling with a goat-centaur with like a dwarf top half, and I think the bad guys were some kind of elf/wolf hybrid similar to a centaur. Not my best work, but it gave me a chance to work on some different unity mechanics.",
    inspiration:
      "I had played in a lot of other tabletop digital platforms, but never really thought any had all the features I wanted. I'd never achieve the graphics of a polished tabletop engine, but I really just wanted some specific features, and to be able to quickly customize features, which really meant building my own.",
    software: "Unity, C#, Projector, Multiple object tracking, wayfinding",
    year: "2017",
    link: "Not available",
  },
  {
    id: 6,
    title: "Telekinesis VR",
    imageUrl: process.env.PUBLIC_URL + "/images/Telekinesis.png",
    description:
      "A simple VR project to utilize ray tracing, and physics. Included controller and Vision supported Telekinesis. with full movement and rotation. I can't remember if this or the full VR Superhero simulator came first, but this one was more about making it feel like you were using telekinesis. I had a lot of fun designing the controls for this one. You'd grip to grab an item based on where your palm was facing. You could then move your hand to move the object, and rotate your hand to rotate the object. I couldn't figure out a great way to feel like you could really chuck an object with telekinesis, and I didn't want to just have a button to throw it, so I made it so you could push the object away from you, and then pull it back. It was a lot of fun to play with.",
    inspiration:
      "Don't remember what inspired me to build this game. But probably the most prolific telekinesis user from my childhood, was Jean Grey as the phoenix. I remember that was probably the first time I saw a SUPER superhero, and I was blown away. Who doesn't want telekinesis?",
    software: "Unity, C#, SteamVR, Vive Pro",
    year: "2018",
    link: "Not Available",
  },
  {
    id: 7,
    title: "Sphere Cube Art project",
    imageUrl: process.env.PUBLIC_URL + "/images/sphere-cube.png",
    description:
      "A purely play project with an array of sphere's held in a cube initially allowing the user to push and pull rows of spheres to change its shape. You could play by clicking the spheres to change them from red to white, or you could set it to automatically randomize. Then anytime you had 3 or more red sphere's in a row it would clear them. There was not really a purpose, it was more of a play project. I was playing with the idea of a 3d tetris, and I wanted to see if I could make a 3d tetris that was more like a sphere.",
    inspiration: "Tetris, 3d Tetris",
    software: "Unity, C#, SteamVR, Vive Pro",
    year: "2017-2018",

    link: "Not Available",
  },
  {
    id: 8,
    title: "Corgi Snake",
    imageUrl: process.env.PUBLIC_URL + "/images/corgi-snake.png",
    description:
      "A classic reimagined. Corgi Snake. I made this game playing around with Unity, at the time we had a corgi, named 'Little Sister', this game was inspired by her splooting. We always joked she could steal and fit a hotdog down her long body. So I made a game where you play as a corgi, and you have to steal hotdogs and they make your body longer. It was a fun project, and I learned a lot about Unity and C# programming. I also learned a lot about game design, and how to make a game fun. I think I could have done a better job with the controls, but I was happy with the game overall.",
    inspiration: "Our Corgi, Little Sister",
    software: "Unity, C#",
    year: "2017",
    link: "Not available",
  },
  {
    id: 9,
    title: "Toy Dealer",
    imageUrl: process.env.PUBLIC_URL + "/images/toy-dealer.png",
    description:
      "One of my first projects, I needed a final project for a CS class in middle school. I made a game where you buy and sell toys. For the most part it was a copy of the popular TI-86 game Drug Wars. It was also 'Wholesome' so teachers had less to say about it's content. Things would happen like, a load of yo-yo's fall off the back of your truck. Or, Elmo's in high demand in LA, prices are through the roof. I had a lot of fun making the game. As a first project, I think it was a pretty big success.",
    inspiration: "Drug Wars, TI-86",
    software: "True Basic (I think)",
    year: "1998",
    link: "/toy-dealer",
  },
];
