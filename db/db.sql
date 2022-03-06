/c postgres

CREATE TABLE IF NOT EXISTS paper(
    id SERIAL PRIMARY KEY,
    job VARCHAR(100),
    jobdesc VARCHAR(100)
);

DROP TABLE paper;

INSERT INTO paper VALUES(1,'logystics manager','working at route of vehicles');
INSERT INTO paper VALUES(2,'Software engineer','buid a software..');

SELECT * FROM paper;
