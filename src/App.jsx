import './style/fonts.css'
import './App.css'
import './index.css'
//componentes
import Topo from './components/topo/Topo';
import CardTv from './components/cards_tv/CardTv';
import CardDispositivos from './components/cards_dispositivos/CardDispositivos.jsx'
import CardAnimacoes from './components/card_animacoes/CardAnimacoes'
import CardBaixar from './components/card_baixar/CardBaixar.jsx';
import Perguntas from './components/perguntas/Perguntas.jsx';
import Footer from './components/footer/Footer'
function App() {


  return (
    <main>
      <Topo />
      <CardTv/>
      <CardDispositivos/>
      <CardAnimacoes/>
      <CardBaixar />
      <Perguntas />
      <Footer />
    </main>
  )
}

export default App
