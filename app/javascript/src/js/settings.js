class Settings {
  static isLocalStorageSupported() {
    return typeof(Storage) !== "undefined"
  }

  static load() {
    if (!this.isLocalStorageSupported()) return

    this.selectedCurrency = localStorage.getItem('selectedCurrency') || 'usd'
  }

  static save() {
    if (!this.isLocalStorageSupported()) return

    localStorage.setItem('selectedCurrency', this.selectedCurrency)
  }

  static selectCurrency(name) {
    if (!this.isLocalStorageSupported()) return

    this.selectedCurrency = name
    this.save()
  }
}

export { Settings }
