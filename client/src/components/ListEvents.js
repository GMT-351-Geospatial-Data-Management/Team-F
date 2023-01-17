import React, { Fragment, useEffect, useState } from "react";

import EditEvent from "./EditEvent";

const ListEvents = () => {

    const[events, setEvents] = useState([]);

    //delete club function

    const deleteEvent = async id => {
        try {
            const deleteClub = await fetch(`http://localhost:5000/events/${id}`, {
                method: "DELETE"
            });

            setEvents(events.filter(event => event.event_id !== id));
        } catch (err) {
            console.error(err.message);
            
        }
    }

    const getEvents = async () => {
        try {
            const response = await fetch("http://localhost:5000/events");
            const jsonData = await response.json();
            
            setEvents(jsonData);
            
        } catch (err) {
            console.error(err.message);
            
        }
    };

    useEffect(() => {
        getEvents();
    },[]);

    console.log(events)
;    return ( 
    <Fragment>
        {" "}
        <table class="table table-bordered table-condensed table-striped" >
            <thead >
            <tr>
                <th>Detaylar</th>
                <th>Topluluk</th>
                <th>Tarih</th>
                <th>Etkinlik Düzenle</th>
                <th>Etkinlik Sil</th>
            </tr>
            </thead>
            <tbody>
                {/* <tr>
                <td>John</td>
                <td>Doe</td>
                <td>john@example.com</td>
            </tr>*/}
            {events.map(event => (
                <tr key={event.event_id}>
                    <td>{event.event_details}</td>
                    <td>{event.event_organizer}</td>
                    <td>{event.event_date}</td>
                    <td>
                        <EditEvent event={event}/>
                    </td>
                    <td>
                        <button className="btn btn-danger" 
                        onClick={() => deleteEvent(event.event_id)}>Etkinlik Sil</button>
                    </td>
                </tr>
            ))}

            </tbody>
        </table>
    </Fragment>
    );
};

export default ListEvents;
