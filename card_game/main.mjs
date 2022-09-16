import {Application } from "https://cdnjs.cloudflare.com/ajax/libs/pixi.js/6.5.2/browser/pixi.mjs";
import { start as gameStart} from "./js/game.mjs";
import { loadAssets } from "./js/loader.mjs";

export function createGame(div) {
    const game = new Application({
        width:900,
        height:920,
        // backgroundColor:0x123456,
        //transparency: true,
        transparent:true,
        resizeTo: div
    });
    
    console.log('game', game);
    div.appendChild(game.view);
    
    return game;
}

const game = createGame(document.getElementById('game'));
loadAssets(game,[
    { name: "back", url: "./assets/new12.jpg" },
    { name: "front", url: "./assets/smilies.jpg" },
  ], () => {
    console.log('starting game');
    gameStart(game);
  });