delete from blogs
where blog_id = $1;

select * from blogs 
join users
on author_id = user_id;