class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9- ']+/g, "")
  }

  static titleize(string){
    let arr = []
    let excludeWords = ['a', 'an', 'the', 'of', 'but', 'for', 'at', 'by', 'and', 'from']
    arr = string.split(' ')
    return arr.map((word, i) => {
      return excludeWords.includes(word) && i > 0 ? [word] : word.charAt(0).toUpperCase() + word.slice(1)
    }) .join(' ')
  }
}