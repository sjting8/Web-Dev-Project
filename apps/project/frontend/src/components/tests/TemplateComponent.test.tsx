/* eslint-disable import/no-extraneous-dependencies */
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import TransferProjectMessage from '../TemplateComponent';

test('renders no content', async () => {
	const { getByText, getByTestId } = render(
		<TransferProjectMessage content='test' />,
	);

	expect(getByTestId('test'));
	expect(getByText('test'));
});
