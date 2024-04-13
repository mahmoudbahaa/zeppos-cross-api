/* global Page */
import {
  testEmitCustomSystemEvent, testGetPackageInfo, testGetScene, testQueryPermission, testRequestPermission,
} from '../lib/api-tests/app';
import { showToast } from '../lib/api/ui';
import { TestSreen } from '../lib/TestScreen';

function reqPermCB(result) {
	showToast({text: JSON.stringify(result)});
}

Page({
	onInit() {
		new TestSreen().start({
			getPackageInfo: () => testGetPackageInfo(),
			getScene: () => testGetScene(),
			queryPermission: () => testQueryPermission(['device:os.ble', 'device:unkown_premission', 'data:user.info']),
			requestPermission: () => testRequestPermission(['device:os.ble', 'device:unkown_premission', 'device:os.bg_service'], result => reqPermCB(result)),
			emitCustomSystemEvent: () => testEmitCustomSystemEvent(),
		});
	},
});
