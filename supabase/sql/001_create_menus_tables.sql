-- Create menus table + helpers
create extension if not exists "pgcrypto";

create table if not exists public.menus (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  menu_type text not null,
  location text,
  subtitle text,
  categories jsonb not null,
  allergen_notice text,
  is_published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists menus_menu_type_idx on public.menus (menu_type);
create index if not exists menus_location_idx on public.menus (location);
create index if not exists menus_is_published_idx on public.menus (is_published);

create or replace function public.set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists menus_set_updated_at on public.menus;
create trigger menus_set_updated_at
before update on public.menus
for each row execute function public.set_updated_at();

alter table public.menus enable row level security;

drop policy if exists "Menus are readable by everyone" on public.menus;
create policy "Menus are readable by everyone"
  on public.menus
  for select
  using (is_published = true);

drop policy if exists "Menus are readable by service role" on public.menus;
create policy "Menus are readable by service role"
  on public.menus
  for select
  using (auth.role() = 'service_role');

drop policy if exists "Menus are editable by service role" on public.menus;
create policy "Menus are editable by service role"
  on public.menus
  for all
  using (auth.role() = 'service_role')
  with check (auth.role() = 'service_role');
