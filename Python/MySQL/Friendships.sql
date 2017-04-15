select users.first_name, users.last_name, user2.first_name as friend_first_name, user2.last_name as friend_last_name from users
left join friendships on friendships.user_id = users.id
left join users as user2 on user2.id = friendships.friend_id
order by user2.last_name ASC;