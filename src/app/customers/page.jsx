import CustomerTableComponent from "@/components/CustomerTableComponent";

export default function Page() {
  return (
    <>
      <div className=" flex flex-col justify-between max-h-screen items-center border-black-100 border-solid  ">
        <CustomerTableComponent />
      </div>
    </>
  );
}
