import { Component } from "@angular/core";
import { AbstractComponent } from '../AbstractComponent';
import { AbstractLogger } from '../../services/logger/AbstractLogger';
import { ConfigurationsModel } from '../../models/ConfigurationsModel';
import { InitializeTaskServiceCommand } from '../../controllers/InitializeTaskServiceCommand';
import { LoadTaskGroupsCommand } from '../../controllers/LoadTaskGroupsCommand';

/**
 * This is a workaround to get access to global gapi object, created by loaded GoogleAPI.js
 */
declare var gapi: any;

/**
 * Created by Alexader Hadzhimitov (kemozit@yahoo.com) on 09.06.2017.
 */
@Component({
	selector: "GoogleAuthSignComponent",
	template: `
        <button type="button" (click)="onSignInClickHandler()" [disabled]="configurationsModel.signInStatus">Sign In</button>
        <button type="button" (click)="onSignOutClickHandler()"  [disabled]="!configurationsModel.signInStatus">Sign 
			out</button>
        <button type="button" (click)="onLoadTasksClickHandler()" [disabled]="!configurationsModel.signInStatus" >Load Tasks</button>`

})
export class GoogleAuthSignComponent extends AbstractComponent
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
	public signInStatus: boolean;

	// -----------------------------------------
	// PROTECTED PROPERTIES
	// -----------------------------------------

	// -----------------------------------------
	// PRIVATE PROPERTIES
	// -----------------------------------------

	// -----------------------------------------
	// CONSTRUCTOR
	// -----------------------------------------

	constructor(logger: AbstractLogger,
				public configurationsModel: ConfigurationsModel,
				private initializeTaskServiceCommand: InitializeTaskServiceCommand,
				private loadTaskGroupsCommand:LoadTaskGroupsCommand)
	{
		super(logger);
	}

	// -----------------------------------------
	// PUBLIC METHODS
	// -----------------------------------------
	public onSignInClickHandler(): void
	{
		this.logger.view(this.constructor.name+".onSignInClickHandler");

		this.initializeTaskServiceCommand.execute();

	}

	public onSignOutClickHandler(): void
	{
		this.logger.view(this.constructor.name+".onSignOutClickHandler");

		//TODO this should also go into command
		this.configurationsModel.signInStatus = false;
		gapi.auth.signOut();

	}

	public onLoadTasksClickHandler():void
	{
		this.loadTaskGroupsCommand.execute();
	}

	// -----------------------------------------
	// PROTECTED METHODS
	// -----------------------------------------

	// -----------------------------------------
	// PRIVATE METHODS
	// -----------------------------------------
	// private initClientHandler():void
	// {
	//
	// 	gapi.client.init({
	// 		apiKey:this.configurationsModel.taksServiceConfigurations.apiKey,
	// 		discoveryDocs: this.configurationsModel.taksServiceConfigurations.discoveryDocs,
	// 		clientId: this.configurationsModel.taksServiceConfigurations.clientID,
	// 		scope: this.configurationsModel.taksServiceConfigurations.scopes
	// 	}).then(() =>
	// 	{
	// 		this.logger.log(this.constructor.name + ".", "Google API is here!");
	//
	// 		// this.googleTaskListsAPI = gapi.client.tasks.tasklists;
	// 		// this.googleTaskAPI = gapi.client.tasks.tasks;
	//
	// 		gapi.auth.signIn(
	// 			{
	// 				/**
	// 				 * Your OAuth 2.0 client ID that you obtained from the Google Developers Console.
	// 				 */
	// 				clientid: this.configurationsModel.taksServiceConfigurations.clientID,
	//
	// 				/**
	// 				 * A function in the global namespace, which is called when the sign-in button is rendered and also
	// 				 * called after a sign-in flow completes.
	// 				 */
	// 				callback: function(){console.log("test123",gapi.auth2.getAuthInstance().isSignedIn.get())},
	// 				/**
	// 				 * If true, all previously granted scopes remain granted in each incremental request, for
	// 				 * incremental authorization. The default value true is correct for most use cases; use false only
	// 				 * if employing delegated auth, where you pass the bearer token to a less-trusted component with
	// 				 * lower programmatic authority.
	// 				 */
	// 				includegrantedscopes: false,
	// 				/**
	// 				 * The OAuth 2.0 scopes for the APIs that you would like to use as a space-delimited list.
	// 				 */
	// 				scope: this.configurationsModel.taksServiceConfigurations.scopes,
	//
	// 				cookiepolicy: 'http://localhost:4500'
	//
	// 			})
	//
	// 	});
	// }

}
