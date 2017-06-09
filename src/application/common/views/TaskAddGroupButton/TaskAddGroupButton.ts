import { Component } from "@angular/core";
import { AbstractComponent } from '../AbstractComponent';
import { AbstractLogger } from '../../services/logger/AbstractLogger';


/**
 * Created by Alexader Hadzhimitov (kemozit@yahoo.com) on 09.06.2017.
 */
@Component({selector: "TaskAddGroupButton",
template:`<button pButton type="button" label="Refresh" onclick="onClickHandler"></button>`})
export class TaskAddGroupButton extends AbstractComponent
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
	public onClickHandler(e:Event):void
	{

	}

	// -----------------------------------------
	// PROTECTED METHODS
	// -----------------------------------------

	// -----------------------------------------
	// PRIVATE METHODS
	// -----------------------------------------


}
