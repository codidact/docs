# New Site Deployment Checklist

## Prior to deployment (community sponsors)

- Determine site name
- Determine site url if different
- Determine interim moderator(s)
- Create logo, send to sysadmin
- Determine data import needs if any (tags included / excluded, etc.)

## Technical setup (sysadmin)

- Create site record
- Run seeds
- Edit nginx config
- Add records to CF DNS unproxied
- Generate or expand TLS cert
- Proxy CF DNS records
- Restart nginx

## Import and tidy imported data (sysadmin)

Only required if data is being imported from SE
- Import data
- Associate existing Codidact users with newly imported posts
- Fix any post import conversion issues

## Post-deployment (community sponsors)

- Create categories and set default licenses
- Create tags
- Create "Welcome!" post in Meta
- Create FAQ help topic
