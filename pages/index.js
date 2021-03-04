/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Capa from '../src/components/common/Capa';
import Footer from '../src/components/common/Footer';
import Container from '../src/components/foundation/Container';
import Header, { links } from '../src/components/common/Header';
import Projects from '../src/components/common/Projects';
import Modal from '../src/components/common/Modal';
import Text from '../src/components/foundation/Text';
import Button from '../src/components/foundation/Button';
import FormMessage from '../src/components/pattern/FormMessage';

export default function Home() {
  const [isOpen, setOpen] = React.useState(false);
  return (
    <Container>
      <Header>
        <Header.Logo src="./images/logo.jpeg" />
        <Header.Menu>
          <ul>
            {links.map((link) => (
              <li key={link.url}>
                <Text tag="a" mobile="menuXS" desktop="menuMD" href={link.url}>
                  {link.text}
                </Text>
              </li>
            ))}
          </ul>
        </Header.Menu>
        <Button type="submit" onClick={() => setOpen(true)}>Contact</Button>
      </Header>
      <Capa />
      <Projects />
      <Modal isOpen={isOpen} onClose={() => setOpen(false)}>
        {(propsModal) => (
          <FormMessage isOpen={isOpen} onClose={() => setOpen(false)} propsModal={propsModal} />
        )}
      </Modal>
      <Footer />
    </Container>
  );
}
