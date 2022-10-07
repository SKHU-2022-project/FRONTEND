import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from '../App';
import Humanities from '../pages/Humanities';
import NotFound from '../pages/NotFound';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/test/humanities" element={<Humanities />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
