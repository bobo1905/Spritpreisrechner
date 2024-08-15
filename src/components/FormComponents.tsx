import { ChangeEvent, useState } from "react";
import { Button, Form } from "react-bootstrap";

export function FormComponents() {
  const [data, setData] = useState({
    verbrauch: "",
    strecke: "",
    preis: "",
  });

  const [endpreis, setEndpreis] = useState(0);

  function update(e: ChangeEvent<HTMLInputElement>) {
    setData({ ...data, [e.target.name]: e.target.value });
    setEndpreis(0);
  }

  function berechnung() {
    const verbrauch = parseFloat(data.verbrauch);
    const strecke = parseFloat(data.strecke);
    const preis = parseFloat(data.preis);

    const kosten = (verbrauch * preis * strecke) / 100;
    setEndpreis(kosten);
  }

  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formVerbrauch">
          <Form.Label></Form.Label>
          <Form.Control
            type="number"
            name="verbrauch"
            placeholder="Verbrauch in Liter"
            value={data.verbrauch}
            onChange={update}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formStrecke">
          <Form.Label></Form.Label>
          <Form.Control
            type="number"
            name="strecke"
            placeholder="Strecke in KM"
            value={data.strecke}
            onChange={update}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formSpritpreis">
          <Form.Label></Form.Label>
          <Form.Control
            type="number"
            name="preis"
            placeholder="Preis in Euro pro Liter"
            value={data.preis}
            onChange={update}
          />
        </Form.Group>
        <Button variant="success" onClick={berechnung}>
          Berechnen
        </Button>
        <Form.Group
          className="mb-3"
          controlId="formErgebnis"
          style={{ marginTop: "2rem" }}
        >
          <Form.Label>Endpreis</Form.Label>
          <Form.Control readOnly value={endpreis} />
        </Form.Group>
      </Form>
    </div>
  );
}
