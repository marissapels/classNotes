-- create database favorite_foods;
-- 

create table favorite_foods(
	id integer(11) auto_increment not null primary key,
    food varchar(50) not null,
    score integer(11)
);

create table favorite_songs(
	id integer(11) auto_increment not null primary key,
    song varchar(100) not null,
    artist varchar(50),
    score integer(11)
);

create table favorite_movies (
	id integer(11) auto_increment not null primary key,
    film varchar(50) not null,
    five_times boolean default false,
    score integer(11)
);

insert into favorite_foods (food, score)
values ("pizza",8);
select*from favorite_foods;

insert into favorite_foods (food, score)
values ("ice cream",10);
select*from favorite_foods;

insert into favorite_foods (food, score)
values ("cookies",9);
select*from favorite_foods;

insert into favorite_songs (song, artist,score)
values ("Mary had a little lamb","Idk",2);
select*from favorite_songs;

insert into favorite_movies (film, five_times,score)
values ("Forrest Gump",true,10);
select*from favorite_movies;

-- DELETE FROM favorite_foods
-- WHERE food="cookies"
-- if there were two instances of cookies in the table, it would delete both instances, use id instead!

DELETE FROM favorite_foods
WHERE id = 6;
select*from favorite_foods;
