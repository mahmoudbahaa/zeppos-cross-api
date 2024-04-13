/* eslint-disable camelcase */
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import terser from '@rollup/plugin-terser';

const plugins = [];

if (process.env.NODE_ENV === 'production') {
	plugins.push(
		terser({
			compress: {
				passes: 3,
				toplevel: true,
				drop_console: true,
				pure_funcs: [],
				global_defs: {
					__PROD__: true,
				},
			},
		}),
	);
}

const API_LEVELS = ['1.0', '2.0', '3.0'];
const modules = [
	'alarm.js',
	'app-service.js',
	'app.js',
	'ble.js',
	'bleTransferFile.js',
	'device.js',
	'display.js',
	'fs.js',
	'i18n.js',
	'interaction.js',
	'media.js',
	'notification.js',
	'page.js',
	'router.js',
	'sensor.js',
	'settings.js',
	'storage.js',
	'transfer-file.js',
	'ui.js',
	'user.js',
	'utils.js',
	'zeppos/device-polyfill.js',
	'zeppos/data.js',
	'zeppos/message-side.js',
	'zeppos/message.js',
	'zml/device/zml-app.js',
	'zml/device/zml-page.js',
	'zml/side/zml-side-service.js',
];

const exports = [];

modules.forEach(module => {
	API_LEVELS.forEach(apiLevel => {
		exports.push({
			input: 'lib/api/' + apiLevel + '/' + module,
			output: {
				file: 'dist/' + apiLevel + '/' + module,
				format: 'es',
				plugins,
			},
			plugins: [
				replace({
					preventAssignment: true,
					__DEBUG__: process.env.NODE_ENV === 'production' ? undefined : true,
					__API_LEVEL__: '\'1.0\'',
				}),
				nodeResolve(),
				commonjs(),
			],
		});
	});
});
export default exports;

// Alias({
//   entries: [
//     {find: 'lib/api/': 'lib/api/' + apiLevel + ""},
//     {find: './promise.js', replacement: './promise-1.0.js'},
//     {find: './buffer.js', replacement: './buffer-1.0.js'},
//   ],
// }),
