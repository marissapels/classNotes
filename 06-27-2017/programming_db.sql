create database programming_db;

create table programming_languages(
	id integer(11) auto_increment not null primary key,
    languages varchar(50),
    rating integer(10)
);

insert into programming_languages (languages, rating)
values ("html", 5);
select*from programming_languages;

insert into programming_languages (languages, rating)
values ("javascript", 9);
select*from programming_languages;

insert into programming_languages (languages, rating)
values ("node", 8);
select*from programming_languages;

update programming_languages
set languages = "css"
where id= 1;

alter table programming_languages
add column mastered boolean;

update programming_languages
set mastered = false
where id=1;

update programming_languages
set mastered = false
where id=2;

update programming_languages
set mastered = false
where id=3;
