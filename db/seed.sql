CREATE TABLE houser (
id SERIAL PRIMARY KEY,
name varchar(50),
address VARCHAR(70),
city varchar(35),
state VARCHAR(2),
zipcode VARCHAR(5),
img text
)

insert into houser (name, address, city, state, zipcode)
values
('Jonathan Joestar', '123 this st.', 'New York', 'NY', 74849 )
('Joseph Joestar', '123 that st', 'New York', 'NY', 83294)