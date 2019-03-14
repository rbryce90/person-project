insert into users
    (first_name,
    last_name,
    phone_number,
    email,
    username,
    password)
values
    ($1, $2, $3, $4, $5, $6);
select * from users;

