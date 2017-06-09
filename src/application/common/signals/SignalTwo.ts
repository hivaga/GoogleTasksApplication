import { Signal } from './Signal';
import { SignalBinding } from './SignalBinding';

export class SignalTwo<T, U> extends Signal
{

	public add(listener: (param1: T, param2: U, ...rest: any[]) => any, listenerContext?: any, priority?: number,
			   ...args: any[]): SignalBinding
	{
		return super.add(listener, listenerContext, priority, ...args);
	}

	public addOnce(listener: (param1: T, param2: U, ...rest: any[]) => any, listenerContext?: any, priority?: number,
				   ...args: any[]): SignalBinding
	{
		return super.addOnce(listener, listenerContext, priority, ...args);
	}

	public dispatch(param1: T, param2: U, ...params: any[]): boolean
	{
		return super.dispatch(param1, param2, ...params);
	}

	public has(listener: (param1: T, param2: U, ...rest: any[]) => any, context?: any): boolean
	{
		return super.has(listener, context);
	}

	public remove(listener: (param1: T, param2: U, ...rest: any[]) => any, context?: any): (param1: T, param2: U,
																							...rest: any[]) => any
	{
		return super.remove(listener, context) as (param1: T, param2: U, ...rest: any[]) => any;
	}

	public validateListener(listener: (param1: T, param2: U, ...rest: any[]) => any, fnName: string): void
	{
		super.validateListener(listener, fnName);
	}

}
