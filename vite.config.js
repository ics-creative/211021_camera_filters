// vite.config.js
const { resolve } = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        page1: resolve(__dirname, '/pages/01_getUserMedia.html'),
        page2: resolve(__dirname, '/pages/02_changeDevice.html'),
        page3: resolve(__dirname, '/pages/03_canvasDemo.html'),
        page4: resolve(__dirname, '/pages/04_filterDemo01.html'),
        page5: resolve(__dirname, '/pages/05_filterDemo02.html')
      }
    }
  }
})