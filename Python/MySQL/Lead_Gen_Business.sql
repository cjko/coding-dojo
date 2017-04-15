use lead_gen_business;

-- #1
select sum(amount) as total_revenue, charged_datetime from billing
where month(charged_datetime) = 3 and year(charged_datetime) = 2012;

-- #2
select clients.client_id, sum(amount) from clients
left join billing on billing.client_id = clients.client_id
where clients.client_id = 2;

-- #3
select clients.client_id, sites.domain_name from clients
left join sites on sites.client_id = clients.client_id
where clients.client_id = 10;

-- #4
select clients.client_id, count(sites.site_id) from clients
left join sites on sites.client_id = clients.client_id
where clients.client_id = 1 or clients.client_id = 20
group by clients.client_id;

-- #5
select sites.domain_name, count(leads.leads_id) from sites
left join leads on leads.site_id = sites.site_id
where date(leads.registered_datetime) > "2011-01-01" and date(leads.registered_datetime) < "2011-02-15"
group by sites.site_id;

-- #6
select clients.first_name, clients.last_name, count(leads.leads_id) from clients
left join sites on sites.client_id = clients.client_id
left join leads on leads.site_id = sites.site_id
where date(leads.registered_datetime) > "2011-01-01" and date(leads.registered_datetime) < "2011-12-31"
group by clients.client_id;

-- #7
select leads.registered_datetime, clients.first_name, clients.last_name, count(leads.leads_id) from clients
left join sites on sites.client_id = clients.client_id
left join leads on leads.site_id = sites.site_id
where date(leads.registered_datetime) > "2011-01-01" and date(leads.registered_datetime) < "2011-06-30"
group by clients.client_id;

-- #8
select clients.client_id, clients.first_name, clients.last_name, count(leads.leads_id) from clients
left join sites on sites.client_id = clients.client_id
left join leads on leads.site_id = sites.site_id
where date(leads.registered_datetime) > "2011-01-01" and date(leads.registered_datetime) < "2011-12-31"
group by clients.client_id
order by clients.client_id ASC;

select clients.first_name, clients.last_name, sites.domain_name, count(leads.leads_id) from clients
left join sites on sites.client_id = clients.client_id
left join leads on leads.site_id = sites.site_id
group by clients.client_id;

-- #9
select billing.charged_datetime, clients.first_name, clients.last_name, sum(billing.amount) from clients
left join billing on billing.client_id = clients.client_id
group by dateadd(monthbilling.charged_datetime
order by clients.client_id ASC

