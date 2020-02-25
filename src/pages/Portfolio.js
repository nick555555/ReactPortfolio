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
                <div className="col s4"><Project title="Code Quiz" image={CodeQuiz} github="https://github.com/nick555555/CodeQuiz" deployed="https://nick555555.github.io/CodeQuiz/" /></div>
                <div className="col s4"><Project title="Parlor Flix" image={ParlorFlix} github="https://github.com/tysonvonnbeck/ProjectOne" deployed="https://tysonvonnbeck.github.io/ProjectOne/" /></div>
                <div className="col s4"><Project title="Weather Dashboard" image={WeatherDashboard} github="https://github.com/nick555555/Weather-Dashboard" deployed="https://nick555555.github.io/Weather-Dashboard/" /></div>
            </div>
            <div className="row">
                <div className="col s4"><Project title="Burger Logger" image={BurgerLogger} github="https://github.com/nick555555/BurgerLogger" deployed="https://calm-plains-89557.herokuapp.com/" /></div>
                <div className="col s4"><Project title="Spinach Shooters" image={SpinachShooters} github="https://github.com/Javeyn/projectTwo" deployed="https://fathomless-sierra-17852.herokuapp.com/" /></div>
                <div className="col s4"><Project title="Budget Tracker" image={BudgetTracker} github="https://github.com/nick555555/BudgetTracker" deployed="https://warm-dusk-78374.herokuapp.com/" /></div>
            </div>
        </div>
    )
}

export default Portfolio;