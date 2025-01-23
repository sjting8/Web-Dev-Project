/* eslint-disable import/no-extraneous-dependencies */
import { render } from '@testing-library/react';
import PageOne from '../PageOne';

test('renders PageOne', async () => {
	const { getByTestId } = render(
		<PageOne users={[{ id: 1, name: 'test', age: 1 }]} />,
	);
	expect(getByTestId('PageOne'));
});
