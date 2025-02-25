import { FilmIcon } from "lucide-react";
import ReactDOM from "react-dom/client";
import Container from "./components/common/container";
import "./index.css";
import { Movies } from "./pages/movies/movies";

function App() {
  return (
    <>
      <div className="container mx-auto relative">
        <header className="flex w-full justify-center align-middle p-0 gap-4 text-xl">
          <div className="flex flex-row items-center gap-2 w-full justify-center p-8">
            <FilmIcon size="50" name="film" aria-label="Film Icon" />
            <h1 className="text-4xl font-bold">Several films</h1>
          </div>
        </header>
      </div>
      <div className="relative">
        <Container>
          <Movies />
        </Container>
        <main></main>
      </div>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(<App />);
