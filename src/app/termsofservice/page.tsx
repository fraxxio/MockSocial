import React from "react";

const page = () => {
  return (
    <div className='container max-w-[60rem] mt-6 py-4 border border-gray-500 border-opacity-30 rounded-md dark:bg-slate-900 leading-7 bg-slate-300'>
      <h1 className='text-2xl text-center font-semibold pb-4'>Terms of service</h1>
      <p className='whitespace-pre-line pb-4'>
        Welcome to MockSocial! These Terms of Service govern your use of our website and services.
        By accessing or using MockSocial, you agree to be bound by these Terms of Service.
      </p>
      <h2 className='text-center text-xl font-semibold pb-3'>Usage Policy</h2>
      <p className='pb-2'>
        MockSocial is intended to be used for generating fake social media post images for
        non-ill-intent purposes only. By using MockSocial, you agree to adhere to the following
        rules:
      </p>
      <ul className='list-decimal list-inside pb-4'>
        <li>
          <b>Lawful and Ethical Use:</b> You agree to use MockSocial lawfully and ethically. Do not
          use generated images for malicious purposes such as harassment, attacks, incitement of
          violence, slander, threats, disparagement, intimidation, or any other harmful actions
          against individuals or entities.
        </li>
        <li>
          <b>Misuse of Generated Images:</b> Do not use generated images as evidence in any context
          except for demonstrating the misuse of MockSocial itself.
        </li>
        <li>
          <b>False Information:</b> Do not use generated images to spread false information or
          present them as factual.
        </li>
        <li>
          <b>Disclosure:</b> You agree to clearly indicate to viewers that generated images are not
          authentic and are intended for entertainment or illustrative purposes only.
        </li>
      </ul>
      <h2 className='text-center text-xl font-semibold pb-3'>Liability</h2>
      <p className='pb-2'>
        While MockSocial strives to provide a useful and enjoyable service, we cannot be held liable
        for the actions of our users or the content they create. By using MockSocial, you agree to
        the following:
      </p>
      <ul className='list-decimal list-inside pb-4'>
        <li>
          <b>User Responsibility:</b> You are solely responsible for any content you generate using
          MockSocial.
        </li>
        <li>
          <b>Disclaimer of Liability:</b> MockSocial disclaims all responsibility for any loss,
          injury, claim, liability, or damage of any kind resulting from your use of the website. We
          are not liable for any direct, indirect, incidental, special, consequential, or punitive
          damages arising from or related to your use of MockSocial.
        </li>
      </ul>
      <p>
        Please use MockSocial responsibly and in accordance with these Terms of Service. Thank you
        for using MockSocial!
      </p>
    </div>
  );
};

export default page;
