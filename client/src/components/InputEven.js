import React, {useState} from "react";

const InputEvent = () => {

    const [event_details, setEventdetails] = useState("")
    const [event_organizer, setEventorganizer] = useState("")
    const [event_date, setEventdate] = useState("")
    const onSubmitForm = async(e) => {
        e.preventDefault();
        try {
            const body = {event_details,event_organizer, event_date};
            const response =await fetch("http://localhost:5000/events", {
                method: "POST",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
            window.location ="/";
        } catch (err) {
            console.error(err.message)
            
        }
    }

    return (
        <div className="text-center mt-5">
            <div class="row">
        <div class="col-sm-12 ">
            <h2><b>Etkinlik Ekle</b></h2>
            <br></br> 
        </div>
    </div>
          <form action="">
            <div className="form-row">
              <div className="col">
                
                <input
                  value={event_details}
                  onChange={(e) => setEventdetails(e.target.value)}
                  type="text"
                  className="form-control"
                  placeholder="Etkinlik Detaylarını Belirtiniz:"
                />
              </div>
              <div className="col">
              
                <input
                  value={event_organizer}
                  onChange={(e) => setEventorganizer(e.target.value)}
                  className="form-control"
                  type="text"
                  placeholder="Etkinlik Sahibi Topluluğun Adını Giriniz:"
                />
              </div>
              <div className="col">
              
                <input
                  value={event_date}
                  onChange={(e) => setEventdate(e.target.value)}
                  className="form-control"
                  type="text"
                  placeholder="Etkinlik Tarihi Giriniz: GG.AA.YYYY SS:DD"
                />
              </div>
              <button
                 
                onClick={onSubmitForm}
                type="submit"
                className="gradient btn"
              >
                Ekle
              </button>
              
            </div>
          </form>
        </div>
      );
    };


export default InputEvent;
