import './App.css';
import Navbar from './components/Navbar/Navbar';
import SlideText from './components/SlideText/SlideText';
import AuthorPost from './components/AuthorPost/AuthorPost';
import InspiringStories from './components/InspiringStories/InspiringStories';

function App() {
  return (
    <section>
      <Navbar />
      <SlideText />
      <AuthorPost />
      <InspiringStories />
    </section>
  );
}

export default App;
