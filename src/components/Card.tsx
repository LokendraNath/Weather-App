const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-[90%] max-w-[470px] bg-gradient-to-tr from-[#9796f0] to-[#fbc7d4] text-white mt-20 mx-auto rounded-md p-6 text-center shadow-xl">
      {children}
    </div>
  );
};

export default Card;
