import {
	GoogleResponseVO, GoogleTaskListResourceVO, GoogleTaskListResponseVO, GoogleTasksAPI,
	GoogleTasksListAPI, GoogleTaskVO
} from './GoogleTasksAPI';
import { TaskVO } from '../../../models/vo/TaskVO';
import { AbstractLogger } from '../../logger/AbstractLogger';
import { AbstractTasksService } from '../AbstractTasksService';
import { Injectable } from '@angular/core';

/**
 * This is a workaround to get access to global gapi object, created by loaded GoogleAPI.js
 */
declare var gapi: any;

/**
 * This is a service which connects to Google Tasks API, when started
 * Created by Alexader Hadzhimitov (kemozit@yahoo.com) on 07.06.2017.
 */
@Injectable()
export class GoogleTasksService extends AbstractTasksService
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
	// Client ID and API key from the Developer Console
	private clientID:string;

	// Array of API discovery doc URLs for APIs used by the quickstart
	private discoveryDocs:string[] = [];

	// Authorization scopes required by the API; multiple scopes can be
	// included, separated by spaces.
	private scopes:string;

	private apiKey:string;


	private googleTaskListsAPI: GoogleTasksListAPI;
	private googleTaskAPI: GoogleTasksAPI;

	// -----------------------------------------
	// CONSTRUCTOR
	// -----------------------------------------

	constructor(logger: AbstractLogger)
	{
		super(logger);


	}

	// -----------------------------------------
	// PUBLIC METHODS
	// -----------------------------------------

	public connect(clientID:string, discoveryDocs:string[], scopes:string, apiKey:string):void
	{
		this.clientID = clientID;
		this.discoveryDocs = discoveryDocs;
		this.scopes = scopes;
		this.apiKey = apiKey

		gapi.load('client:auth2', () => this.initClientHandler());
	}


	public addTask(parentTaskVO: TaskVO, taskVO: TaskVO): any
	{
		let p: Promise<boolean> = new Promise((resolve, reject) =>
		{
			this.googleTaskAPI.insert(this.convertTaskVOtoGoogleTaskVO(taskVO), {taskListID: parentTaskVO.id})
				.then(
					(response) =>
					{
						if (response)
						{
							this.logger.log(this.constructor.name+".", response);
						}
					})

		});

		return p;
	}

	public addTasksList(taskVO: TaskVO): Promise<boolean>
	{
		let p: Promise<boolean> = new Promise((resolve, reject) =>
		{
			this.googleTaskListsAPI.insert(this.convertTaskVOtoGoogleTaskListResourceVO(taskVO))
				.then(
					(response) =>
					{
						if (response.status == 200)
						{
							resolve(true);
						} else
						{
							resolve(false);
						}
					})

		});

		return p;
	}


	public deleteTask(taskVO: TaskVO): any
	{

	}

	public deleteTasksList(taskVO: TaskVO): Promise<boolean>
	{
		let p: Promise<boolean> = new Promise<boolean>((resolve, reject) =>
		{
			this.googleTaskListsAPI.delete({tasklist: taskVO.id})
				.then(
					(response) =>
					{
						console.log("delete result", response);
						resolve(true);
					})

		});

		return p;
	}

	/**
	 * Return a list with existing Google Task Lists. A Task List is a group of tasks.
	 * @returns {Promise<Array<TaskVO>>}
	 */
	public listTasksList(): Promise<Array<TaskVO>>
	{
		let p: Promise<Array<TaskVO>> = new Promise<Array<TaskVO>>(
			(resolve, reject) =>
			{

				this.googleTaskListsAPI.list().then((response) =>
				{
					resolve(this.convertGoogleTaskListArray(response.result.items));
				})
			}
		);

		return p;
	}

	// -----------------------------------------
	// PROTECTED METHODS
	// -----------------------------------------

	// -----------------------------------------
	// PRIVATE METHODS
	// -----------------------------------------
	private initClientHandler(): void
	{

		gapi.client.init({
			apiKey:this.apiKey,
			discoveryDocs: this.discoveryDocs,
			clientId: this.clientID,
			scope: this.scopes
		}).then(() =>
		{
			this.logger.log(this.constructor.name + ".", "Google API is here!");

			this.googleTaskListsAPI = gapi.client.tasks.tasklists;
			this.googleTaskAPI = gapi.client.tasks.tasks;

			this.checkSignIn();

		});
	}

	private checkSignIn():void
	{
		let signInStatus = !gapi.auth2.getAuthInstance().isSignedIn.get();

		if(!signInStatus)
		{
			gapi.auth.signIn(
				{
					/**
					 * Your OAuth 2.0 client ID that you obtained from the Google Developers Console.
					 */
					clientid: this.clientID,

					/**
					 * A function in the global namespace, which is called when the sign-in button is rendered and also
					 * called after a sign-in flow completes.
					 */
					callback: this.signInCompleteHandler.bind(this),
					/**
					 * If true, all previously granted scopes remain granted in each incremental request, for
					 * incremental authorization. The default value true is correct for most use cases; use false only
					 * if employing delegated auth, where you pass the bearer token to a less-trusted component with
					 * lower programmatic authority.
					 */
					includegrantedscopes: false,
					/**
					 * The OAuth 2.0 scopes for the APIs that you would like to use as a space-delimited list.
					 */
					scope: this.scopes,

					cookiepolicy: 'http://localhost:4500'

				})
		}else{
			this.onConnected.dispatch(true);
		}

	}

	private signInCompleteHandler(signInData?:any)
	{
		this.logger.log(this.constructor.name+".signInCompleteHandler signInData.status:", signInData.status.signed_in);
		this.onConnected.dispatch(signInData.status.signed_in);
	}


	private convertGoogleTaskListArray(list: Array<GoogleTaskListResourceVO>): Array<TaskVO>
	{
		let a: Array<TaskVO> = [];

		if (!list)
		{
			this.logger.error(this.constructor.name+".convertGoogleTaskListArray", "Received invalid data!", list);
			return a;
		}
		//this.logger.log(this.constructor.name+".convertGoogleTaskListArray", "Convert array:", list);


		list.forEach((item: GoogleTaskListResourceVO) =>
		{
			a.push(new TaskVO(item.title, item.id, new Date(item.updated)));
		});

		return a;

	}

	private convertTaskVOtoGoogleTaskListResourceVO(vo: TaskVO): GoogleTaskListResourceVO
	{
		var o: GoogleTaskListResourceVO = {title: vo.title};

		if (vo.id)
		{
			o.id = vo.id;
		}

		if (vo.date)
		{
			o.updated = vo.date.toString();
		}

		return o;
	}

	private convertTaskVOtoGoogleTaskVO(vo: TaskVO): GoogleTaskVO
	{
		var o: GoogleTaskVO = {title: vo.title};

		return o;
	}
}
