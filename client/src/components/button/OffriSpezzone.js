import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, Header, Image, Modal } from "semantic-ui-react";
import { addProduct } from "../../redux/spezzoni";

const OffriSpezzone = () => {
  const user = useSelector((state) => state.user.data);

  const [open, setOpen] = React.useState(false);
  const [spezzone, setSpezzone] = React.useState({
    name: "",
    quantity: 1,
  });
  const [immagine, setImmagine] = React.useState(undefined);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(
      addProduct({
        name: spezzone.name,
        quantity: Number(spezzone.quantity),
        userId: user.uid,
      })
    );
    setOpen(false);
  };

  const handleChange = (_, data) => {
    const { name, value } = data;
    setSpezzone({
      ...spezzone,
      [name]: value || "",
    });
  };

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Button positive disabled={!user}>
          Offri
        </Button>
      }
    >
      <Modal.Header>Offri uno spezzone</Modal.Header>
      <Modal.Content image>
        <ImageSelector immagine={immagine} setImmagine={setImmagine} />
        <Modal.Description>
          <Header>Dati dello spezzone</Header>
          <Form onSubmit={handleSubmit}>
            <Form.Group widths="equal">
              <Form.Input
                autoFocus
                name="name"
                label="Nome"
                placeholder="nome prodotto..."
                value={spezzone.name}
                onChange={handleChange}
              />
              <Form.Input
                name="quantity"
                label="Quantità"
                placeholder="1"
                type="number"
                value={spezzone.quantity}
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={() => setOpen(false)}>
          Annulla
        </Button>
        <Button
          positive
          content="Offri"
          icon="checkmark"
          onClick={() => handleSubmit()}
        />
      </Modal.Actions>
    </Modal>
  );
};

export default OffriSpezzone;

const ImageSelector = ({ immagine, setImmagine }) => {
  return (
    <React.Fragment>
      <input
        type="file"
        id="invisibleupload1"
        accept="image/png, image/jpeg"
        className="ui invisible file input"
        onChange={(e) => setImmagine(e.target.files[0])}
      />
      <Image
        src={
          immagine
            ? URL.createObjectURL(immagine)
            : "https://react.semantic-ui.com/images/wireframe/image.png"
        }
        as="label"
        size="medium"
        htmlFor="invisibleupload1"
        style={{ cursor: "pointer" }}
      />
    </React.Fragment>
  );
};
