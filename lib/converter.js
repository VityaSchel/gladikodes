import { createCanvas, loadImage } from 'canvas'
import statuses from './statuses'

const files = [
  "100.png",
  "1009.png",
  "101.png",
  "102.png",
  "200.png",
  "201.png",
  "202.png",
  "300.png",
  "301.png",
  "302.png",
  "304.png",
  "307.png",
  "308.png",
  "400.png",
  "401.png",
  "402.png",
  "403.png",
  "404.png",
  "405.png",
  "409.png",
  "411.png",
  "413.png",
  "418.png",
  "420.png",
  "425.png",
  "426.png",
  "451.png",
  "494.png",
  "500.png",
  "523.png",
]

for(let file of files) {
  const image = await loadImage(`../public/uploads/${file}.png`)
  console.log(image)
}
