import React from "react";
import Project from "../components/Project";
import CodeQuiz from "./Images/CodeQuiz.png";
import ParlorFlix from "./Images/ParlorFlix.png";
import WeatherDashboard from "./Images/WeatherDashboard.png";
import BurgerLogger from "./Images/BurgerLogger.png";
import SpinachShooters from "./Images/SpinachShooters.png";
import BudgetTracker from "./Images/BudgetTracker.png";

function Portfolio() {
    return(
        <div className="container" style={{height:"78vh", marginBottom:"5vh"}}>
            <h3 style={{borderBottom:"solid"}}>Portfolio</h3>
            <div className="row">
                <div className="col s4"><Project title="Code Quiz" image={CodeQuiz} github="https://github.com/nick555555/CodeQuiz" deployed="https://nick555555.github.io/CodeQuiz/" summary="A timed code quiz with multiple choice answers. Final score and user initials are saved to scoreboard via local storage." tech="HTML, CSS, Javascript, Bootstrap" /></div>
                <div className="col s4"><Project title="Parlor Flix" image={ParlorFlix} github="https://github.com/tysonvonnbeck/ProjectOne" deployed="https://tysonvonnbeck.github.io/ProjectOne/" summary="A tool for searching for TV shows and movies. Displays ratings, reviews, links and trailers based on user query." tech="HTML, CSS, Javascript, jQuery, Materialize and the OMDB, Youtube Data and Utelly APIs" /></div>
                <div className="col s4"><Project title="Weather Dashboard" image={WeatherDashboard} github="https://github.com/nick555555/Weather-Dashboard" deployed="https://nick555555.github.io/Weather-Dashboard/" summary="Displays the current weather and a 5 day weather forcast based on the city the user inputs. Prior searches are saved for easy reference." tech="HTML, CSS, Javascript, jQuery, Bootstrap, Moment.js and the Open Weather API" /></div>
            </div>
            <div className="row">
                <div className="col s4"><Project title="Burger Logger" image={BurgerLogger} github="https://github.com/nick555555/BurgerLogger" deployed="https://calm-plains-89557.herokuapp.com/" /></div>
                <div className="col s4"><Project title="Spinach Shooters" image={SpinachShooters} github="https://github.com/Javeyn/projectTwo" deployed="https://fathomless-sierra-17852.herokuapp.com/" summary="A variant of space invaders using custom assets. Includes varying game parameters and a login system." tech="HTML, CSS, Javascript, jQuery, mySQL, Handlebars, Materialize, Node.js" /></div>
                <div className="col s4"><Project title="Budget Tracker" image={BudgetTracker} github="https://github.com/nick555555/BudgetTracker" deployed="https://warm-dusk-78374.herokuapp.com/" /></div>
            </div>
        </div>
    )
}

export default Portfolio;