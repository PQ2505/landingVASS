import { Nav } from "./components/Nav";
import { Image } from "./components/Image";
import { Info } from "./components/Info.jsx";
import { Form } from "./components/Form";
import { EndPage } from "./components/EndPage";

export default function App() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main className="principal">
        <Image />
        <h1 className="contac">CONTACTO</h1>
        <section>
          <Info />
        </section>
        <section className="containeForm">
          <Form />
        </section>
      </main>
      <footer>
        <EndPage />
      </footer>
    </>
  );
}
