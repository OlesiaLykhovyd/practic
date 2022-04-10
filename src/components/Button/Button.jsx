export const Button = ({ toggleVisibility, isVisiable }) => {
  return (
    <button type="button" onClick={toggleVisibility}>
      {isVisiable ? 'Hide films' : 'Show films'}
    </button>
  );
};
