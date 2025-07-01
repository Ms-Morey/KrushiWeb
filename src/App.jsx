import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Schemes from './pages/Schemes';
import Notifications from './pages/Notifications';
import Contact from './pages/Contact';
import AboutDepartment from './pages/AboutDepartment';
import AboutStatistics from './pages/AboutStatistics';
import NotificationsActs from './pages/NotificationsActs';
import NotificationsNotification from './pages/NotificationsNotification';
import SchemesCentral from './pages/SchemesCentral';
import SchemesState from './pages/SchemesState';
import Policies from './pages/Policies';
import MediaGallery from './pages/MediaGallery';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} >
      <Route path="/department" element={<AboutDepartment />} />
      </Route>
      <Route path="/about" element={<About />} />
      <Route path="/schemes" element={<Schemes />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about/department" element={<AboutDepartment />} />
      <Route path="/about/statistics" element={<AboutStatistics />} />
      <Route path="/notifications/acts" element={<NotificationsActs />} />
      <Route path="/notifications/notification" element={<NotificationsNotification />} />
      <Route path="/schemes/central" element={<SchemesCentral />} />
      <Route path="/schemes/state" element={<SchemesState />} />
      <Route path="/policies" element={<Policies />} />
      <Route path="/media" element={<MediaGallery />} />
      <Route path="/contact" element={<ContactUs />} />
    </Routes>
  );
}

export default App;
