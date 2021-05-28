import './App.css';
import Navbar from './components/Navbar/Navbar';
import SlideText from './components/SlideText/SlideText';
import AuthorPost from './components/AuthorPost/AuthorPost';
import InspiringStories from './components/InspiringStories/InspiringStories';
import Gigster from './components/Gigster/Gigster';
import LinearCreate from './components/LinearCreate/LinearCreate';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <section>
      <Navbar />
      <SlideText />
      <AuthorPost />
      <InspiringStories />
      <Gigster />
      <LinearCreate />
      <Footer />
    </section>
  );
}

export default App;
