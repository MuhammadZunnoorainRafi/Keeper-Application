import Header from './Header';
import CreateNote from './CreateNote';
import Items from './Items';
import Footer from './Footer';

import { KeeperAppProvider } from '../Context/KeeperAppContext';

function App() {
  return (
    <KeeperAppProvider>
      <Header />
      <CreateNote />
      <Items />
      <Footer />
    </KeeperAppProvider>
  );
}

export default App;
