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
import { BiLinkExternal } from "react-icons/bi";

const ModalComponent = ({
  title,
  description,
  technologies,
  github,
  web,
  img,
  disabled,
}) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="my-4">
      <Image
        src={img}
        alt={`${title} proyect image`}
        onClick={onOpen}
        className="hover:cursor-pointer aspect-video object-cover"
        draggable="false"
      />
      <Modal
        closeButton
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        className="hover:cursor-default"
        size="4xl"
      >
        <ModalContent>
          {(onOpen) => (
            <>
              <ModalHeader className="flex w-full flex-col items-center justify-center gap-5 p-7">
                <p className="text-2xl font-light">
                  <span className="font-normal">{title}</span>
                </p>
                <Image
                  src={img}
                  alt={`${title} proyect image`}
                  draggable="false"
                  className="aspect-video object-cover"
                />
              </ModalHeader>

              <ModalBody>
                <p>{description}</p>
                {!!web && <NextLink
                  href={disabled ? "#" : web}
                  className={`${
                    disabled && "cursor-not-allowed"
                  } flex w-fit underline`}
                  target={disabled ? undefined : "_blank"}
                >
                  Web
                  <BiLinkExternal size={12} />
                </NextLink>}
                {!!github && <NextLink
                  href={disabled ? "#" : github}
                  className={`${
                    disabled && "cursor-not-allowed"
                  } flex w-fit underline`}
                  target={disabled ? undefined : "_blank"}
                >
                  GitHub
                  <BiLinkExternal size={12} />
                </NextLink>}
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
