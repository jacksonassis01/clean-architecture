drop schema if exists jack cascade;

create schema jack;

create table jack.user {
    user_id uuid primary key,
    email text not null,
    password_value text not null,
    password_type text not null,
    password_salt text null
}