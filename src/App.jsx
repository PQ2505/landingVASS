import { Nav } from "./components/Nav";
import { Image } from "./components/Image";

export default function App() {
  return (
    <>
      <Nav />
      <main className="principal">
        <Image />
        <h1 className="contac">CONTACTO</h1>
      </main>
    </>
  );
}
