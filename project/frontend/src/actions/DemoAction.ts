import { getDemoURL } from 'utils/urls/DemoUrls';

export const getDemo = async () => {
	const response = await fetch(getDemoURL, {
		method: 'GET',
		headers: {
			Accept: 'application/json',
		},
	});
	return response.json();
};

export const postDemo = async (
	name: string,
	age: number,
	id: number | undefined,
) => {
	const response = await fetch(`${getDemoURL}/`, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			name,
			age,
			id,
		}),
	});
	return response.json();
};

export const deleteDemo = async (item: string) => {
	fetch(`${getDemoURL}/?id=${item}`, {
		method: 'DELETE',
	})
		.then(() => {
			console.log('removed');
		})
		.catch((err) => {
			console.error(err);
		});
};
