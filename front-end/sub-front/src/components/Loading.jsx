import React from "react";
const Loading = ({ loading }) => {
  return (
    <div className="fixed top-0 left-0 ">
      {!loading && (
        <div className="w-screen h-screen z-50  ">
          <div className="fixed top-0 left-0 w-full h-full bg-black/80 opacity-80 flex items-center justify-center ">
            <img
              className="w-[50%] h-[50%]"
              src="https://img.pikbest.com/png-images/20190918/cartoon-snail-loading-loading-gif-animation_2734139.png!bw700"
              alt="loading"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Loading;
