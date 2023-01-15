CREATE TABLE person(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    surname VARCHAR(255)
);

CREATE TABLE cups (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    excerpt VARCHAR(255),
    place VARCHAR(255),
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES person(id)
);
