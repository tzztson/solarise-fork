const Ellipse = (props: ellipseType) => {
  return (
    <div
      className={`rounded-full animate-pulse hidden md:block
      ${
        props.gradient
          ? 'bg-gradient-to-t from-[#5480BE] to-[#5480BE] opacity-60 lg:opacity-100'
          : 'bg-[#794CE] blur-[150px] rotate-[48deg] w-[254px] h-[600px] opacity-30 lg:opacity-60'
      }`}
      style={{
        width: props.width + 'px',
        height: props.height + 'px',
      }}
    ></div>
  );
};

interface ellipseType {
  width?: number;
  height?: number;
  blur?: number;
  gradient?: boolean;
}
export default Ellipse;
