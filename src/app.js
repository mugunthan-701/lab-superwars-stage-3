const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

const initPlayers = (players) => {
   let detailedPlayers = [];

   detailedPlayers = players.map((item,index)=>{
       if (index % 2 == 0){
           return {
               name: item,
               strength: getRandomStrength(),
               image: "images/super-"+(index+1)+".png",
               type: "hero"
           }
       }
       else{
           return {
               name: item,
               strength: getRandomStrength(),
               image: "images/super-"+(index+1)+".png",
               type: "villain"
           }
       }
   });

   return detailedPlayers;
}

const getRandomStrength = () => {
    return Math.ceil(Math.random() * 100);
}

const buildPlayers = (players, type) => {
    let fragment = '';
    var a = players.filter((player)=>{
        return player.type == type
    })
   
    var b = a.map((player,i)=>{
        console.log(i)
        let frag = `<div class="player">
        <img src="${player.image}" alt="">
        <div class="name">${player.name}</div>
        <div class="strength">${player.strength}</div>
        </div>`
        return frag
    })

    fragment = b.join(' ')


    return fragment;
}

const viewPlayers = (players) => {
    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');
}


window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}