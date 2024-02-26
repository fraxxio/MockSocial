import React from "react";

const page = () => {
  return (
    <div className='container mt-40 py-4 border border-gray-500 border-opacity-30 rounded-md bg-slate-900'>
      <h1 className='text-2xl text-center font-semibold pb-4'>How to use the app?</h1>
      <ul className='list-disc'>
        <li>
          <p>For best results use a device with 1920x1080 resolution.</p>
        </li>
        <li>
          <p>
            Select the social media platform on the home page, then choose which type of image to
            generate on the top navigation.
          </p>
        </li>
        <li>
          <p>
            On the left there will be a preview window where you can see how the picture will look
            like. On the right there will be a form where you can change the values of the picture
            like username or profile picture.
          </p>
        </li>
        <li>
          <p>If you don't want to change the value you can leave the default.</p>
        </li>
        <li>
          <p>If you want the value to be hidden leave text field empty or enter a number 0.</p>
        </li>
        <li>
          <p>
            After you enter your data press <b>Generate picture</b> button, and generated picture
            will appear below preview window.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default page;
