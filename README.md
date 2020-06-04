## Javascript Homework (JavaScript and DOM Manipulation)

## Table of contents
* [Homework_Assignment_Background](##Homework_Assignment_Background)
* [Project_Task](##Project_Task)
* [Technologies](##Technologies)
* [Setup](##setup)
* [Methodology](##Methodology)
* [Homework_Status](##Homework_Status)


## Homework_Assignment_Background

WAKE UP SHEEPLE! The extra-terrestrial menace has come to Earth and we here at ALIENS-R-REAL have collected all of the eye-witness reports we could to prove it! All we need to do now is put this information online for the world to see and then the matter will finally be put to rest.
There is just one tiny problem though... our collection is too large to search through manually. Even our most dedicated followers are complaining that they are having trouble locating specific reports in this mess.
That's why we are hiring you. We need you to write code that will create a table dynamically based upon a dataset we provide. We also need to allow our users to filter the table data for specific values. There's a catch though... we only use pure JavaScript, HTML, and CSS, and D3.js on our web pages. They are the only coding languages which can be trusted.
You can handle this... right? The planet Earth needs to know what we have found!

## Project_Task - Level 1
#### (In this homework assignment, the bonus assignment was attempted.  To review bonus section, review point #3 under Methodology)

1. Used the index.html file that was provided 
2. Used the UFO dataset provided in the form of an array of JavaScript objects, wrote code that appends a table to the web page and then adds new rows of data for each UFO sighting.
3. A column for date/time, city, state, country, shape, and comment was created in the table
4. Used a date form in the HTML document and wrote JavaScript code that will listen for events and search through the date/time column to find rows that match user input.

## Technologies
The project is created with:
* D3.js
* Bootstrap===4.3.1
* CSS

## Setup
1. To link directly to the latest D3.js release (https://d3js.org/) 

## Methodology

1. Wrote code to create table(To review code for Level 1, review app.js file)

2. To visulize html page

    * Open index.html (UFO-level-1/static/js) 
        1. Open with live server OR
        2. Open via local webserver.  
            * Open terminal, type: 
                ```python
                python -m http.server
                ```
            * In address bar, type:
                ```
                http://localhost:8000                                    

        * Below is a snapshot of the Level-1 assignment.

        <img src="UFO-level-1/static/images/final_homeworkL1_image.png"  width="300" height="250">

3. Wrote code for bonus assignment (To review code, review app2.js file in UFO-level-2 folder). The bonus assignment uses multiple input tags and/or select dropdowns, so the user can set multiple filters and search for UFO sightings using the following criteria based on the table columns.  To visualize bonus assignment webpage:

    * Open index2.html (UFO-level-2/static/js) 
        1. Open with live server OR
        2. Open via local webserver.  
            * Open terminal, type: 
                ```python
                python -m http.server
                ```
            * In address bar, type:
                ```
                http://localhost:8000/index2.html
                ```


    * Added 2 additional buttons:
        1. A "clear input field" button
        2. A "show full table" button 
    * Below is a snapshot of the bonus assignment where I created 3 filter options for the user to filter the data by.

     <img src="UFO-level-2/static/images/final_hwLevel2_image.png"  width="300" height="250">

## Homework_Status
(Last update: April 23, 2020) 

1. I would like more filter options to filter data by all 6 variables.
2. Make code more efficient.