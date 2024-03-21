const { tokenize, TokenType } = require('./index')

describe('Tokenizer', () => {
  test('Tokenizes variables and assignments', () => {
    const sourceCode = 'avinash ka variable ye x = 5'
    const tokens = tokenize(sourceCode)
    expect(tokens).toEqual([
      { type: TokenType.KEYWORD, value: 'avinash ka variable ye' },
      { type: TokenType.IDENTIFIER, value: 'x' },
      { type: TokenType.OPERATOR, value: '=' },
      { type: TokenType.NUMBER, value: '5' },
    ])
  })

  test('Tokenizes numeric values', () => {
    const sourceCode = '42'
    const tokens = tokenize(sourceCode)
    expect(tokens).toEqual([{ type: TokenType.NUMBER, value: '42' }])
  })

  test('Tokenizes string literals', () => {
    const sourceCode = '"hello Avinash" \'ghaar\''
    const tokens = tokenize(sourceCode)
    expect(tokens).toEqual([
      { type: TokenType.STRING, value: '"hello Avinash"' },
      { type: TokenType.STRING, value: "'ghaar'" },
    ])
  })

  test('Tokenizes boolean values and null', () => {
    const sourceCode = 'sahiAvinash NahAvinash nullAvinash'
    const tokens = tokenize(sourceCode)
    expect(tokens).toEqual([
      { type: TokenType.KEYWORD, value: 'sahiAvinash' },
      { type: TokenType.KEYWORD, value: 'NahAvinash' },
      { type: TokenType.KEYWORD, value: 'nullAvinash' },
    ])
  })

  test('Tokenizes complex expressions', () => {
    const sourceCode = 'avinash ka variable ye x = (5 + 10) * 2'
    const tokens = tokenize(sourceCode)
    expect(tokens).toEqual([
      { type: TokenType.KEYWORD, value: 'avinash ka variable ye' },
      { type: TokenType.IDENTIFIER, value: 'x' },
      { type: TokenType.OPERATOR, value: '=' },
      { type: TokenType.PUNCTUATION, value: '(' },
      { type: TokenType.NUMBER, value: '5' },
      { type: TokenType.OPERATOR, value: '+' },
      { type: TokenType.NUMBER, value: '10' },
      { type: TokenType.PUNCTUATION, value: ')' },
      { type: TokenType.OPERATOR, value: '*' },
      { type: TokenType.NUMBER, value: '2' },
    ])
  })

  test('Tokenizes Function calls', () => {
    const sourceCode = 'ye function Avinash addit(a,b){ deAvinash (a+b)}'
    const tokens = tokenize(sourceCode)
    expect(tokens).toEqual([
      { type: TokenType.KEYWORD, value: 'ye function Avinash' },
      { type: TokenType.IDENTIFIER, value: 'addit' },
      { type: TokenType.PUNCTUATION, value: '(' },
      { type: TokenType.IDENTIFIER, value: 'a' },
      { type: TokenType.PUNCTUATION, value: ',' },
      { type: TokenType.IDENTIFIER, value: 'b' },
      { type: TokenType.PUNCTUATION, value: ')' },
      { type: TokenType.PUNCTUATION, value: '{' },
      { type: TokenType.KEYWORD, value: 'deAvinash' },
      { type: TokenType.PUNCTUATION, value: '(' },
      { type: TokenType.IDENTIFIER, value: 'a' },
      { type: TokenType.OPERATOR, value: '+' },
      { type: TokenType.IDENTIFIER, value: 'b' },
      { type: TokenType.PUNCTUATION, value: ')' },
      { type: TokenType.PUNCTUATION, value: '}' },
    ])
  })

  test('Throws error on invalid syntax', () => {
    const sourceCode = null
    expect(() => tokenize(sourceCode)).toThrow(Error)
  })
})
