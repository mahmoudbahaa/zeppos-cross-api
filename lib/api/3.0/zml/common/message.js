import {buf2bin, buf2json, buf2str} from '../../zeppos/data';

const requestTimeout = 60000;

const DEBUG = false;

const HM_RPC = 'hmrpcv1';

const MessagePayloadDataTypeOp = {
	EMPTY: 0x0,
	TEXT: 0x1,
	JSON: 0x2,
	BIN: 0x3,
};

function isPlainObject(item) {
	return (
		typeof item === 'object'
    && !Buffer.isBuffer(item)
    && !Array.isArray(item)
    && item !== null
	);
}

export function wrapperMessage(messageBuilder, logger) {
	return {
		requestTimeout,
		transport: messageBuilder,
		onCall(cb) {
			if (!cb) {
				return this;
			}

			messageBuilder.on('call', ({contentType, payload}) => {
				switch (contentType) {
					case MessagePayloadDataTypeOp.JSON:
						payload = buf2json(payload);
						break;
					case MessagePayloadDataTypeOp.TEXT:
						payload = buf2str(payload);
						break;
					case MessagePayloadDataTypeOp.BIN:
					default:
						payload = buf2bin(payload);
						break;
				}

				cb && cb(payload);
			});

			return this;
		},
		offOnCall(cb) {
			messageBuilder.off('call', cb);
			return this;
		},
		call(data) {
			data = isPlainObject(data)
				? data.contentType
					? data
					: {
						jsonrpc: HM_RPC,
						...data,
					}
				: data;
			return messageBuilder.call(data);
		},
		onRequest(cb) {
			if (!cb) {
				return this;
			}

			messageBuilder.on('request', ctx => {
				let {payload} = ctx.request;

				switch (ctx.request.contentType) {
					case MessagePayloadDataTypeOp.JSON:
						payload = buf2json(payload);
						break;
					case MessagePayloadDataTypeOp.TEXT:
						payload = buf2str(payload);
						break;
					case MessagePayloadDataTypeOp.BIN:
					default:
						payload = buf2bin(payload);
						break;
				}

				cb
          && cb(payload, (error, data, opts = {}) => {
          	if (
          		ctx.request.contentType === MessagePayloadDataTypeOp.JSON
              && payload?.jsonrpc === HM_RPC
          	) {
          		if (error) {
          			return ctx.response({
          				data: {
          					jsonrpc: HM_RPC,
          					error,
          				},
          			});
          		}

          		return ctx.response({
          			data: {
          				jsonrpc: HM_RPC,
          				result: data,
          			},
          		});
          	}

          	return ctx.response({
          		data,
          		...opts,
          	});
          });
			});

			return this;
		},
		cancelAllRequest() {
			messageBuilder.off('response');
			return this;
		},
		offOnRequest(cb) {
			messageBuilder.off('request', cb);
			return this;
		},
		request(data, opts = {}) {
			DEBUG
        && logger.debug(
        	'current request count=>%d',
        	messageBuilder.getRequestCount(),
        );

			data = isPlainObject(data)
				? opts.contentType
					? data
					: {
						jsonrpc: HM_RPC,
						...data,
					}
				: data;

			return messageBuilder
				.request(data, {
					timeout: this.requestTimeout,
					...opts,
				})
				.then(payload => {
					if (!isPlainObject(payload) || payload.jsonrpc !== HM_RPC) {
						return payload;
					}

					// Hmrpc
					const {error, result} = payload;
					if (error) {
						throw error;
					}

					return result;
				});
		},
		// 设备接口
		connect() {
			messageBuilder.connect(() => {
				DEBUG
          && logger.debug('DeviceApp messageBuilder connect with SideService');
			});
			return this;
		},
		disConnect() {
			this.cancelAllRequest();
			this.offOnRequest();
			this.offOnCall();
			messageBuilder.disConnect(() => {
				DEBUG && logger.debug('DeviceApp messageBuilder disconnect SideService');
			});
			return this;
		},
		// 伴生服务接口
		start() {
			messageBuilder.listen(() => {
				DEBUG
          && logger.debug(
          	'SideService messageBuilder start to listen to DeviceApp',
          );
			});
			return this;
		},
		stop() {
			this.cancelAllRequest();
			this.offOnRequest();
			this.offOnCall();
			messageBuilder.disConnect(() => {
				DEBUG
          && logger.debug('SideService messageBuilder stop to listen to DeviceApp');
			});
			return this;
		},
	};
}
