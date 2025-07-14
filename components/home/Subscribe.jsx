export default function Subscribe() {
  return (
    <>
      <div className="flex justify-center items-center flex-col gap-3">
        <h1 className="text-2xl sm:text-3xl font-semibold text-[#374151]">
          Subscribe now & get 20% off
        </h1>
        <p className="text-[#888e99] text-sm sm:text-l text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <div className="mt-8 flex sm:w-[700px]">
          <input
            className="box-border border border-[#d3d5d9] px-6 sm:px-10 text-xs sm:text-sm py-4 rounded-l-md flex-1 "
            type="email"
            placeholder="Enter your email id"
          />
          <button
            type="submit"
            className="bg-[#ea580b] text-white px-6 sm:px-10 text-xs py-4 rounded-r-md sm:text-sm font-medium tracking-wide cursor-pointer"
          >
            Subscribe
          </button>
        </div>
      </div>
    </>
  );
}
