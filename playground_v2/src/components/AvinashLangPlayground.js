import React, { useState, useEffect } from 'react'
import { VStack, Button, Text, Box, useToast } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import AceEditor from 'react-ace'
import 'ace-builds/src-noconflict/theme-monokai'

// importing AvinashLanguage Features and Syntax
import { convertToJS, executeCode } from '../lib/avinashLanguage'
import '../syntax/avinash-language'

const AvinashPlayground = () => {
  const [code, setCode] = useState('// Default Hello, World! code\nboloAvinash("Hello, World!");')
  const [output, setOutput] = useState('')
  const [isRunning, setIsRunning] = useState(false)

  const toast = useToast()

  useEffect(() => {
    // Run the default code on component mount
    runCode()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) // Empty dependency array ensures this effect runs only once

  const runCode = () => {
    setIsRunning(true)
    setOutput('')

    try {
      const translatedCode = convertToJS(code)
      const result = executeCode(translatedCode)
      setOutput(result)
    } catch (error) {
      setOutput(`Error: ${error.message}\n${error.stack}`)
      toast({
        title: 'Error',
        description: 'An error occurred while running the code.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    } finally {
      setIsRunning(false)
    }
  }

  return (
    <VStack align="stretch" spacing={4} p={4} maxW="800px" m="auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Text fontSize="xl" fontWeight="bold">
          Avinash Playground 🚀
        </Text>
      </motion.div>
      <Box>
        <AceEditor
          mode="avinash" // Use the custom Ace mode
          theme="monokai"
          width="100%"
          height="300px"
          value={code}
          onChange={setCode}
          editorProps={{ $blockScrolling: true }}
          fontSize={16}
          style={{ padding: '0.5rem 0.5rem 0.5rem 1rem' }}
        />
      </Box>
      <Button colorScheme="teal" onClick={runCode} isLoading={isRunning}>
        Run
      </Button>
      <Text fontSize="lg" fontWeight="bold">
        Result:
      </Text>
      <Box p={4} borderWidth="1px" borderRadius="md" overflowX="auto">
        <Text whiteSpace="pre-line">{output}</Text>
      </Box>
    </VStack>
  )
}
export default AvinashPlayground
