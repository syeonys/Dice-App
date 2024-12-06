
import '../styles/Button.css'

function Button({ children,onClick }) {

  return (
    <div>
      <button className='Button' onClick={onClick}>{children}</button>
    </div>
  );
}

export default Button;
