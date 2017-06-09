import { AbstractCommand } from '../../../common/controllers/AbstractCommand';
import { AbstractLogger } from '../../../common/services/logger/AbstractLogger';
import { InitializeTaskServiceCommand } from '../../../common/controllers/InitializeTaskServiceCommand';
import { Injectable } from '@angular/core';
/**
 * Created by Alexader Hadzhimitov (kemozit@yahoo.com) on 09.06.2017.
 */
@Injectable()
export class BrowserInitializeApplicationCommand extends AbstractCommand
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

	// -----------------------------------------
	// PRIVATE PROPERTIES
	// -----------------------------------------

	// -----------------------------------------
	// CONSTRUCTOR
	// -----------------------------------------

	constructor(logger: AbstractLogger, private initializeTaskServiceCommand: InitializeTaskServiceCommand)
	{
		super(logger);
	}

	// -----------------------------------------
	// PUBLIC METHODS
	// -----------------------------------------
	public execute(): void
	{
		super.execute();

		//this.initializeTaskServiceCommand.execute();
	}

	// -----------------------------------------
	// PROTECTED METHODS
	// -----------------------------------------

	// -----------------------------------------
	// PRIVATE METHODS
	// -----------------------------------------

}
