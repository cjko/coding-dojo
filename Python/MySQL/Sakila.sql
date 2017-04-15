use sakila;

-- #1
select customer.first_name, customer.last_name, customer.email, address from customer
join address on address.city_id = customer.address_id
join city on city.city_id = address.city_id
where city.city_id = 312;

-- #2
select film.title, film.description, film.release_year, film.rating, film.special_features, category.name from film
join film_category on film_category.film_id = film.film_id
join category on category.category_id = film_category.category_id
where category.name = "Comedy";

-- #3
select actor.actor_id, concat_ws(" ", actor.first_name, actor.last_name), film.title, film.description, film.release_year from actor
join film_actor on film_actor.actor_id = actor.actor_id
join film on film.film_id = film_actor.film_id
where film_actor.actor_id = 5;

-- #4
select customer.first_name, customer.last_name, customer.email, address.address, city.city, address.district, address.postal_code from customer
join address on address.address_id = customer.address_id
join city on city.city_id = address.city_id
where city.city_id = 1 or city.city_id = 42 or city.city_id = 312 or city.city_id = 459;

-- #5
select film.title, film.description, film.release_year, film.rating, film.special_features from film
where rating = "G" and film.special_features like "%Behind the Scenes%";

-- #6
select film.film_id, film.title, actor.actor_id, concat_ws(" ", actor.first_name, actor.last_name) from film
join film_actor on film_actor.film_id = film.film_id
join actor on actor.actor_id = film_actor.actor_id
where film.film_id = 369;

-- #7
select film.rental_rate, film.title, film.description, film.release_year, film.rating, film.special_features, category.name from film
join film_category on film_category.film_id = film.film_id
join category on category.category_id = film_category.category_id
where film.rental_rate = 2.99;

-- #8
select film.title, film.description, film.release_year, film.rating, film.special_features, category.name, concat_ws(" ", actor.first_name, actor.last_name) as actor_name from film
join film_actor on film_actor.film_id = film.film_id
join film_category on film_category.film_id = film.film_id
join category on film_category.category_id = category.category_id
join actor on actor.actor_id = film_actor.actor_id
where concat_ws(" ", actor.first_name, actor.last_name) = "Sandra Kilmer" and category.name = "Action";