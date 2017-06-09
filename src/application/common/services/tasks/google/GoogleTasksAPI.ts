/**
 * Created by Alexader Hadzhimitov (kemozit@yahoo.com) on 06.06.2017.
 *
 * This are the types returned by the gapi.clien.tasks API. This are only the type declarations
 * all the logic is inside the loaded JS file ./libs/googleAPI.js (which is actually a download of
 * https://apis.google.com/js/api.js
 */

export type TASK_LIST_RESOURCE_KIND = "tasks#taskList";

export type GoogleTaskListResourceVO = {
	kind?: TASK_LIST_RESOURCE_KIND,
	id?: string,
	title: string,
	updated?: string,
	etag?: string,
	selfLink?: string,
}

export type GoogleTaskListResponseVO = {
	kind: TASK_LIST_RESOURCE_KIND,
	etag: string,
	nextPageToken: string,
	items: Array<GoogleTaskListResourceVO>
}

export type GoogleTaskResponseVO = {
	kind: TASK_LIST_RESOURCE_KIND,
	etag: string,
	nextPageToken: string,
	items: Array<GoogleTaskVO>
}

export type GoogleTaskVO = {
	kind?: TASK_LIST_RESOURCE_KIND,
	id?: string,
	etag?: string,
	title?: string,
	updated?: string,
	selfLink?: string,
	parent?: string,
	position?: string,
	notes?: string,
	status?: string,
	due?: number,
	completed?: number,
	deleted?: boolean,
	hidden?: boolean,
	links?: Array<{
		type: string,
		description: string,
		link: string
	}>
}

export type GoogleResponseVO<T> = {
	body: any,
	headers: any,
	result: T,
	status: number,
	statusText: string
}

export abstract class GoogleTasksListAPI
{
	public abstract list(params?: { maxResults?: number }): Promise<GoogleResponseVO<GoogleTaskListResponseVO>>;


	public abstract get(params: {tasklist: string}): Promise<GoogleTaskListResourceVO>;

	/**
	 * Returns empty object when successful.
	 *
	 */
	public abstract delete(any:any):  Promise<GoogleResponseVO<GoogleTaskListResponseVO>>;

	/**
	 * Returns empty object when successful.
	 *
	 */
	public abstract insert(tasklistVO:GoogleTaskListResourceVO): Promise<GoogleResponseVO<GoogleTaskListResourceVO>>;

	public abstract patch(tasklistVO:GoogleTaskListResourceVO): GoogleTaskListResourceVO

	public abstract update(tasklistVO:GoogleTaskListResourceVO): GoogleTaskListResourceVO

}

export abstract class GoogleTasksAPI
{
	/**
	 * Returns all tasks in the specified task list.
	 *
	 * @param taskListID
	 * @param completedMax
	 * @param completedMin
	 * @param dueMax
	 * @param dueMin
	 * @param maxResults
	 * @param pageToken
	 * @param showCompleted
	 * @param showDeleted
	 * @param showHidden
	 * @param updatedMin
	 */
	public abstract list(taskListID: string,
						 completedMax?: string,
						 completedMin?: string,
						 dueMax?: string,
						 dueMin?: string,
						 maxResults?: number,
						 pageToken?: string,
						 showCompleted?: boolean,
						 showDeleted?: boolean,
						 showHidden?: boolean,
						 updatedMin?: string): Promise<GoogleTaskResponseVO>;

	/**
	 * Returns the specified task.
	 *
	 * @param taskID
	 * @param taskListID
	 */
	public abstract get(taskID: string, taskListID: string): Promise<GoogleTaskVO>;

	/**
	 * Clears all completed tasks from the specified task list. The affected tasks will be marked as 'hidden' and no
	 * longer be returned by default when retrieving all tasks for a task list.
	 *
	 *
	 * @param taskListID
	 */
	public abstract clear(taskListID: string): Promise<any>;

	/**
	 * Deletes the specified task from the task list.
	 *
	 * @param taskID
	 * @param taskListID
	 */
	public abstract delete(taskID: string, taskListID: string): Promise<any>;


	/**
	 * Creates a new task on the specified task list.
	 *
	 * @param taskListID
	 * @param parentTaskID - Parent task identifier. If the task is created at the top level, this parameter is
	 * omitted. Optional.
	 * @param previousSiblingTaskID - Previous sibling task identifier. If the task is created at the first position
	 *     among its siblings, this parameter is omitted. Optional.
	 */
	public abstract insert(taskVO: GoogleTaskVO,params:{taskListID: string,
						   parentTaskID?: string,
						   previousSiblingTaskID?: string}): Promise<GoogleTaskResponseVO>


	/**
	 * Moves the specified task to another position in the task list. This can include putting it as a child task under
	 * a new parent and/or move it to a different position among its sibling tasks.
	 *
	 * @param taskID
	 * @param taskListID
	 * @param parentTaskID
	 * @param previousSiblingTaskID
	 */
	public abstract move(taskID: string,
						 taskListID: string,
						 parentTaskID?: string,
						 previousSiblingTaskID?: string): Promise<GoogleTaskResponseVO>


	/**
	 * Updates the specified task.
	 *
	 * @param taskID
	 * @param taskListID
	 */
	public abstract update(taskID: string,
						   taskListID: string): Promise<GoogleTaskResponseVO>

	/**
	 * Updates the specified task. This method supports patch semantics.
	 *
	 * @param taskID
	 * @param taskListID
	 */
	public abstract patch(taskID: string,
						  taskListID: string): Promise<GoogleTaskResponseVO>

}

