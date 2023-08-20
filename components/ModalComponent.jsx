import { useState } from "react";
import { Modal, Button, Text, Link } from "@nextui-org/react";
import Image from "next/image";
import NextLink from "next/link";

const ModalComponent = ({
  title,
  description,
  technologies,
  github,
  web,
  img,
  disabled,
}) => {
  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
  };

  return (
    <div className="my-4">
      <Image
        src={img}
        alt={`${title} proyect image`}
        onClick={handler}
        className="hover:cursor-pointer"
        draggable="false"
      />
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
        blur
        width={"1000px"}
        className="hover:cursor-default"
      >
        <Modal.Header>
          <Text id="modal-title" size={23}>
            Proyect: {""}
            <Text b size={23}>
              {title}
            </Text>
            <Image src={img} alt={`${title} proyect image`} draggable="false" />
          </Text>
        </Modal.Header>

        <Modal.Body>
          <Text>{description}</Text>
          <NextLink href={web}>
            <Link
              href={disabled ? "#" : web}
              className={`${disabled && "cursor-not-allowed"}`}
              target={disabled ? undefined : "_blank"}
              color="primary"
              isExternal
            >
              Web
            </Link>
          </NextLink>
          <NextLink href={web}>
            <Link
              href={disabled ? "#" : github}
              className={`${disabled && "cursor-not-allowed"}`}
              target={disabled ? undefined : "_blank"}
              color="primary"
              isExternal
            >
              GitHub
            </Link>
          </NextLink>
        </Modal.Body>

        <Modal.Footer>
          <Button auto flat color="error" onPress={closeHandler}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalComponent;
