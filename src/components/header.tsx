import { Button, Flex, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Container from "./container";
import ContainerInside from "./containerInside";
import NextChakraLink from "./nextChakraLink";
import Image from "next/image";

export default function Header() {
  const [background, setBackground] = useState(false);
  console.log(location.pathname);

  useEffect(() => {
    onscroll = () => {
      if (window.scrollY > 30) {
        setBackground(true);
        return;
      }

      setBackground(false);
    };
  }, []);

  return (
    <Container
      position={location.pathname == "/" ? "fixed" : "sticky"}
      top={0}
      w={location.pathname == "/" ? "100vw" : "auto"}
      transition="all 0.3s ease"
      background={background ? "white" : "transparent"}
      shadow={background ? "md" : null}
      zIndex={100}
      // color={background ? "black" :  "white"}
      fontSize={22}
      as="header"
    >
      <ContainerInside py={2}>
        <Flex align="center" justify="space-between">
          <NextChakraLink href="/">
            <Flex gap={5} align="center" justify="center">
              <Image
                src="/logos/transparent_black.png"
                alt="sparks volleyball club's logo"
                width="75px"
                height="75px"
              />
              <Heading size="md">Sparks Volleyball Club</Heading>
            </Flex>
          </NextChakraLink>
          <Flex gap={10} display={{ base: "none", md: "flex" }}>
            <HeaderLink href="/">Home</HeaderLink>
            <HeaderLink href="/staff">Staff</HeaderLink>
            {/* <HeaderLink href="/story">Our Story</HeaderLink> */}
            {/* <HeaderLink href="/sponsors">Sponsors</HeaderLink> */}
            <HeaderLink href="/contact">Contact</HeaderLink>
            <HeaderLink href="/register">
              <Button>Register</Button>
            </HeaderLink>
          </Flex>
        </Flex>
      </ContainerInside>
    </Container>
  );
}

function HeaderLink({ children, href, ...props }) {
  return (
    <NextChakraLink href={href} {...props}>
      {children}
    </NextChakraLink>
  );
}
