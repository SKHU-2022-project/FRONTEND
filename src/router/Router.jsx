import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from '../App';
import Major from '../pages/Major';

// normal page
import Introduce from '../pages/Introduce';

// test page
import Humanities from '../pages/TestPage/IT';
import Sociology from '../pages/TestPage/Sociology';
import Media from '../pages/TestPage/Media';
import IT from '../pages/TestPage/IT';

// result page
import Share from '../pages/Share';
import Imsi from '../pages/ResultPage/Imsi';

// not found page
import NotFound from '../pages/NotFound';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/major/" element={<Major />} />
        <Route path="/humanities/test/:id" element={<Humanities />} />
        <Route path="/sociology/test/" element={<Sociology />} />
        <Route path="/media/test/" element={<Media />} />
        <Route path="/it/test/:id" element={<IT />} />
        <Route path="/comment" element={<Share />} />
        <Route path="/introduce" element={<Introduce />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/results" element={<Imsi />} />
      </Routes>
    </BrowserRouter>
  );
}
