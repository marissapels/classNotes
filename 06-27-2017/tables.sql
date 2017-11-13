create table people(
	id integer(11) auto_increment not null primary key,
    name varchar(30) not null,
    has_pet boolean not null,
    pet_name varchar(30),
    pet_age integer(10)
);

insert into people (name, has_pet, pet_name, pet_age)
values ("Marissa",TRUE, "Jagger",4);
select*from people;

insert into people (name, has_pet, pet_name, pet_age)
values ("Whitney",TRUE, "Sophie",4);
select*from people;

insert into people (name, has_pet)
values ("Bob",FALSE);
select*from people;

insert into people (name, has_pet)
values ("Peter",False);
Select*from people;

update people
set has_pet = true
where name = "Peter";
select*from people;