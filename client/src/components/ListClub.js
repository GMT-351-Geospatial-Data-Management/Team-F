import React, { Fragment, useEffect, useState } from "react";

import EditClub from "./EditClub";

const ListClubs = () => {

    const[clubs, setClubs] = useState([]);

    //delete club function

    const deleteClub = async id => {
        try {
            const deleteClub = await fetch(`http://localhost:5000/clubss/${id}`, {
                method: "DELETE"
            });

            setClubs(clubs.filter(club => club.clubs_id !== id));
        } catch (err) {
            console.error(err.message);
            
        }
    }

    const getClubs = async () => {
        try {
            const response = await fetch("http://localhost:5000/clubss");
            const jsonData = await response.json();
            
            setClubs(jsonData);
            
        } catch (err) {
            console.error(err.message);
            
        }
    };

    useEffect(() => {
        getClubs();
    },[]);

    console.log(clubs)
;    return ( 
    <Fragment>
        {" "}
        <table class="table table-bordered table-condensed table-striped">
        <thead>
                    <tr class="spacer">
                        <th>Topluluk Adı</th>
                        <th>Topluluk Adını Düzenle</th>
                        <th>Topluluk Adını Sil</th>
                    </tr>
                </thead>
            <tbody>
                {/* <tr>
                <td>John</td>
                <td>Doe</td>
                <td>john@example.com</td>
            </tr>*/}
            {clubs.map(club => (
                <tr key={club.clubs_id}>
                    <td>{club.name}</td>
                    <td>
                        <EditClub club={club}/>
                    </td>
                    <td>
                        <button className="btn btn-danger" 
                        onClick={() => deleteClub(club.clubs_id)}>Topluluğu Sil</button>
                    </td>
                </tr>
            ))}

            </tbody>
        </table>
    </Fragment>
    );
};

export default ListClubs;
