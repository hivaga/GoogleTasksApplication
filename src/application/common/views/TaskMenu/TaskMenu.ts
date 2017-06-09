import { Component } from "@angular/core";
import { AbstractComponent } from '../AbstractComponent';
import { AbstractLogger } from '../../services/logger/AbstractLogger';


/**
 * Created by Alexader Hadzhimitov (kemozit@yahoo.com) on 05.06.2017.
 */
@Component({selector: "TaskMenu",
	templateUrl: './TaskMenu.html',
	styleUrls: ['./TaskMenu.css']})
export class TaskMenu extends AbstractComponent
{
	// -----------------------------------------
	// STATIC PROPERTIES
	// -----------------------------------------

	// -----------------------------------------
	// @INPUT PROPERTIES
	// -----------------------------------------

	// -----------------------------------------
	// @OUTPUT PROPERTIES
	// -----------------------------------------

	// -----------------------------------------
	// PUBLIC PROPERTIES
	// -----------------------------------------

	// -----------------------------------------
	// PROTECTED PROPERTIES
	// -----------------------------------------

	// -----------------------------------------
	// PRIVATE PROPERTIES
	// -----------------------------------------

	// -----------------------------------------
	// CONSTRUCTOR
	// -----------------------------------------

	constructor(logger:AbstractLogger)
	{
		super(logger);
	}

	// -----------------------------------------
	// PUBLIC METHODS
	// -----------------------------------------

	// -----------------------------------------
	// PROTECTED METHODS
	// -----------------------------------------

	// -----------------------------------------
	// PRIVATE METHODS
	// -----------------------------------------

}
