import './App.css';
import Navbar from './components/Navbar/Navbar';
import SlideText from './components/SlideText/SlideText';
import AuthorPost from './components/AuthorPost/AuthorPost';

function App() {
  return (
    <section>
      <Navbar />
      <SlideText />
      <AuthorPost />
    </section>
  );
}

export default App;
