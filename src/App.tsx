import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnalyticsTracker } from './components/AnalyticsTracker';
import { Navigation } from './components/Navigation';
import { Home } from './pages/Home';
import { Blog } from './pages/Blog';
import { BlogPost } from './pages/BlogPost';
import { Projects } from './pages/Projects';
import { Resume } from './pages/Resume';
import { Talks } from './pages/Talks';
import { Opensource } from './pages/Opensource';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AnalyticsTracker />
        <div className="relative min-h-screen bg-[#fafafa] dark:bg-[#1a1a1a] transition-colors duration-200">
          <div className="fixed inset-x-0 top-0 h-16 bg-gradient-to-b from-[#fafafa] dark:from-[#1a1a1a] to-transparent transform -translate-y-full" />
          <div className="fixed inset-x-0 bottom-0 h-16 bg-gradient-to-t from-gray-100 dark:from-gray-800 to-transparent transform translate-y-full" />

          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/talks" element={<Talks />} />
            <Route path="/opensource" element={<Opensource />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
