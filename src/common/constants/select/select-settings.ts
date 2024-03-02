import { StylesConfig } from 'react-select';

const colorStyles: StylesConfig = {
    container: (provided) => ({
        ...provided,
        border: '1px solid #e5e5e5',
        borderRadius: '5px',
    }),
    option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isFocused ? '#3bfdb0' : 'white',
        color: state.isFocused ? 'white' : 'black',
        transition: '0.3s',
        cursor: 'pointer',
    }),

    valueContainer: (provided) => ({
        ...provided,
        padding: '0 10px',
    }),
};

export { colorStyles };
