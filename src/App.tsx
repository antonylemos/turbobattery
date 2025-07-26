import { StatusBar } from 'react-native';
import { Home } from './screens/Home';

function App() {
  return (
    <>
      <StatusBar translucent barStyle='dark-content' backgroundColor='#FFF' />
      <Home />
    </>
  );
}

export default App;
