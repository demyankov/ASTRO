export const Line = ({ progressLine: width }: { progressLine: number }) => (
  <div
    style={{ width: `${width}%` }}
    className={`max-w-[${width}%] absolute bg-gradient-to-r from-white to-[#7000ff] h-[4px] transition-[width] ease-in-out duration-700 delay-75 mb-6 sm:mb-10`}
  />
);
