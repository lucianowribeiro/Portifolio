import styled from 'styled-components'
import Capa from '../src/components/common/Capa'
import Footer from '../src/components/common/Footer'
import Container from '../src/components/foundation/Container'
import Header from '../src/components/common/Header'
import Projects from '../src/components/common/Projects'

export default function Home() {
  return (
      <Container>
        <Header />
        <Capa>
          <h1>Luciano Weber Ribeiro</h1>
          <h2>Portifolio</h2>
        </Capa>
        <Projects />
        <Footer />
      </Container>
  )
}
