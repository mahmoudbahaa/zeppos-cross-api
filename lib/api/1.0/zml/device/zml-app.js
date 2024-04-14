import { appPlugin as messagingPlugin } from './messaging/app-plugin.js';

function BaseApp(option) {
	const messagingPlug = messagingPlugin(option);
	return {
		...option,
		...messagingPlug,
    sendFile(path, opts) { throw new Error("File Transfer need API_LEVEL 3.0") },
		onCreate(...opts) {
			messagingPlug.onCreate.apply(this);
			option.onCreate?.apply(this, opts);
		},
		onDestroy(...opts) {
			option.onDestroy?.apply(this, opts);
			messagingPlug.onDestroy.apply(this);
		},
	};
}

export { BaseApp };

