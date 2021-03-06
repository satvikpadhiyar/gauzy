import { TimeSlotCreateHandler } from './time-slot-create.handler';
import { TimesheetCreateHandler } from './timesheet-create.handler';
import { TimesheetGetHandler } from './timesheet-get.handler';
import { ScreenshotCreateHandler } from './screenshot-create.handler';
import { ActivityCreateHandler } from './activity-create.handler';

export const CommandHandlers = [
	TimeSlotCreateHandler,
	TimesheetCreateHandler,
	TimesheetGetHandler,
	ScreenshotCreateHandler,
	ActivityCreateHandler
];
