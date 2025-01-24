import PropTypes from 'prop-types';

const Button = ({ children, onClick, type = 'button', textColor = 'white', className = '' }) => {
    const textColorClass = textColor === 'black' ? 'text-accentBlack' : 'text-secondaryWhite';

    return (
        <button
            type={type}
            onClick={onClick}
            className={`w-[330px] h-[50px] rounded-full text-16 font-bold bg-primaryPurple ${textColorClass} hover:bg-primaryPurple/90 focus:outline-none focus:ring-2 focus:ring-primaryPurple focus:ring-opacity-50 max-w-[334px] mx-auto ${className}`}
        >
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    type: PropTypes.string,
    textColor: PropTypes.oneOf(['white', 'black']),
    className: PropTypes.string,
};
export default Button;

