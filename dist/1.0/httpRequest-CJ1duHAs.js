function downloadAndTransfer(data, opts = {}) {
	return this.messaging.request(
		{
			method: 'download.transfer',
			params: data,
		},
		opts,
	);
}

function httpRequest(data, opts = {}) {
  return this.messaging.request(
    {
      method: 'http.request',
      params: data,
    },
    opts,
  )
}

export { downloadAndTransfer as d, httpRequest as h };
