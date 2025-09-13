const Error = ({ error }: { error: string }) => {
  return (
    <div className={`mt-2 text-center ${error ? "block" : "hidden"}`}>
      <p className="text-orange-600 tracking-widest font-normal">{error}</p>
    </div>
  );
};

export default Error;
