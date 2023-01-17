CREATE DATABASE hacettepetopluluk;

CREATE TABLE clubs(
    clubs_id SERIAL PRIMARY KEY,
    name VARCHAR(255)
);

CREATE TABLE events (
event_id serial PRIMARY KEY,
event_details VARCHAR (255) NOT NULL,
event_organizer VARCHAR (255) NOT NULL,
event_date TIMESTAMP NOT NULL DEFAULT CURRENT_DATE,
FOREIGN KEY (event_organizer) REFERENCES clubs(name)

);
