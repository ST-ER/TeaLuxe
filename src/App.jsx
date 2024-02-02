import './App.css';

import Header from './components/header/Header';
import Quote from './components/quote/Quote';
import Top from './components/top/Top';

function App() {
  return (
		<>
      <Header/>
      <main>
        <Top/>
        <Quote/>
      </main>
		</>
	)
}

export default App;
