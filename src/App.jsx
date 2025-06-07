import { Providers } from './components/providers';
import YourApp from './YourApp';
import "@getpara/react-sdk/styles.css";
import "./App.css";

function App() {
  return (
    <Providers>
      <YourApp />
    </Providers>
  );
}

export default App;