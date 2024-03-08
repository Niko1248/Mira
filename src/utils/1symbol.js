function typeText() {
  const typingSpeed = 150 // Скорость появления символов.
  let typingInterval = setInterval(() => {
    if (this.index < this.text.length) {
      this.displayText += this.text[this.index]
      this.index++
    } else {
      clearInterval(typingInterval)
    }
  }, typingSpeed)
}
