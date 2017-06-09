import { logger } from 'codelyzer/util/logger';
import { AbstractLogger } from '../services/logger/AbstractLogger';
import { Injectable } from '@angular/core';
/**
 * Created by Alexader Hadzhimitov (kemozit@yahoo.com) on 04.06.2017.
 */
export class AbstractTasksModule
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
		logger.log(this.constructor.name+".constructor", "");
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
