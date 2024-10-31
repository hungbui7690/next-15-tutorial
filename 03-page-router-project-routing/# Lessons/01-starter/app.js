/*
  Project Routes
  - /
  - /events -> show all events
  - /events/[eventId] -> show single event
  - /events/...slug -> show filtered events


\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  Setting Up The Main Pages
  1. pages/index.js
  2. pages/events/index.js
  3. pages/events/[eventId].js
  4. pages/events/[...slug].js


-----------------------

  Test:
  1. localhost:3000
  2. localhost:3000/events
  3. localhost:3000/events/2021 -> pages/events/[eventId].js
  4. localhost:3000/events/2021/alex -> pages/events/[...slug].js


\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

    Adding Dummy Data & Static Files
  - @dummy-data.js
    -> contain data & some functions (getEvents, getFilteredEvents, getFeaturedEvents, getEventById)



*/
