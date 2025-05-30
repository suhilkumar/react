import PropTypes from 'prop-types';

const Button = ({
	rounded,
	outline,
	children,
	primary,
	success,
	warning,
	danger,
	secondary,
}) => {
	return <button>{children}</button>;
};

Button.propTypes = {
	primary: PropTypes.bool,
	secondary: PropTypes.bool,
	success: PropTypes.bool,
	warning: PropTypes.bool,
	danger: PropTypes.bool,
	customValidationOnProp: ({
		primary,
		secondary,
		success,
		warning,
		danger,
	}) => {
		const count =
			Number(!!primary) +
			Number(!!secondary) +
			Number(!!success) +
			Number(!!warning) +
			Number(!!danger);
		console.log(count);
		if (count > 1) {
			return new Error('Only one type is selected');
		}
	},
};

export default Button;
