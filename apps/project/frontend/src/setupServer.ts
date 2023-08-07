/* eslint-disable import/no-extraneous-dependencies */
import 'whatwg-fetch';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { getDemoURL } from 'utils/urls/DemoUrls';

const server = setupServer(
	rest.get(getDemoURL, (req, res, ctx) =>
		res(
			ctx.json({
				demo: 'Test',
			}),
		),
	),
);

export default server;
