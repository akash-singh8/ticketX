import React,{useState,useEffect} from 'react'
import Location from '../location/Location'
import Reqbox from '../reqbox/Reqbox'
import Pagenavigation from '../pagenavigation/Pagenavigation'
export default function Recentrequests() {
  const [getTickets, setGetTickets] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("");
  const fetchTickets = async () => {
    try {
      const authToken=localStorage.getItem("authorization")
      const response = await fetch(
        `http://localhost:3080/ticket/recent`,
        {
          method: "GET",
          headers: {
            Authorization: authToken,
          },
        }
      );
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        setGetTickets(data.tickets);
      } else {
        const errorData = await response.json();
        throw new Error(`Failed to fetch tickets: ${errorData.message}`);
      }
    } catch (err) {
      console.error("Error fetching tickets:", err);
    }
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  const filteredTickets = getTickets.filter((ticket) => {
    return (
      (!selectedLocation || ticket.raisedBy.location === selectedLocation)
    );
  });

  const handleLocationChange = (location) => {
    setSelectedLocation(location);
  };
  
  return (
    <>
        <section className="admin_section">
        <div className="container">
          <div className="heading">
              RECENT REQUESTS 
          </div>
        </div>
        
              
            
          
        <Location onLocationChange={handleLocationChange} />
        <div className='requests'>
          {

            filteredTickets.length > 0 ? (
              filteredTickets.map((ticket) => (
                <Reqbox key={ticket.id} ticket={ticket} />
                ))
                ) : (
                  <h3 className="center">No Recent Tickets</h3>
                  )
                }

        </div>
        <Pagenavigation />
      </section>
    </>
  )
}
