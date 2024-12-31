import { Scene } from 'phaser'

export class Game extends Scene {
    constructor() {
        super('Game')
    }

    preload() {
        this.load.setPath('assets')
        this.load.image('tileset', 'terrain_atlas32.png')
        this.load.tilemapTiledJSON('tilemap', 'field/field.json')
    }

    create() {
        const map = this.make.tilemap({ key: 'tilemap' })
        const tileset = map.addTilesetImage('tiles', 'tileset')
        map.createLayer('background', tileset)
        map.createLayer('ground', tileset)

        this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels)
        this.cameras.main.setZoom(3)

        const cursors = this.input.keyboard.createCursorKeys()
        const controlConfig = {
            camera: this.cameras.main,
            left: cursors.left,
            right: cursors.right,
            up: cursors.up,
            down: cursors.down,
            speed: 0.5
        }

        this.controls = new Phaser.Cameras.Controls.FixedKeyControl(controlConfig)
    }

    update(time, delta) {
        this.controls.update(delta);
    }
}
