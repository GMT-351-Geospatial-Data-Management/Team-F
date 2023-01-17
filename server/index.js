const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middileware
app.use(cors());
app.use(express.json()); //req.body

// ROUTES //

//Create a Club
app.post("/clubss", async(req,res) => {
    try {
        const { name } = req.body;
        const newClub = await pool.query(
            "INSERT INTO clubs (name) VALUES($1) RETURNING *",
        [name]
        );
        res.json(newClub.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

//Get all Clubs
app.get("/clubss", async(req, res) => {
    try {
        const allClubs = await pool.query("SELECT * FROM clubs");
        res.json(allClubs.rows);
    } catch (err) {
        console.error(err.message);
    }
});

//Get a Club
app.get("/clubss/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const clubs = await pool.query("SELECT * FROM clubs WHERE clubs_id = $1 " ,[
            id
        ]);
    res.json(clubs.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

//Update a Club
app.put("/clubss/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const { name }= req.body;
        const uptadeClub = await pool.query("UPDATE clubs SET name = $1 WHERE clubs_id =$2", 
        [name, id]);

        res.json("Club was updated!")
    } catch (err) {
        console.error(err.message)
    }
})

//Delete a Club
app.delete("/clubss/:id" , async(req, res) => {
    try {
        const { id } = req.params;
        const deleteClub = await pool.query("DELETE FROM clubs WHERE clubs_id = $1", [
            id
        ]);
        res.json("Club was deleted!")
    } catch (err) {
        console.log(err.message)
    }

})

//Create a Event
app.post("/events", async(req,res) => {
    try {
        const { event_details, event_organizer, event_date } = req.body;
        const newEvent = await pool.query(
            "INSERT INTO events (event_details, event_organizer, event_date) VALUES($1, $2, $3) RETURNING *",
        [event_details, event_organizer, event_date ]
        );
        res.json(newEvent.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

//Get all Events
app.get("/events", async(req, res) => {
    try {
        const allEvents = await pool.query("SELECT * FROM events");
        res.json(allEvents.rows);
    } catch (err) {
        console.error(err.message);
    }
});

//Get a Event
app.get("/events/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const events = await pool.query("SELECT * FROM events WHERE event_id = $1 " ,[
            id
        ]);
    res.json(events.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

//updata a event
app.put("/events/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const { event_details }= req.body;
        const uptadeEvent = await pool.query("UPDATE events SET event_details = $1 WHERE event_id =$2", 
        [event_details, id]);

        res.json("Event was updated!")
    } catch (err) {
        console.error(err.message)
    }
})

//Delete a Event
app.delete("/events/:id" , async(req, res) => {
    try {
        const { id } = req.params;
        const deleteEvent = await pool.query("DELETE FROM events WHERE event_id = $1", [
            id
        ]);
        res.json("Event was deleted!")
    } catch (err) {
        console.log(err.message)
    }

})


app.listen(5000, () => {
    console.log("Server Has Started on 5000 Port");
});












// const express = require("express");
// const app = express();
// const cors = require("cors");
// const pool = require("./db");

// //middileware
// app.use(cors());
// app.use(express.json()); //req.body

// //ROUTES//

// //Create a Club
// app.post("/clubss", async(req,res) => {
//     try {
//         const { name } = req.body;
//         const newClub = await pool.query(
//             "INSERT INTO clubs (name) VALUES($1) RETURNING *",
//         [name]
//         );
//         res.json(newClub.rows[0]);
//     } catch (err) {
//         console.error(err.message);
//     }
// });

// //Get all Clubs
// app.get("/clubss", async(req, res) => {
//     try {
//         const allClubs = await pool.query("SELECT * FROM clubs");
//         res.json(allClubs.rows);
//     } catch (err) {
//         console.error(err.message);
//     }
// });
// //Get a Club

// app.get("/clubss/:id", async(req, res) => {
//     try {
//         const { id } = req.params;
//         const clubs = await pool.query("SELECT * FROM clubs WHERE clubs_id = $1 " ,[
//             id
//         ]);
//     res.json(clubs.rows[0]);
//     } catch (err) {
//         console.error(err.message);
//     }
// });

// //Update a Club

// app.put("/clubss/:id", async(req, res) => {
//     try {
//         const { id } = req.params;
//         const { name }= req.body;
//         const uptadeClub = await pool.query("UPDATE clubs SET name = $1 WHERE clubs_id =$2", 
//         [name, id]);

//         res.json("Club was updated!")
//     } catch (err) {
//         console.error(err.message)
//     }
// })

// //Delete a Club

// app.delete("/clubss/:id" , async(req, res) => {
//     try {
//         const { id } = req.params;
//         const deleteClub = await pool.query("DELETE FROM clubs WHERE clubs_id = $1", [
//             id
//         ]);
//         res.json("Club was deleted!")
//     } catch (err) {
//         console.log(err.message)
//     }

// })

// app.listen(5000, () => {
//     console.log("Server Has Started on 5000 Port");
// });
