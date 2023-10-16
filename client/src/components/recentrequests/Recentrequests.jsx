import React,{useState,useEffect} from 'react'
import Location from '../location/Location'
import Reqbox from '../reqbox/Reqbox'
import Pagenavigation from '../pagenavigation/Pagenavigation'
export default function Recentrequests() {
  const [getTickets, setGetTickets] = useState([]);

  const fetchTickets = async (status) => {
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

  
  return (
    <>
        <section className="admin_section">
        <div className="container">
          <div className="heading">
              RECENT REQUESTS 
          </div>
        </div>
        
              
            
          
        <Location/>
        <div className='requests'>
          {

            getTickets.length > 0 ? (
              getTickets.map((ticket) => (
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
