import { Game as MainGame } from './scenes/Game'
import { AUTO, Scale,Game } from 'phaser'

const config = {
    type: AUTO,
    width: 1024,
    height: 768,
    parent: 'game-container',
    backgroundColor: 0x111111,
    pixelArt: true,
    scale: {
        mode: Scale.FIT,
        autoCenter: Scale.CENTER_BOTH
    },
    scene: [
        MainGame
    ]
}

export default new Game(config)
