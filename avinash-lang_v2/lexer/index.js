const TokenType = {
  KEYWORD: 'KEYWORD',
  IDENTIFIER: 'IDENTIFIER',
  NUMBER: 'NUMBER',
  STRING: 'STRING',
  OPERATOR: 'OPERATOR',
  PUNCTUATION: 'PUNCTUATION',
  COMMENT: 'COMMENT',
  WHITESPACE: 'WHITESPACE',
  NEWLINE: 'NEWLINE',
  INDENT: 'INDENT',
  DEDENT: 'DEDENT',
  EOF: 'EOF',
  // TO-DO: Figure out what to do with unknown tokens
  UNKNOWN: 'UNKNOWN',
  // TO-DO: We need to add functions and objects and call backs and all that jazz but for now lets just get the basics down
  FUNCTION_DECLARATION: 'FUNCTION_DECLARATION',
  RETURN_STATEMENT: 'RETURN_STATEMENT',
}
const keywords = new Map([
  ['avinash ka variable ye', TokenType.KEYWORD], // Variable declaration
  ['nullAvinash', TokenType.KEYWORD], // Null value
  ['sahiAvinash', TokenType.KEYWORD], // Boolean true value
  ['NahAvinash', TokenType.KEYWORD], // Boolean false value
  ['boloAvinash', TokenType.KEYWORD], // Print to console
  ['agarAvinash', TokenType.KEYWORD], // If condition
  ['nahitoAvinash', TokenType.KEYWORD], // Else if condition
  ['varnaAvinash', TokenType.KEYWORD], // Else condition
  ['jabtakAvinash', TokenType.KEYWORD], // While loop
  ['rukAvinash', TokenType.KEYWORD], // Break statement
  ['continueAvinash', TokenType.KEYWORD], // Continue statement
  ['ye function Avinash', TokenType.KEYWORD], // Function declaration
  ['deAvinash', TokenType.KEYWORD], // Return statement
  ['baraDoAvinash', TokenType.KEYWORD], // Increment
  ['kamaDoAvinash', TokenType.KEYWORD], // Decrement
  ['tryAvinash', TokenType.KEYWORD], // Try block
  ['pakarAvinash', TokenType.KEYWORD], // Catch block for exceptions
  ['ye file khol Avinash', TokenType.KEYWORD], // File open
  ['ye file me likh Avinash', TokenType.KEYWORD], // Write to file
  ['file khulke parh Avinash', TokenType.KEYWORD], // Read from file
  ['Avinash shuru karo', TokenType.KEYWORD], // Start of a program or block
  ['Avinash khatam karo', TokenType.KEYWORD], // End of a program or block
  ['dhund Avinash', TokenType.KEYWORD], // Search or find operation
  ['Avinash agaya', TokenType.KEYWORD], // Function or method entrance
  ['Avinash wapas jao', TokenType.KEYWORD], // Function or method exit
  // ... other keywords as needed 
])

/**
 * Dynamically creates a regular expression to match keywords.
 * This function concatenates all the keywords into a single regex pattern.
 * @returns {RegExp} A regular expression to match any of the defined keywords.
 */
const createKeywordsRegex = () => {
  const keywordPatterns = Array.from(keywords.keys()).map((k) => k.replace(/\s+/g, '\\s+'))
  return new RegExp(`^(${keywordPatterns.join('|')})`)
}

// Regular expressions for different token types
const regexPatterns = {
  whitespace: /^\s+/,
  number: /^\d+/,
  string: /^"[^"]*"|'[^']*'/,
  keyword: createKeywordsRegex(),
  identifier: /^[a-zA-Z_]\w*/,
  operator: /^[+\-*/%]|==?=?|!=|<=?|>=?|&&|\|\|/,
  punctuation: /^[()\[\]{},.:;]/,
  comment: /^\/\/.*/,
  newline: /^\n+/,
  indent: /^ {2}/,
  dedent: /^ {0,2}/,
  eof: /^\0/,
  // TO-DO: Add regex for unknown tokens? Can there even be a regex hmm (maybe just a catch-all regex?)
}

const tokenStrategies = [
  { type: TokenType.WHITESPACE, regex: regexPatterns.whitespace },
  { type: TokenType.COMMENT, regex: regexPatterns.comment },
  { type: TokenType.NEWLINE, regex: regexPatterns.newline },
  { type: TokenType.NUMBER, regex: regexPatterns.number },
  { type: TokenType.STRING, regex: regexPatterns.string },
  { type: TokenType.IDENTIFIER, regex: regexPatterns.identifier },
  { type: TokenType.OPERATOR, regex: regexPatterns.operator },
  { type: TokenType.PUNCTUATION, regex: regexPatterns.punctuation },
  { type: TokenType.KEYWORD, regex: regexPatterns.keyword },
  { type: TokenType.INDENT, regex: regexPatterns.indent },
  { type: TokenType.DEDENT, regex: regexPatterns.dedent },
  { type: TokenType.EOF, regex: regexPatterns.eof },
]

/**
 * Tokenizes a given source code into an array of tokens.
 * This function iterates through the source code and matches it against
 * a set of predefined token types, creating a token whenever a match is found.
 *
 * @param {string} sourceCode - The source code to be tokenized.
 * @returns {Array} An array of tokens representing the lexical elements of the source code.
 */
const tokenize = (sourceCode) => {
  // Initialize an array to store the tokens
  const tokens = []
  // Variable to keep track of the current position in the source code
  let currentPosition = 0

  // Loop through the source code until the end is reached
  while (currentPosition < sourceCode.length) {
    // Flag to check if a match is found in the current iteration
    let matched = false

    // Prioritize checking for multi-word keywords
    // Check if the current substring matches any defined multi-word keywords
    const keywordMatch = regexPatterns.keyword.exec(sourceCode.slice(currentPosition))
    if (keywordMatch) {
      // If a match is found, extract the keyword
      const value = keywordMatch[0]
      // Add the keyword token to the tokens array
      tokens.push({ type: TokenType.KEYWORD, value })
      // Move the current position forward by the length of the matched keyword
      currentPosition += value.length
      // Set the flag to indicate a match was found
      matched = true
    } else {
      // If no keyword match, iterate through other token strategies
      for (const { type, regex } of tokenStrategies) {
        // Check if the current substring matches the regex of the current token type
        const match = regex.exec(sourceCode.slice(currentPosition))
        if (match) {
          // If a match is found, extract the matched string
          const value = match[0]
          // Add the token to the tokens array, except for whitespace
          if (type !== TokenType.WHITESPACE) {
            tokens.push({ type, value })
          }
          // Move the current position forward by the length of the matched string
          currentPosition += value.length
          // Set the flag to indicate a match was found
          matched = true
          // Break out of the loop since a match is found
          break
        }
      }
    }

    // If no match was found after checking all token strategies, throw an error
    if (!matched) {
      throw new Error(
        `Avinash problem hogaya. Avinash baba iss  ${currentPosition} position ka character samajh me nahi arahahe.`,
      )
    }
  }

  // Return the array of tokens after processing the entire source code
  return tokens
}

module.exports = {
  tokenize,
  TokenType,
  keywords,
}
