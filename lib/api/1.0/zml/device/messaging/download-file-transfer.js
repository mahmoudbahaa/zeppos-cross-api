export function downloadAndTransfer(data, opts = {}) {
	return this.messaging.request(
		{
			method: 'download.transfer',
			params: data,
		},
		opts,
	);
}
