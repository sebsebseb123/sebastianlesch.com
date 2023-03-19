export default function Bounce({ children, className }) {
  return (
    <span className={className}>
      {children.split('').map((letter, i) => {
        return (
          <span key={i} className="bounce-letter">
            {letter}
          </span>
        );
      }
      )}
    </span>
  );
}
