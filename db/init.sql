DROP TABLE IF EXISTS blogs;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  first_name varchar(16) NOT NULL,
  last_name VARCHAR(16) NOT NULL,
  email text NOT NULL,
  phone_number text NOT NULL,
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

insert into users
    (first_name,
    last_name,
    phone_number,
    email,
    username,
    password)
values
    ('Bryce', 'Bond', '409-338-7520', 'brycerbond@gmail.com', 'admin1', '$2b$12$OWfasHX/dw0CsDKB2Dz1a.waUP.eI39gWOCtKtKE2K.ZxUIVoF8qK');
select * from users;


UPDATE users SET admin = TRUE WHERE username = 'admin1';

UPDATE
  users
SET
  picture = 'https://i.imgflip.com/yyjmd.jpg'
WHERE
  username = 'admin1';
UPDATE
  users
SET
  bio = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate labore blanditiis odio, expedita vitae dolor recusandae dignissimos ad sequi, quia voluptatibus hic accusamus? Ex saepe fuga vero ad hic cum animi perspiciatis dignissimos, reiciendis id quis laborum dicta temporibus excepturi, laboriosam a architecto ab suscipit assumenda quam modi inventore,quae quidem!
  
 Expedita nemo soluta alias porro nobis dolore quas, est magnam voluptates cumque aliquid, totam hic ducimus adipisci! Ipsam, inventore? Quos laudantium reprehenderit ullam dolorum temporibus facilis odit rem eius veniam, quasi quas! Sapiente repellat ipsam tempora voluptas qui totam!'
WHERE
  username = 'admin1';
SELECT
  *
FROM
  blogs;
SELECT
  *
FROM
  users;

