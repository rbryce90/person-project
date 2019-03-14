update blogs 
set blog_body = $2
where blog_id = $1;

select * from blogs 
where blog_id = $1;