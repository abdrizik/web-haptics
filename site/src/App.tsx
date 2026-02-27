import Home from "./components/homepage";
import { ParticlesProvider } from "./components/particles";
import { AppProvider } from "./context/app";

function App() {
  return (
    <AppProvider>
      <ParticlesProvider>
        <Home />
      </ParticlesProvider>
    </AppProvider>
  );
}

export default App;
