import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "../app.state";
import { IComputerDirective } from "../challenge.service";
import { course, docking, echo, engine, laser, loadNavData, shield, tractorbeam } from "./computer.actions";

/**
 * computer service to interface between captain's commands and ngrx store
 * 
 * this service is fully customizable, but all logic should be in the actions/reducers
 */
@Injectable({
    providedIn: 'root'
})
export class ComputerService{
    constructor(private store: Store<AppState>){}

    /**
     * this is called on the captain's very first voice event
     */
    public Initialize(){
        this.store.dispatch(loadNavData());
    }
    /**
     * this is called when the captain commands the computer to do one or more things
     */
    public InterpretDirectives(directives: IComputerDirective[]){
        //TODO: decide which actions to dispatch based on the directives passed in!
        directives.forEach(x => {
            switch(x.directObject) {
                case 'docking clamp':
                    this.store.dispatch(docking({ directive: x }));
                    break;
                case 'engines':
                    this.store.dispatch(engine({ directive: x }));
                    break;
                case 'course':
                    this.store.dispatch(course({ directive: x }));
                    break;
                case 'tractorbeam':
                    this.store.dispatch(tractorbeam({ directive: x }));
                    break;
                case 'shields':
                    this.store.dispatch(shield({ directive: x }))
                    break;
                case 'laser':
                    this.store.dispatch(laser({ directive: x }))
            }

            this.store.dispatch(echo({message: this.directiveToMessage(x)}))
        });
    }

    /**
     * this is a helper method to turn a computer directive into a short string
     * 
     * you can change this!
     * @param d 
     * @returns 
     */
    private directiveToMessage(d: IComputerDirective): string{
        let result = "ACK > ";
        if (d.adverb)
            result += d.adverb.toUpperCase() + " ";
        result += d.verb.toUpperCase();
        result += ' THE ';
        result += d.directObject.toUpperCase();
        if (d.adjectivalPhrase)
            result += " " + d.adjectivalPhrase.toUpperCase();
        return result;
    }
} 