import { Component } from "@angular/core";
import { AbstractComponent } from '../AbstractComponent';
import { AbstractLogger } from '../../services/logger/AbstractLogger';
import { AbstractTasksService } from '../../services/tasks/AbstractTasksService';

/**
 * Created by User on 04.06.2017.
 */
@Component({selector: "TasksApplicationComponent",
templateUrl:'./TasksApplication.html',
styleUrls: ['./TasksApplication.css']})
export class TasksApplicationComponent extends AbstractComponent
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

	constructor(logger:AbstractLogger, tasksService:AbstractTasksService)
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
