import { AbstractLogger } from '../services/logger/AbstractLogger';
import { AbstractCommand } from './AbstractCommand';
import { Injectable } from '@angular/core';
import { AbstractTasksService } from '../services/tasks/AbstractTasksService';
import { GoogleTasksService } from '../services/tasks/google/GoogleTasksService';
/**
 * Created by Alexader Hadzhimitov (kemozit@yahoo.com) on 09.06.2017.
 */
@Injectable()
export class InitializeTaskServiceCommand extends AbstractCommand
{
	// -----------------------------------------
	// STATIC PROPERTIES/METHODS
	// -----------------------------------------

	// -----------------------------------------
	// PUBLIC PROPERTIES
	// -----------------------------------------

	// -----------------------------------------
	// PROTECTED PROPERTIES
	// -----------------------------------------
	protected abstractTaskService:AbstractTasksService

	// -----------------------------------------
	// PRIVATE PROPERTIES
	// -----------------------------------------

	// -----------------------------------------
	// CONSTRUCTOR
	// -----------------------------------------

	constructor(taskService:AbstractTasksService, logger:AbstractLogger)
	{
		super(logger);

		this.abstractTaskService = taskService;
	}

	// -----------------------------------------
	// PUBLIC METHODS
	// -----------------------------------------
	public execute():void
	{
		super.execute();
	}

	// -----------------------------------------
	// PROTECTED METHODS
	// -----------------------------------------

	// -----------------------------------------
	// PRIVATE METHODS
	// -----------------------------------------

}
