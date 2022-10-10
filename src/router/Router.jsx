import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from '../App';
import Major from '../pages/Major';

// test page
import Humanities from '../pages/TestPage/Humanities';
import Sociology from '../pages/TestPage/Sociology';
import Media from '../pages/TestPage/Media';
import IT from '../pages/TestPage/IT';

// not found page
import NotFound from '../pages/NotFound';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/major/" element={<Major />} />
        <Route path="/humanities/test/" element={<Humanities />} />
        <Route path="/sociology/test/" element={<Sociology />} />
        <Route path="/media/test/" element={<Media />} />
        <Route path="/it/test/" element={<IT />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
