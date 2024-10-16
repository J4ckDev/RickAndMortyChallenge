import PropTypes from 'prop-types';

export const Badge = ({
    text
}) => {

    return (
        <p className="inline-flex items-center rounded-full py-0.5 px-3 text-sm font-semibold bg-secondary-100 text-secondary-700">{text}</p>
    );
}

Badge.propTypes = {
    text: PropTypes.string.isRequired,
}