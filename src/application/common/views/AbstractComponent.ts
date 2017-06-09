import { AbstractLogger } from '../services/logger/AbstractLogger';
/**
 * Created by Alexader Hadzhimitov (kemozit@yahoo.com) on 04.06.2017.
 */
export class AbstractComponent
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
	protected logger:AbstractLogger;

	// -----------------------------------------
	// PRIVATE PROPERTIES
	// -----------------------------------------

	// -----------------------------------------
	// CONSTRUCTOR
	// -----------------------------------------

	constructor(logger:AbstractLogger)
	{
		this.logger = logger;
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
