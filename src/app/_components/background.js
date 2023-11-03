const Background = ({ classes, children, gradientClass }) => {
  return (
    <div className={'absolute top-0 -z-10 container ' + classes}>
      {children}

      <div className={`absolute w-full h-full ${gradientClass}`} />
    </div>
  );
};

export default Background;
