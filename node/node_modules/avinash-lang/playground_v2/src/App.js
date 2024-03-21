import AvinashPlayground from './components/AvinashLangPlayground';
import { ChakraProvider } from '@chakra-ui/react';
const App = () => {
  return (
    <ChakraProvider>
      <AvinashPlayground />
    </ChakraProvider>
  );
};

export default App;
