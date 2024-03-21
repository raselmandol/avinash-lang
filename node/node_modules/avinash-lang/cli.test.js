const fs = require('fs')
const { createKeywordsRegex, convertToJS, runAvinashLang, translateKeywordToJS } = require('./cli')

describe('avinashLang Translator', () => {
  it('should create a regex pattern that matches keywords', () => {
    const regex = createKeywordsRegex()
    expect(regex.test('avinash ka variable ye')).toBe(true)
    expect(regex.test('boloAvinash')).toBe(true)
    expect(regex.test('blah blah')).toBe(false)
  })

  it('should translate a MamaLang keyword to JavaScript', () => {
    expect(translateKeywordToJS('avinash ka variable ye')).toBe('let')
    expect(translateKeywordToJS('boloAvinash')).toBe('console.log')
    expect(translateKeywordToJS('nullAvinash')).toBe('null')
    expect(translateKeywordToJS('nonexistent')).toBe('nonexistent')
  })

  it('should convert avinashLang code to JavaScript', () => {
    const sourceCode = 'avinash ka variable ye a = 5; boloAvinash(a);'
    const jsCode = convertToJS(sourceCode)
    expect(jsCode).toBe('let a = 5; console.log(a);')
  })

  it('should execute avinashLang code from a file', () => {
    const testFileName = 'test-code.avinash' // Path to the test file
    const testCode = 'avinash ka variable ye a = 5; boloAvinash(a);'
    const expectedJsCode = 'let a = 5; console.log(a);' // Expected JavaScript code

    // Write test code to the file
    fs.writeFileSync(testFileName, testCode, 'utf8')

    // Mock eval to verify execution
    const evalSpy = jest.spyOn(global, 'eval')

    // Run the function
    runAvinashLang(testFileName)

    // Verify that eval was called with the correct JavaScript code
    expect(evalSpy).toHaveBeenCalledWith(expectedJsCode)

    // Clean up: remove the test file and restore eval
    fs.unlinkSync(testFileName)
    evalSpy.mockRestore()
  })

  it('should correctly translate complex avinashLang expressions', () => {
    const sourceCode =
      'avinash ka variable ye x = 10; agarAvinash (x > 5) { boloAvinash("x is greater than 5"); }'
    const jsCode = convertToJS(sourceCode)
    const expectedJsCode = 'let x = 10; if (x > 5) { console.log("x is greater than 5"); }'
    expect(jsCode).toBe(expectedJsCode)
  })

  it('should handle control flow structures in avinashLang', () => {
    const sourceCode =
      'agarAvinash (condition) { boloAvinash("True"); } varnaAvinash { boloAvinash("False"); }'
    const jsCode = convertToJS(sourceCode)
    const expectedJsCode = 'if (condition) { console.log("True"); } else { console.log("False"); }'
    expect(jsCode).toBe(expectedJsCode)
  })

  it('should not translate keywords embedded in other words', () => {
    const sourceCode = 'text containingavinash ka variable ye not a keyword'
    const jsCode = convertToJS(sourceCode)
    expect(jsCode).toBe('text containingavinash ka variable ye not a keyword')
  })

  it('should correctly handle mixed content', () => {
    const sourceCode = 'This is a comment. avinash ka variable ye x = 5; // This is another comment'
    const jsCode = convertToJS(sourceCode)
    const expectedJsCode = 'This is a comment. let x = 5; // This is another comment'
    expect(jsCode).toBe(expectedJsCode)
  })

  // Writing tests for functions
  it('should handle the function declaration and return value', () => {
    const sourceCode = 'ye function Avinash addit(a,b){ deAvinash (a+b);}'
    const jsCode = convertToJS(sourceCode)
    const expectedJsCode = 'function addit(a,b){ return (a+b);}'
    expect(jsCode).toBe(expectedJsCode)
  })
})
