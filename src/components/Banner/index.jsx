import React from "react";

export default ({img}) => {
  return (
    <section>
      <div className="mt-10 w-full h-32">
        <img src={img} className="w-full h-full" />
      </div>
    </section>
  );
};
