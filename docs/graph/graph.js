import { Point } from './point.js'
import { Rectangle } from './rectangle.js'

let INTEREST_HIGH = 'High'
let INTEREST_MEDIUM = 'Medium'
let INTEREST_LOW = 'Low'

let humanReadableData = [
  {
    label: 'JS, HTML, CSS',
    range: `2013-2023`,
    interest: INTEREST_HIGH,
    color: 'yellow',
  },
  {
    label: 'MySQL',
    range: '2013-2020',
    interest: INTEREST_MEDIUM,
    color: '#5d4c36',
  },
  {
    label: 'PHP',
    range: '2013-2020',
    interest: INTEREST_LOW,
    color: 'white',
  },
  {
    label: 'NodeJS',
    range: `2015-2023`,
    interest: INTEREST_HIGH,
    color: 'lightgreen',
  },
  {
    label: 'Angular',
    range: `2017-2020`,
    interest: INTEREST_LOW,
    color: 'pink',
  },
  {
    label: 'React',
    range: `2020-2023`,
    interest: INTEREST_HIGH,
    color: 'cyan',
  },

  {
    label: 'Ruby on Rails',
    range: '2022-2023',
    interest: INTEREST_MEDIUM,
    color: 'red',
  },
]

function convertToGrid(experienceData) {
  // Determine lowest X value (grid will treat it as 0)
  let minYear = 3000
  let maxYear = 0
  for (const lineElement of experienceData) {
    const range = lineElement.range.split('-')
    minYear = Math.min(minYear, Number.parseInt(range[0]))
    maxYear = Math.max(maxYear, Number.parseInt(range[1]))
  }

  let index = 0
  const gridMapping = {}
  for (let i = minYear; i <= maxYear; i++) {
    gridMapping[i] = index
    index++
  }

  const lines = []
  for (const lineElement of experienceData) {
    const range = lineElement.range.split('-')
    const lowYear = Number.parseInt(range[0])
    const highYear = Number.parseInt(range[1])
    const experienceIncrease =
      Number.parseInt(highYear) - Number.parseInt(lowYear)

    lines.push({
      color: lineElement.color,
      label: lineElement.label,
      points: [
        new Point(gridMapping[lowYear], 0),
        new Point(gridMapping[highYear], experienceIncrease),
      ],
      interest: lineElement.interest,
    })
  }

  return { lines, minYear, maxYear }
}

let { lines: data, minYear, maxYear } = convertToGrid(humanReadableData)

function resizeCanvas(canvas) {
  const parentStyles = getComputedStyle(canvas.parentElement)

  canvas.width =
    canvas.parentElement.clientWidth -
    parseFloat(parentStyles.paddingLeft) -
    parseFloat(parentStyles.paddingRight)
}

/**
 * Assumes canvas size is properly set
 */
function drawGraph(canvas) {
  /* Determine sections of the graph, helpful for drawing calculations
    - Grid Area
    - Label gutters
    - Key/Legend area
    */
  const gutterSize = 24
  const gridRectangle = new Rectangle(
    gutterSize,
    canvas.width,
    0,
    canvas.height - gutterSize
  )

  let maxX = 0
  let maxY = 0
  for (const lineElement of data) {
    for (const linePoint of lineElement.points) {
      maxX = Math.max(maxX, linePoint.x)
      maxY = Math.max(maxY, linePoint.y)
    }
  }
  // Get canvas scale factor
  const xScale = Math.floor(gridRectangle.width / maxX)
  const yScale = Math.floor(gridRectangle.height / maxY)

  // BEGIN DRAWING =====================================================
  const ctx = canvas.getContext('2d')

  // Draw lines
  const lineWidths = {
    [INTEREST_HIGH]: 12,
    [INTEREST_MEDIUM]: 8,
    [INTEREST_LOW]: 4,
  }

  for (const lineElement of data) {
    ctx.beginPath()
    ctx.strokeStyle = lineElement.color
    ctx.lineWidth = lineWidths[lineElement.interest]

    // Use the given points to draw each line
    let startingPoint = true
    for (const point of lineElement.points) {
      if (startingPoint) {
        ctx.moveTo(
          gridRectangle.left + point.x * xScale,
          gridRectangle.bottom - point.y * yScale
        )
        startingPoint = false
      } else {
        ctx.lineTo(
          gridRectangle.left + point.x * xScale,
          gridRectangle.bottom - point.y * yScale
        )
      }
    }
    ctx.stroke()
  }

  // Draw The X and Y axis lines
  ctx.lineWidth = 4
  ctx.strokeStyle = 'white'
  ctx.beginPath()
  ctx.moveTo(gridRectangle.left, 0)
  ctx.lineTo(gridRectangle.left, gridRectangle.bottom)
  ctx.lineTo(gridRectangle.right, gridRectangle.bottom)
  ctx.stroke() // Actually draws axis lines

  // Draw the tick marks for the x axis
  const tickSize = 8

  // Draw X axis (left to right)
  for (let i = 0; i <= maxYear - minYear; i++) {
    ctx.strokeStyle = 'white'
    ctx.beginPath()
    ctx.moveTo(gridRectangle.left + xScale * i, gridRectangle.bottom)
    ctx.lineTo(gridRectangle.left + xScale * i, gridRectangle.bottom + tickSize)
    ctx.stroke()

    // Text labels
    ctx.font = '12px serif'
    ctx.fillStyle = 'white'
    ctx.fillText(
      minYear + i,
      gridRectangle.left + xScale * i - 24, // 24 bumps text left
      gridRectangle.bottom + tickSize * 3
    )
  }

  // Draw Y axis (bottom to top)
  for (let i = 0; i <= maxY; i++) {
    ctx.beginPath()
    ctx.moveTo(gridRectangle.left, gridRectangle.bottom - yScale * i)
    ctx.lineTo(gridRectangle.left - tickSize, gridRectangle.bottom - yScale * i)
    ctx.stroke()

    // Text labels
    ctx.font = '12px serif'
    ctx.fillStyle = 'white'
    ctx.fillText(
      i,
      gridRectangle.left - tickSize - 16, // 16 adjust the text position slightly
      gridRectangle.bottom - yScale * i + 4 // 4 helps align text vertically with tick mark
    )
  }

  // Draw the Key for each line
  const legendTop = 14
  const colorKeyLeft = gridRectangle.left + 8
  const legendLeft = gridRectangle.left + 28
  for (let i = 0; i < data.length; i++) {
    ctx.fillStyle = data[i].color
    ctx.fillRect(colorKeyLeft, legendTop - 14 + i * 20, 16, 16)
    ctx.font = '20px serif'
    ctx.fillStyle = 'white'
    ctx.fillText(data[i].label, legendLeft, legendTop + i * 20)
  }
}

function drawCanvas() {
  const canvas = document.getElementById('experience-chart')
  resizeCanvas(canvas)
  drawGraph(canvas)
}

function init() {
  window.addEventListener('resize', (event) => {
    drawCanvas()
  })
}

window.graphJS = {
  init,
  drawCanvas,
}
