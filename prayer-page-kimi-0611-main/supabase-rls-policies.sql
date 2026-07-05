-- Run this in Supabase Dashboard > SQL Editor.
-- It keeps the public prayer counter readable/insertable from the frontend,
-- but prevents anon clients from modifying or deleting existing events.

alter table public.prayer_events enable row level security;

drop policy if exists codex_anon_read_prayer_events on public.prayer_events;
drop policy if exists codex_anon_insert_prayer_events on public.prayer_events;
drop policy if exists codex_anon_restrict_insert_prayer_events on public.prayer_events;
drop policy if exists codex_anon_block_update_prayer_events on public.prayer_events;
drop policy if exists codex_anon_block_delete_prayer_events on public.prayer_events;

create policy codex_anon_read_prayer_events
on public.prayer_events
for select
to anon
using (true);

create policy codex_anon_insert_prayer_events
on public.prayer_events
for insert
to anon
with check (
  event_type = 'prayer'
);

-- Restrictive policies are ANDed with existing permissive policies.
-- These protect the table even if an older broad anon policy still exists.
create policy codex_anon_restrict_insert_prayer_events
on public.prayer_events
as restrictive
for insert
to anon
with check (
  event_type = 'prayer'
);

create policy codex_anon_block_update_prayer_events
on public.prayer_events
as restrictive
for update
to anon
using (false)
with check (false);

create policy codex_anon_block_delete_prayer_events
on public.prayer_events
as restrictive
for delete
to anon
using (false);

-- Optional cleanup for the anon RLS probe used during security verification.
delete from public.prayer_events
where event_type in ('security_probe', 'security_probe_updated');
