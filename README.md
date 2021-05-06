# Poemist App Implementation
An implementation of the Poemist App Takehome from Voltaiq

## Installation
There are two steps to installation. 
1. Installing and starting the backend
    - Ensure that you have docker and docker-compose locally.
    - From the parent directory, run: 
    - `cd backend`
    - `docker-compose up`
    - Wait for it to download and compose
    - Navigate in a browser to http://127.0.0.1:8000/, where you should see the message: "Hello, world. You're at the poems index."
2. Installing and starting the frontend
    - Open a new window in the terminal
    - From the parent directory run:
    - `cd frontend`
    - `npm install`
    - After the npm packages have downloaded:
    - `npm start`
    - The development server should spin up on port 3000, and the poem app should be live at http://localhost:3000/

## Considerations
There are definitely parts of the app I would have improved had I had time. I am new to Django, and as a result did not get to do all that I wanted. I would have done the following: 

1. Written jest tests for the user interaction, the utils folder, and the API calls.
2. Written tests in Django for some of the queryset management.
3. Added some more semantic elements to the UI:
    - It is not necessarily clear that clicking on a poem will show its full text.
    - I would like a visual indicator showing on which poem I am currently clicked.
    - I did not take mobile into account at this stage.
    - Loading animations for the initial and subsiquent calls to get poems would be a nice touch.
4. Get the proxy working so I could use relative urls to make the API calls. 
5. I would have liked to find a way to not bypass the crsf tokens in the backend; this is a security issue.
6. Ensured I was using the most performant methods for the models and querysets instead of for loops. 
7. The data management can be a bit unwieldy, as we aren't doing 1:1 from poemist into the DB for storages sake, a series of functions or classes could have helped here. 

## Thank You
Thank you for taking the time to look at this project, and for giving me the chance to do it. I look forward to any feedback that can be provided.