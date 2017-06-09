import { AbstractModel } from './AbstractModel';
import { Injectable } from '@angular/core';
import { AbstractLogger } from '../services/logger/AbstractLogger';
/**
 * Created by Alexader Hadzhimitov (kemozit@yahoo.com) on 09.06.2017.
 */
@Injectable()
export class ConfigurationsModel extends AbstractModel
{
	// -----------------------------------------
	// STATIC PROPERTIES/METHODS
	// -----------------------------------------

	// -----------------------------------------
	// PUBLIC PROPERTIES
	// -----------------------------------------

	public taksServiceConfigurations:{clientID:string, discoveryDocs:string[], scopes:string, apiKey:string};

	public signInStatus:boolean = false;

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
	public init():void
	{

		this.signInStatus = false;

		// TODO this should be externalized and configurable
		this.taksServiceConfigurations = {

			// Client ID and API key from the Developer Console
			clientID:'479750327461-ihenfgpdted8gvr0hc0i8rhg5ckudpj6.apps.googleusercontent.com',

			// Array of API discovery doc URLs for APIs used by the quick start
			discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/tasks/v1/rest"],

			// Authorization scopes required by the API; multiple scopes can be
			// included, separated by spaces.
			scopes: 'https://www.googleapis.com/auth/tasks',


			apiKey: "AIzaSyBRWA5IsLoU6PgObnFz5SjrO5qzOr5Cbqg"
		}

	}

	// -----------------------------------------
	// PROTECTED METHODS
	// -----------------------------------------

	// -----------------------------------------
	// PRIVATE METHODS
	// -----------------------------------------

}
