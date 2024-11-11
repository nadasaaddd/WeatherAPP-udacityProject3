# Weather Journal App

The **Weather Journal App** is a web application that allows users to log their feelings based on the current weather in their area. By entering a zip code, the app retrieves the temperature and displays it along with the user's input. The app is built with **Node.js**, **Express**, and the **OpenWeatherMap API**.

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [File Structure](#file-structure)

## Project Overview
The Weather Journal App enables users to:
1. Enter a zip code to retrieve the current temperature from the OpenWeatherMap API.
2. Log their feelings about the weather.
3. View a summary of the date, temperature, and their mood.

This project was developed as part of a hands-on exercise in asynchronous JavaScript, API handling, and server-client communication using Express by **UDACITY Frontend Nanodegree**.

## Features
- **Weather Retrieval**: Enter a zip code to fetch the current weather using the OpenWeatherMap API.
- **Mood Logging**: Record your feelings about the weather.
- **Dynamic UI Update**: Display the date, temperature, and user input on the page.

## Installation
To set up and run the project locally, follow these steps:

1. **Clone the Repository**
   ```bash
   git clone https://github.com/nadasaaddd/WeatherAPP-udacityProject3.git
   cd weather-journal-app
   ```
2. **Install Node.js** (if not already installed)
   - Download Node.js and follow installation instructions.
     
3. **Install Dependencies**
   - Navigate to the project folder and install dependencies by running:
```bash
npm install
```
4. **Add OpenWeatherMap API Key**
   - Go to the OpenWeatherMap website and create an account to get an API key.
   - Add your API key to app.js as follows:
```javascript
const apiKey = '<your_api_key>&units=imperial';
```
5. **Run the Server**
   - Start the server by running:
``` bash
node server.js
```
The server should be running at http://localhost:3000.

## Usage
1.Open the app by visiting http://localhost:3000 in your browser.
2.Enter a zip code and your mood or thoughts about the weather.
3.Click "Generate Journal Entry" to submit.
4.View the date, temperature, and mood entry displayed on the page.

## Technologies Used
- Node.js: JavaScript runtime environment for the server.
- Express: Web application framework for Node.js.
- OpenWeatherMap API: For fetching real-time weather data based on zip code.
- HTML/CSS/JavaScript: Front-end technologies for the user interface.
- Cors and Body-Parser: Middleware for handling HTTP requests.
  
## File Structure
```
weather-journal-app/
├── website/
│   ├── index.html       # Main HTML file
│   ├── styles.css       # CSS styling file
│   ├── app.js           # Client-side JavaScript
│── server.js            # Node and Express server
│── README.md            # Project documentation
├── package.json         # Node package manager file with project dependencies
```
