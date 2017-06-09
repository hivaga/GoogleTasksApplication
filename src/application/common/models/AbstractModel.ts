import { AbstractLogger } from '../services/logger/AbstractLogger';
/**
 * Created by Alexader Hadzhimitov (kemozit@yahoo.com) on 09.06.2017.
 */
export abstract class AbstractModel
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

		this.logger.model(this.constructor.name+".constructor", "");

		this.init();
	}

	// -----------------------------------------
	// PUBLIC METHODS
	// -----------------------------------------
	public abstract  init():void

	// -----------------------------------------
	// PROTECTED METHODS
	// -----------------------------------------

	// -----------------------------------------
	// PRIVATE METHODS
	// -----------------------------------------

}
