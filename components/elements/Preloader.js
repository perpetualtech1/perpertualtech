import React from "react";

const Preloader = ({loading}) => {
  return (
    <>
      <div id="preloader-active" className={loading?"":"hidden"}>
        <div className="preloader flex-1 content-center">
          <div className="logo jump absolute inset-y-2/4">
            <img src="/assets/imgs/logos/favicon.png" alt="Monst" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Preloader;
