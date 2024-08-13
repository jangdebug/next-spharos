export default function JasonButton ({
  buttonTitle = "Button" ,
  className,
  type
}:{
  buttonTitle?: string,
  className?: string,
  type?: 'button' | 'submit' | 'reset' | undefined
}) {
  return (
    <button className={className} type={type}>{buttonTitle}</button>    
  );
}