import { useState } from "react";
import {
  Modal,
  Button,
  Link,
  ModalBody,
  ModalFooter,
  ModalHeader,
  useDisclosure,
  ModalContent,
} from "@nextui-org/react";
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
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
  };

  return (
    <div className="my-4">
      <Image
        src={img}
        alt={`${title} proyect image`}
        onClick={onOpen}
        className="hover:cursor-pointer"
        draggable="false"
      />
      <Modal
        closeButton
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        className="hover:cursor-default"
      >
        <ModalContent>
          {(onOpen) => (
            <>
              <ModalHeader>
                <p>
                  Proyect: {""}
                  {title}
                  <Image
                    src={img}
                    alt={`${title} proyect image`}
                    draggable="false"
                  />
                </p>
              </ModalHeader>

              <ModalBody>
                <p>{description}</p>
                <NextLink
                  target={disabled ? undefined : "_blank"}
                  className={`${disabled && "cursor-not-allowed"}`}
                  href={disabled ? "#" : web}
                >
                  Web
                </NextLink>
                <NextLink
                  href={disabled ? "#" : github}
                  className={`${disabled && "cursor-not-allowed"}`}
                  target={disabled ? undefined : "_blank"}
                >
                  GitHub
                </NextLink>
              </ModalBody>

              <ModalFooter>
                <Button color="default" onPress={onOpen}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ModalComponent;
