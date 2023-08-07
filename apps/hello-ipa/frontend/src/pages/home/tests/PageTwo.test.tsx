/* eslint-disable import/no-extraneous-dependencies */
import { render } from '@testing-library/react';
import PageTwo from '../PageTwo';

test('renders PageTwo', async () => {
	const { getByTestId } = render(
		<PageTwo users={[{ id: 1, name: 'test', age: 1 }]} />,
	);
	expect(getByTestId('PageTwo'));
});
