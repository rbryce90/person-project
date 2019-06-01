INSERT INTO users (first_name, last_name, phone_number, email, username, PASSWORD)
        VALUES ($1, $2, $3, $4, $5, $6);
SELECT
    *
FROM
    users
WHERE
    username = $5
LIMIT 1;

