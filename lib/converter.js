import canvas from 'canvas'
const { createCanvas, loadImage } = canvas
import statuses from './statuses.js'
import sizeOf from 'image-size'
import terminalImage from 'term-img'
import fs from 'fs'

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
  const path = `../public/uploads/${file}`
  const image = await loadImage(path)

  const { width, height } = await sizeOf(path)
  const imageWidth = Math.min(512, width)
  const imageHeight = Math.round(height*imageWidth/width)

  const canvasWidth = imageWidth*1.2
  const canvasHeight = imageHeight*1.3
  const canvas = createCanvas(canvasWidth, canvasHeight)
  const ctx = canvas.getContext('2d')

  const centerX = canvasWidth/2
  const centerY = canvasHeight/2
  const imageX = centerX-imageWidth/2
  const imageY = centerY-imageHeight/2-imageHeight*0.05

  ctx.fillStyle = '#000'
  ctx.beginPath()
  ctx.rect(0, 0, canvasWidth, canvasHeight)
  ctx.fill()

  ctx.beginPath()
  ctx.strokeStyle = '#fff'
  ctx.lineWidth = 2
  const offset = 4
  ctx.rect(imageX-offset, imageY-offset, imageWidth+2*offset, imageHeight+2*offset)
  ctx.stroke()

  ctx.drawImage(image, imageX, imageY, imageWidth, imageHeight)
  const imageEndY = imageY+imageHeight
  const textVerticalCenter = imageEndY+(canvasHeight-imageEndY)/2

  ctx.fillStyle = '#fff'
  ctx.textAlign = 'center'
  ctx.font = '36px Arial bold'
  const code = file.split('.png')[0]
  ctx.fillText(code, canvasWidth/2, textVerticalCenter)
  ctx.font = '14px Arial'
  ctx.fillText(statuses[code], canvasWidth/2, textVerticalCenter+30)

  const result = canvas.toBuffer()
  console.log(terminalImage(result))
  fs.writeFile(`../public/images/${file}`, result)
}
