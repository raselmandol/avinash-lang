#!/usr/bin/env node
const fs = require('fs')
const translations = require('./playground_v2/src/lib/avinashTranslations')

const createKeywordsRegex = () => {
  const keywords = Object.keys(translations).map((keyword) =>
    keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'),
  )
  const pattern = `^(?:${keywords.join('|')})$`
  return new RegExp(pattern)
}

const translateKeywordToJS = (keyword) => {
  return translations[keyword] || keyword
}

const convertToJS = (sourceCode) => {
  Object.keys(translations).forEach((keyword) => {
    // Use a regex to match whole words only to prevent partial replacements
    const regex = new RegExp(`\\b${keyword}\\b`, 'g')
    sourceCode = sourceCode.replace(regex, translations[keyword])
  })
  return sourceCode
}

const runAvinashLang = (filename) => {
  // Check if the filename is valid
  if (!filename || filename.startsWith('--')) {
    console.error('Avinash file ka name dekh lo! Kuch to likh beta!')
    return
  }
  const sourceCode = fs.readFileSync(filename, 'utf8')
  const jsCode = convertToJS(sourceCode, translations)

  eval(jsCode)
}

const filename = process.argv[2]
runAvinashLang(filename)

module.exports = {
  createKeywordsRegex,
  translateKeywordToJS,
  convertToJS,
  runAvinashLang,
}
