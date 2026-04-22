import { useEffect } from 'react'; 
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Home from './components/Home';
import About from './components/About';
import Industries from './components/Industries';
import Contact from './components/Contact';
import { LanguageProvider } from './context/LanguageContext'; 
import Sales from './components/Sales';
import Community from './components/Community';
import Careers from './components/Careers';
import FactorySolutions from './components/FactorySolutions';
import TermsAndConditions from './components/Termsconditions';
import OpenCPUOpenWRT from "./services/OpenCPUOpenWRT";
import PCBFabrication from "./services/PCBFabrication";
import ComponentProcurement from "./services/ComponentProcurement";
import SolderingRework from './services/SolderingRework';
import PCBDesign from './services/PCBDesign';
import EmbeddedDevelopment from './services/EmbeddedDevelopment';
import ThreeDPrinting from './services/Threedprinting';
import PlasticInjectionMolding from './services/Plasticinjectionmolding';
import FullstackDevelopment from './services/Fullstackdevelopment';
import TestingDebugging from './services/Testingdebugging';
import ESDCompliance from './services/Esdcompliance';
import MechanicalCAD from './services/Mechanicalcad';
import EMSAssembly from './services/EmsAssembly';
import Moldpipeline from './services/Moldpipeline';
import CloudService from './services/Cloudservice';
import Cicd from './services/cicd';
import PatentPage from './services/patentfilling';
import MouseFollower from './components/MouseFollower';
import FilamentsPage from './services/Filamentspage';
import PelletsPage from './services/Pelletspage';
import RecyclingPage from './services/Recyclingpage';
import ShreddingPage from './services/Shreddingpage';
import Threedmolds from './services/Threedmoldspage';
import FdmSlaPage from './services/fdm';
import OurProcess from './HowWeWork/OurProcess';
import ProjectLifecycle from './HowWeWork/ProjectLifecycle';
import QualityAssurance from './HowWeWork/QualityAssurance';
import CollaborationModel from './HowWeWork/CollaborationModel';
import DeliverySupport from './HowWeWork/DeliverySupport';
import GlobalScrollProgress from "./components/GlobalScrollProgress";
import CommunityImpactPage from './components/Communityimpactpage';
import ResourcesPage from './components/ResourcesPage';
import EventsPage from './components/Eventspage';
import BlogsPage from './components/Blogspage';
import ApplicationsPage from './components/Applicationspage';
import BlogPostDetails from './components/BlogPostDetails';
import AdminPage from './AdminPage';
import LoginPage from './components/LoginPage';
import ProtectedRoute from './components/ProtectedRoute';

function ConditionalLayout() {
  const location = useLocation();
  
  // Add the paths here where you DON'T want the follower or scroll bar to appear
  const excludedPaths = ["/careers", "/legal"];

  if (excludedPaths.includes(location.pathname)) {
    return null; // Return nothing if the path is in the excluded list
  }

  return (
    <>
      {/* <GlobalScrollProgress /> */}
      <MouseFollower />
    </>
  );
}
function ContentProtection() {
  const location = useLocation();

  useEffect(() => {
    // DO NOT block protection on Admin or Login pages
    const isExcluded = location.pathname.startsWith('/admin-myaccess') || 
                       location.pathname.startsWith('/login-admin');
    
    if (isExcluded) return;

    // Block Right Click
    const handleContextMenu = (e) => e.preventDefault();

    // Block Keyboard Shortcuts (F12, Ctrl+Shift+I, Ctrl+U, etc.)
    const handleKeyDown = (e) => {
      if (
        e.keyCode === 123 || // F12
        (e.ctrlKey && e.shiftKey && e.keyCode === 73) || // Ctrl+Shift+I
        (e.ctrlKey && e.shiftKey && e.keyCode === 74) || // Ctrl+Shift+J
        (e.ctrlKey && e.keyCode === 85) || // Ctrl+U
        (e.ctrlKey && e.keyCode === 67)    // Ctrl+C
      ) {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [location.pathname]);

  return null;
}
function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <div className="App">
           <ContentProtection />
          {/* Include the helper component inside the Router */}
          <ConditionalLayout />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/community" element={<Community />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/factory-solutions" element={<FactorySolutions />} />
            <Route path="/legal" element={<TermsAndConditions />} />
            <Route path="/services/open-cpu-openwrt" element={<OpenCPUOpenWRT />} />
            <Route path="/services/pcb-fabrication" element={<PCBFabrication />} />
            <Route path="/services/component-procurement" element={<ComponentProcurement />} />
            <Route path="/services/soldering-rework" element={<SolderingRework />} />
            <Route path="/services/pcb-design" element={<PCBDesign />} />
            <Route path="/services/embedded-development" element={<EmbeddedDevelopment />} />
            <Route path="/services/3d-printing" element={<ThreeDPrinting />} />
            <Route path="/services/injection-molding" element={<PlasticInjectionMolding />} />
            <Route path="/services/fullstack" element={<FullstackDevelopment />} />
            <Route path="/services/testing-debugging" element={<TestingDebugging />} />
            <Route path="/services/esd-compliance" element={<ESDCompliance />} />
            <Route path="/services/mechanical-cad" element={<MechanicalCAD />} />
            <Route path="/services/ems-assembly" element={<EMSAssembly />} />
            <Route path="/services/mold-pipeline" element={<Moldpipeline />} />
            <Route path="/services/cloud-service" element={<CloudService />} />
            <Route path="/services/cicd" element={<Cicd />} />
            <Route path="/services/patent-filing" element={<PatentPage />} />
            <Route path="/services/filaments" element={<FilamentsPage />} />
            <Route path="/services/pellets" element={<PelletsPage />} />
            <Route path="/services/recycling" element={<RecyclingPage />} />
            <Route path="/services/shredding" element={<ShreddingPage />} />
            <Route path="/services/3d-molds" element={<Threedmolds />} />
            <Route path="/services/fdm-sla" element={<FdmSlaPage />} />
            <Route path="/our-process" element={<OurProcess />} />
            <Route path="/lifecycle" element={<ProjectLifecycle />} />
            <Route path="/quality-assurance" element={<QualityAssurance />} />
            <Route path="/collaboration-model" element={<CollaborationModel />} />
            <Route path="/delivery-support" element={<DeliverySupport />} />
            <Route path="/community-impact" element={<CommunityImpactPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/blogs" element={<BlogsPage />} />
            <Route path="/applications" element={<ApplicationsPage />} />
           <Route path="/blogs" element={<BlogsPage />} />
  <Route path="/blogs/:slug" element={<BlogPostDetails />} />
  
  {/* Login Route */}
  <Route path="/login-admin" element={<LoginPage />} />

  {/* Admin Route */}
  <Route path="/admin-myaccess" element={<ProtectedRoute><AdminPage /></ProtectedRoute>} />
          </Routes>
        </div>
      </Router>
    </LanguageProvider> 
  );
}

export default App;