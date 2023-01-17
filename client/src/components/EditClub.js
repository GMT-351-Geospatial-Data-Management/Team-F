import React, {Fragment, useState} from "react";

const EditClub = ({club}) => {
    const [name, setName] = useState(club.name);
    
    //edit name function

    const updateName = async(e) => {
        e.preventDefault();
        try {
            const body = {name};
            const response = await fetch(`http://localhost:5000/clubss/${club.clubs_id}`, {
                method:"PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
            window.location = "/"
        } catch (err) {
            console.error(err.message);
            
        }
    };

    return ( 
    <Fragment>
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target={`#id${club.clubs_id}`}>
        Düzenle
    </button>
    {/*
        id = id10
    */}
    <div    
        class="modal" 
        id={`id${club.clubs_id}`}
        onClick = {() => setName(club.name)}>
      <div class="modal-dialog">
        <div class="modal-content">
    
          
          <div class="modal-header">
            <h4 class="modal-title">Topluluk Adını Düzenle</h4>
            <button type="button" class="close" data-dismiss="modal" onClick = {() => setName(club.name)}>&times;</button>
          </div>
    
          
          <div class="modal-body">
            <input type="text" className="form-control" value={name} onChange={e =>
            setName(e.target.value)}/>
          </div>
    
          
          <div class="modal-footer">
            <button type="button" class="btn btn-warning" data-dismiss="modal" onClick = {e => updateName(e)} >Düzenle</button>
            <button type="button" class="btn btn-danger" data-dismiss="modal" onClick = {() => setName(club.name)}>Kapat</button>
          </div>
    
        </div>
      </div>
    </div></Fragment>
    );
};

export default EditClub;
