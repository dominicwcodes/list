import Footer from './components/Footer';
import ItemList from './components/ItemList';
import Navbar from './components/Navbar';
import NewItemForm from './components/NewItemForm';
import ItemContextProvider from './contexts/ItemContext';

function App() {
  return (
    <div className="App">
      <ItemContextProvider>
        <Navbar />
        <ItemList />
        <NewItemForm />
      </ItemContextProvider>
      <Footer />
    </div>
  );
}

export default App;
