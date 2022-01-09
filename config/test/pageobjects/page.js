module.exports = class Page {
  
    open(path) {
        return browser.url(`https://stage.bitso.com/${path}`)
    }
}
