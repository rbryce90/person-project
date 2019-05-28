DROP TABLE IF EXISTS blogs;

DROP TABLE IF EXISTS users;

CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  first_name varchar(16) NOT NULL,
  last_name VARCHAR(16) NOT NULL,
  email VARCHAR NOT NULL,
  phone_number varchar(10) NOT NULL,
  username varchar(15) UNIQUE,
  PASSWORD text,
  picture TEXT,
  admin BOOLEAN DEFAULT FALSE,
  bio text
);

CREATE TABLE blogs (
  blog_id serial PRIMARY KEY,
  author_id integer REFERENCES users (user_id),
  blog_title varchar(60) NOT NULL,
  blog_body text NOT NULL
);

SELECT
  *
FROM
  blogs;

SELECT
  *
FROM
  users;

