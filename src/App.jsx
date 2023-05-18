import { Nav } from "./components/Nav";
import { Image } from "./components/Image";
import { Form } from "./components/Form";
import { EndPage } from "./components/EndPage";

export default function App() {
  return (
    <>
      <Nav />
      <main className="principal">
        <Image />
        <h1 className="contac">CONTACTO</h1>
      </main>
      <Form />
      <EndPage />
    </>
  );
}
