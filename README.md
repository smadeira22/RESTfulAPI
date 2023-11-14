# THING RESTful API

## Clone repository

- Open terminal
  - create a folder
  - cd into folder
  - run `git clone git@github.com:smadeira22/RESTfulAPI.git`
  - cd into RESTfulAPI folder
  - run `code .`, this will open the applciation in VS code

## Install required dependencies

- On the terminal run:
   - `npm i express cors morgan`
   - `npm i -D nodemon`

## Start API

On the terminal:
   - run `npm run dev`, app run on 4000
On the web browser open
   - http://localhost:4000/

## Endpoints

- GET /things
- GET /things/:id
- POST /things
- PATCH /things/:id
- DELETE /things/:id