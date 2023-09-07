import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing/Landing";
import Gethelp from "./pages/gethelp/Gethelp";
import Businessupdates from "./pages/businessupdates/Businessupdates";
import Resources from "./pages/resources/Resources";
import TicketHistory from "./pages/ticketHistory/TicketHistory";
import Admin from "./pages/admin/Admin";
import TicketRequests from "./pages/ticketrequests/Ticketrequests";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/get-help" element={<Gethelp />}></Route>
          <Route path="/business-updates" element={<Businessupdates />}></Route>
          <Route path="/resources" element={<Resources/>}></Route>
          <Route path="/ticket-history" element={<TicketHistory/>}></Route>
          <Route path="/admin/business-strategy" element={<Admin cat="BUSINESS STRATEGY"/>}></Route>
          <Route path="/admin/marketing" element={<Admin cat="MARKETING"/>}></Route>
          <Route path="/admin/financial-management" element={<Admin cat="FINANCIAL MANAGEMENT"/>}></Route>
          <Route path="/admin/technical-support" element={<Admin cat="TECHNICAL SUPPORT"/>}></Route>
          <Route path="/admin/operation&logistics" element={<Admin cat="OPERATION & LOGISTICS"/>}></Route>
          <Route path="/admin/others" element={<Admin cat="OTHERS"/>}></Route>
          <Route path="/admin/new-trainings" element={<Admin cat="NEW TRAININGS"/>}></Route>
          <Route path="/admin/information-on-program" element={<Admin cat="INFORMATION ON PROGRAM"/>}></Route>
          <Route path="/admin/recording-of-sessions"element={<Admin cat="RECORDING OF SESSIONS"/>}></Route>
          <Route path="/admin/new-product-launch"element={<Admin cat="NEW PRODUCT LAUNCH"/>}></Route>
          <Route path="/admin/expansion-of-business"element={<Admin cat="EXPANSION OF BUSINESS"/>}></Route>
          <Route path="/admin/revenue"element={<Admin cat="REVENUE"/>}></Route>
          <Route path="/admin/requests"element={<Admin/>}></Route>
          
          <Route path="/ticket-history/requests" element={<TicketRequests/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
