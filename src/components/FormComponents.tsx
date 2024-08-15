import { ChangeEvent, FormEvent, useState } from "react";
import { Button, Form } from "react-bootstrap";

export function FormComponents() {
  const [data, setData] = useState({
    verbrauch: "",
    strecke: "",
    preis: "",
  });

  const [validated, setValidated] = useState(false);
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

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      berechnung();
    }

    setValidated(true);
  }

  return (
    <div>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formVerbrauch">
          <Form.Label></Form.Label>
          <Form.Control
            type="number"
            step="any"
            name="verbrauch"
            min={0}
            max={100}
            required
            placeholder="Verbrauch in Liter"
            value={data.verbrauch}
            onChange={update}
          />
          <Form.Control.Feedback type="invalid">
            <h6 style={{ marginTop: "1rem" }}>
              Bitte geben Sie einen Wert zwischen 0 und 100 ein.
            </h6>
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formStrecke">
          <Form.Label></Form.Label>
          <Form.Control
            type="number"
            step="any"
            name="strecke"
            min={0}
            max={40000}
            required
            placeholder="Strecke in KM"
            value={data.strecke}
            onChange={update}
          />
          <Form.Control.Feedback type="invalid">
            <h6 style={{ marginTop: "1rem" }}>
              Bitte geben Sie einen Wert zwischen 0 und 40.000 ein.
            </h6>
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formSpritpreis">
          <Form.Label></Form.Label>
          <Form.Control
            type="number"
            step="any"
            name="preis"
            min={0}
            max={50}
            required
            placeholder="Preis in Euro pro Liter"
            value={data.preis}
            onChange={update}
          />
          <Form.Control.Feedback type="invalid">
            <h6 style={{ marginTop: "1rem" }}>
              Bitte geben Sie einen Wert zwischen 0 und 50 ein.
            </h6>
          </Form.Control.Feedback>
        </Form.Group>
        <Button variant="success" type="submit">
          Berechnen
        </Button>
        <Form.Group
          className="mb-3"
          controlId="formErgebnis"
          style={{ marginTop: "2rem" }}
        >
          <Form.Label>Endpreis</Form.Label>
          <Form.Control readOnly value={endpreis + " " + "Euro"} />
        </Form.Group>
      </Form>
    </div>
  );
}
