import Swal from "sweetalert2";
import GradientNavbar from "../GradienComponents/Navbr/GradientNavbar";
import Data from './Data';
import copy from '../../assets/copy.svg';

const BoxContainer = () => {

    const copied = (copy) => {
            navigator.clipboard.writeText(copy); 
            const Toast = Swal.mixin({
              toast: true,
              position: "top-end",
              showConfirmButton: false,
              timer: 1000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
              }
            });
            Toast.fire({
              icon: "success",
              title: `Copied`
            })
}

  return (
    <>
      <div>
        <GradientNavbar />
        <span className="flex text-center text-9xl pt-32 justify-center items-center font-bold ">
          Boxe Shadow
        </span>
        <div className="flex  justify-center items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-24 p-4">
            {Data.map((item, index) => (
              <div
                key={index}
                className=" w-56 flex justify-center items-center h-56"
                style={{ boxShadow: item.Box1 }}
              >
                <div
                  className="flex justify-center items-center w-full underline cursor-pointer "
                  onClick={() => copied(item.Box1)}
                >
                  <img src={copy} alt="" />#{item.id}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BoxContainer;
