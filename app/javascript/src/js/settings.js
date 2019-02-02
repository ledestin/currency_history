class Settings {
  static isLocalStorageSupported() {
    return typeof(Storage) !== "undefined"
  }

  static load() {
    if (!this.isLocalStorageSupported()) return

    Settings.selectedCurrency = localStorage.getItem('selectedCurrency') || 'usd'
  }

  static save() {
    if (!this.isLocalStorageSupported()) return

    localStorage.setItem('selectedCurrency', Settings.selectedCurrency)
  }

  static selectCurrency(name) {
    if (!this.isLocalStorageSupported()) return

    Settings.selectedCurrency = name
    this.save()
  }
}

export { Settings }
