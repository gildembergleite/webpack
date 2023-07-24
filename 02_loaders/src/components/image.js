import World from '../../public/assets/world.png'

export default class Image {
  insertImage() {
    const img = document.createElement('img')
    img.src = World
    img.width = 320

    document.body.appendChild(img)
  }
}
