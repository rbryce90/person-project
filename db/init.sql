drop table if exists comments; 
drop table if exists blogs;
drop table if exists users;

CREATE TABLE users (
  user_id SERIAL PRIMARY KEY
  , first_name varchar(16) not NULL
  , last_name VARCHAR(16) not null
  , email VARCHAR NOT NULL
  , phone_number varchar(10) not null
  , username varchar(15) UNIQUE
  , password text
  , picture TEXT
  , admin BOOLEAN DEFAULT false
  , bio text 
);

insert into users(first_name, last_name, email, phone_number, username, password, picture, admin, bio)
values('Richard', 'Bond', 'brycerbond@gmail.com', '4093387520', 'admin1', 'password','https://i.imgflip.com/yyjmd.jpg', true, 'This is a very professional bio for all to read and want to work with such a professional person');


insert into users(first_name, last_name, phone_number, email, username, password, admin )
values('fake', 'person', 5555554040, 'bond_bryce@yahoo.com', 'fakeuser', 'password', false);

create table blogs (
    blog_id serial primary key 
    , author_id integer references users(user_id)
    , blog_title varchar(60) not null
    , blog_body text not null
);

insert into blogs (author_id, blog_title, blog_body)
values ( 1, 'Bryce and Shawn Posting', ' This is a going to be a blog about nothing, and I am trying to strech this out as long as possible so it looks like a real blog, but I bed no one will read this or realize this is a run on sentence. Now I am passing the computer to Shawn Javid hey guys shawn here I am having an alright day thanks for asking. I also  think that steve has a very small big toe, anyways so im just hanging right now I would like to go to the park later but it is getting late however so is he.');

create table comments (
    comment_id serial primary key 
    , commentor_id integer references users(user_id)
    , comment_body varchar(500) not null
);


update users 
set admin = true
where username = 'admin1';

update users 
set picture = 'https://i.imgflip.com/yyjmd.jpg'
where username = 'admin1';


update users 
set bio = 'This is a very professional bio for all to read and want to work with such a professional person'
where username = 'admin1';



select * from blogs;
select * from comments;
select * from users;
