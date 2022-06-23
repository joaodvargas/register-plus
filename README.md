# register-plus

A trial app around registering for events

## ADRs

1. We will be using NodeJS + Express + TS for the backend
2. We will be using CRA with TS for the frontend
3. We setup concurrently and nodemon to enhance the dx experience, alongside npm scripts
4. We will use eslint and prettier for linting and formatting
5. We will use Material UI as the design system, with Emotion for managing styles

- https://mui.com/material-ui/customization/how-to-customize/
- https://emotion.sh/docs/introduction

## TO DO v1

### Client

- [ ] Install MUI @ https://mui.com/material-ui/getting-started/installation/
- [ ] Follow tutorial for landing page
- [ ] Introduce React Router, with lazy loading
- [ ] Add skeleton app pages, with react router and lazy loading
- [ ] Add Auth0 authentication

### Server

- [ ] Introduce mongodb via docker
- [ ] Apis to read / write basic data
- [ ] User info tied with Auth0
- [ ] Secure apis

### Shared

- [ ] Add docker & docker compose
- [ ] Add HTTPS
- [ ] Add github action to run CI on PR (linter, tests, dependeabot, other code analysis)
- [ ] Deploy to AWS via github action on main merge, to staging env

## TO DO v2

- [ ] Ability to view events, register to events
- [ ] Admin view to add events and configure them
- [ ] SQS for alerting to event events
