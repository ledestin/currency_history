class Settings {
  static isLocalStorageSupported() {
    return typeof(Storage) !== "undefined"
  }

  static load() {
    if (!this.isLocalStorageSupported()) return

    this.selectedCurrency = localStorage.getItem('selectedCurrency') || 'usd'
  }

  static selectCurrency(name) {
    if (!this.isLocalStorageSupported()) return

    this.selectedCurrency = name
    localStorage.setItem('selectedCurrency', this.selectedCurrency)
  }
}

export { Settings }
