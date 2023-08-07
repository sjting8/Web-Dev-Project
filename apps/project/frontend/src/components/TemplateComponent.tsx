interface props {
	content: string;
}

const TemplateComponent = ({ content }: props) => (
	<div data-testid='test' id='test'>
		<p>{content}</p>
	</div>
);

export default TemplateComponent;
