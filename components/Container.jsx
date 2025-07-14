export default function Container({ children }) {
  return (
    <div className="mx-5 sm:mx16 lg:mx-32 my-5 min-h-screen flex flex-col ">
      {children}
    </div>
  );
}
