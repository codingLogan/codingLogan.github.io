export class Rectangle {
  constructor(left, right, top, bottom) {
    this.left = left
    this.right = right
    this.width = right - left

    // Using standard display y axis where 0,0 is top left
    this.top = top
    this.bottom = bottom
    this.height = bottom - top
  }
}
