import React, {Fragment, useState} from "react";

const EditEvent = ({event}) => {
    const [event_details, setEventdetails] = useState(event.event_details);
    
    //edit name function

    const updateEventdetails = async(e) => {
        e.preventDefault();
        try {
            const body = {event_details};
            const response = await fetch(`http://localhost:5000/events/${event.event_id}`, {
                method:"PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            }
          );
          window.location = "/";
        } catch (err) {
            console.error(err.message);
            
        }
      };

    return ( 
    <Fragment>
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target={`#id${event.event_id}`}>
      Etkinlik Düzenle
    </button>
    {/*
        id = id10
    */}
    <div    
        class="modal" 
        id={`id${event.event_id}`}
        onClick = {() => setEventdetails(event.event_details)}>
      <div class="modal-dialog">
        <div class="modal-content">
    
          
          <div class="modal-header">
            <h4 class="modal-title">Toplantı İçeriğini Düzenle</h4>
            <button type="button" class="close" data-dismiss="modal" onClick = {() => setEventdetails(event.event_details)}>&times;</button>
          </div>
    
          
          <div class="modal-body">
            <input type="text" className="form-control" value={event_details} onChange={e => //3 saat sonunda çözülen hata value içi :)))
            setEventdetails(e.target.value)}/>
          </div>
    
          
          <div class="modal-header">
            <button type="button" class="btn btn-warning" data-dismiss="modal" onClick = {e => updateEventdetails(e)} >Düzenle</button>
            <button type="button" class="btn btn-danger" data-dismiss="modal" onClick = {() => setEventdetails(event.event_details)}>Kapat</button>
          </div>
    
        </div>
      </div>
    </div></Fragment>
    );
};

export default EditEvent;
