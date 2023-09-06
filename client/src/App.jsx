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
          <Route path="/admin" element={<Admin/>}></Route>
          <Route path="/ticket-history/requests" element={<TicketRequests/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
