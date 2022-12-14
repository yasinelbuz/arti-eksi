import { GameProvider } from "./features/game";
import Header from "./components/Header";
import Left from "./components/Left";
import Right from "./components/Right";

const App = () => {
  return (
    <GameProvider>
      <div className="container mx-auto flex flex-col items-center my-8">
        <div>
          <Header />
        </div>
        <div className="flex flex-col md:flex-row justify-center items-start mt-8 gap-4">
          <Left />
          <Right />
        </div>
      </div>
    </GameProvider>
  );
};

export default App;
