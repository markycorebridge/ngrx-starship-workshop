/**
 * computer selector file!
 * 
 * all main computer selectors go in this file
 * 
 * this file should be free of any business logic or Math.random() calls!
 */
import { createSelector } from "@ngrx/store";
import { selectComputer } from "../app.state";
import { SolarSystemLocation } from "../challenge.service";
import { ComputerState } from "./computer.reducer";
import { ViewscreenState } from "./viewscreen/viewscreen.component";

// https://ngrx.io/guide/store/selectors

export const selectViewscreen = createSelector(
    selectComputer,
    (state: ComputerState) => {
        //TODO: remove all the random state!
        // const locations: SolarSystemLocation[] = ['LEO', 'LunaOrbit', 'AsteroidBelt'];
        // const planets = ['/assets/mars.png', '/assets/SunRed.png', undefined];
        // const satellites = ['/assets/red_asteroid.png', '/assets/yellow_satellite.png', undefined];
        // const view: ViewscreenState = {
        //     location: locations[Math.floor(Math.random() * 3)],
        //     course: locations[Math.floor(Math.random() * 4)],
        //     leftImage: satellites[Math.floor(Math.random() * 3)],
        //     centerImage: planets[Math.floor(Math.random() * 3)],
        //     rightImage: satellites[Math.floor(Math.random() * 3)],
        //     laser: Math.random() > 0.5,
        //     tractor: Math.random() > 0.5,
        // };
        return state.viewscreen;
    }
);

export const selectEngine = createSelector(
    selectComputer,
    (state: ComputerState) => {
        return state.expectations.engine || 0;
    }
);

export const selectLasers = createSelector(
    selectComputer,
    (state: ComputerState) => {
        return state.expectations.laser || 0;
    }
);

export const selectDockingClamp = createSelector(
    selectComputer,
    (state: ComputerState) => {
        return state.expectations.docking || false;
    }
);

export const selectShield = createSelector(
    selectComputer,
    (state: ComputerState) => {
        return state.expectations.shield || 0;
    }
);

export const selectTractor = createSelector(
    selectComputer,
    (state: ComputerState) => {
        return state.expectations.tractorbeam || false;
    }
);