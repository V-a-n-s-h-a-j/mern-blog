import { Button } from "flowbite-react";
import React from "react";

export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="flex-1 justify-center flex flex-col ">
        <h2 className="text-2xl ">Want to learn more about my projects?</h2>
        <p className="text-gray-500 my-2 ">
          Checkout these projects repositories!
        </p>
        <Button
          gradientDuoTone="purpleToPink"
          className="rounded-tl-xl rounded-bl-none"
        >
          <a
            href="https://github.com/V-a-n-s-h-a-j"
            target="_blank"
            rel="noopener "
          >
            {" "}
            Github V-a-n-s-h-a-j
          </a>
        </Button>
      </div>
      <div className="p-7 flex-1">
        <img
          src="https://www.mwanmobile.com/wp-content/uploads/2022/09/image-7.png"
          alt=""
        />
      </div>
    </div>
  );
}
