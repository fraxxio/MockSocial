"use client";
import GeneratedImg from "@/components/GeneratedImg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useFormContext } from "@/context/FormContext";
import Image from "next/image";
import React from "react";

const MessagePic = () => {
  const { fbMessageForm, postPath, profilePath, msgImg, generatedImg } = useFormContext();
  return (
    <div className='flex flex-col gap-6'>
      <div className='border-gray-500 border-opacity-40 border rounded-sm p-2 flex flex-col items-center'>
        <h1 className='text-lg font-semibold text-center pb-3'>Preview:</h1>
        <div
          id='FacebookMessage'
          className={`w-[70%] h-fit ${
            fbMessageForm.theme === "dark" ? "bg-[#242526]" : "bg-white"
          }`}
        >
          <div
            className={`flex items-center justify-between p-3 border-b ${
              fbMessageForm.theme === "light" ? "border-gray-300" : "border-[#2f3031]"
            }`}
          >
            <div className='flex gap-3'>
              <Avatar className='h-9 w-9'>
                <AvatarImage src={profilePath || "/Logo.png"} />
                <AvatarFallback>MS</AvatarFallback>
              </Avatar>
              <div className='flex items-center gap-2'>
                <p
                  className={`font-semibold truncate max-w-[15rem] ${
                    fbMessageForm.theme === "light" ? "text-black" : null
                  }`}
                >
                  {fbMessageForm.username}
                </p>
                <svg height='12px' viewBox='0 0 18 10' width='12px'>
                  <path
                    d='M1 2.414A1 1 0 012.414 1L8.293 6.88a1 1 0 001.414 0L15.586 1A1 1 0 0117 2.414L9.707 9.707a1 1 0 01-1.414 0L1 2.414z'
                    fill='#0084ff'
                  ></path>
                </svg>
              </div>
            </div>
            <div className='flex gap-3 items-center'>
              <svg viewBox='0 0 12 13' width='17' height='17' fill='#0084ff'>
                <g stroke='none'>
                  <path
                    d='M109.492 925.682a1.154 1.154 0 0 0-.443-.81 10.642 10.642 0 0 0-1.158-.776l-.211-.125c-.487-.29-.872-.514-1.257-.511a3.618 3.618 0 0 0-.693.084c-.304.07-.6.302-.88.69a3.365 3.365 0 0 0-.297.494l.449.22-.507-.202-.13-.074a8.53 8.53 0 0 1-3.04-3.043l-.071-.124.019-.057v-.001c.168-.083.334-.183.492-.297.162-.117.552-.432.681-.842.063-.2.075-.407.086-.59l.007-.116c.029-.389-.197-.764-.482-1.237l-.153-.256c-.322-.55-.6-.933-.775-1.158a1.155 1.155 0 0 0-.811-.443c-.36-.031-1.066.01-1.748.608-1.018.896-1.326 2.25-.845 3.714a11.734 11.734 0 0 0 2.834 4.612 11.732 11.732 0 0 0 4.61 2.833c.455.149.897.222 1.32.222.94 0 1.777-.364 2.395-1.067.599-.681.639-1.387.608-1.748'
                    transform='translate(-450 -1073) translate(352.5 157)'
                  ></path>
                </g>
              </svg>
              <svg viewBox='0 0 12 13' width='17' height='17' fill='#0084ff'>
                <g transform='translate(-450 -1073)'>
                  <path d='M461.583 1076.078a.732.732 0 0 0-.774.073l-.612.466a.498.498 0 0 0-.197.398v4.97c0 .157.072.304.197.398l.612.466a.736.736 0 0 0 .774.073.749.749 0 0 0 .417-.677v-5.49a.75.75 0 0 0-.417-.677m-4.562-1.557h-5.043A1.98 1.98 0 0 0 450 1076.5v6.021a1.98 1.98 0 0 0 1.978 1.979h5.043a1.98 1.98 0 0 0 1.979-1.979v-6.021a1.98 1.98 0 0 0-1.978-1.979'></path>
                </g>
              </svg>
              <svg viewBox='0 0 12 13' width='20' height='20' fill='#0084ff'>
                <g transform='translate(-450 -1073)'>
                  <path d='M452.25 1080.5h8a.75.75 0 1 0 0-1.5h-8a.75.75 0 1 0 0 1.5z'></path>
                </g>
              </svg>
              <svg viewBox='0 0 12 13' width='20' height='20' fill='#0084ff'>
                <g transform='translate(-450 -1073)'>
                  <g>
                    <path
                      d='m98.095 917.155 7.75 7.75a.75.75 0 0 0 1.06-1.06l-7.75-7.75a.75.75 0 0 0-1.06 1.06z'
                      transform='translate(353.5 159)'
                    ></path>
                    <path
                      d='m105.845 916.095-7.75 7.75a.75.75 0 1 0 1.06 1.06l7.75-7.75a.75.75 0 0 0-1.06-1.06z'
                      transform='translate(353.5 159)'
                    ></path>
                  </g>
                </g>
              </svg>
            </div>
          </div>
          <div
            className={`p-3 flex min-h-[10rem] gap-4 ${
              fbMessageForm.reverseorder ? "flex-col-reverse" : "flex-col "
            }`}
          >
            <div className='flex gap-2 items-end'>
              <Avatar className='h-7 w-7'>
                <AvatarImage src={profilePath || "/Logo.png"} />
                <AvatarFallback>MS</AvatarFallback>
              </Avatar>
              <div>
                {postPath && (
                  <Image
                    src={postPath}
                    width={100}
                    height={100}
                    style={{
                      width: "100%",
                      maxHeight: "20rem",
                      maxWidth: "17rem",
                      objectFit: "cover",
                    }}
                    alt='Post picture'
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    className='rounded-3xl'
                  />
                )}
                <div className='relative w-fit'>
                  <div
                    className={`break-words max-w-[17rem] p-3 rounded-3xl ${
                      fbMessageForm.theme === "light" ? "text-black" : "bg-[#303030]"
                    }`}
                  >
                    {fbMessageForm.text}
                  </div>
                  {fbMessageForm.reaction && (
                    <p
                      className={`${
                        fbMessageForm.theme === "dark"
                          ? "bg-[#242526] shadow-sm shadow-gray-600"
                          : "bg-[#fff8e6]"
                      } absolute right-0 bottom-[-14px] rounded-3xl`}
                    >
                      {fbMessageForm.reaction}
                    </p>
                  )}
                </div>
              </div>
            </div>
            {fbMessageForm.sendertext && (
              <div className='ml-auto'>
                {msgImg && (
                  <Image
                    src={msgImg}
                    width={100}
                    height={100}
                    style={{
                      width: "100%",
                      maxHeight: "20rem",
                      maxWidth: "17rem",
                      objectFit: "cover",
                    }}
                    alt='Post picture'
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    className='rounded-3xl'
                  />
                )}
                <div className='relative w-fit ml-auto'>
                  <div className={`break-words max-w-[17rem] p-2 bg-[#0084ff] rounded-3xl`}>
                    {fbMessageForm.sendertext}
                  </div>
                  {fbMessageForm.senderreaction && (
                    <p
                      className={`${
                        fbMessageForm.theme === "dark"
                          ? "bg-[#242526] shadow-sm shadow-gray-600"
                          : "bg-[#fff8e6]"
                      } absolute left-0 bottom-[-16px] rounded-3xl`}
                    >
                      {fbMessageForm.senderreaction}
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
          <div className='flex p-3 gap-3 items-center'>
            <svg height='20px' viewBox='0 0 24 24' width='20px' fill='#0084ff'>
              <g>
                <polygon fill='none' points='-6,30 30,30 30,-6 -6,-6 '></polygon>
                <path d='m18,11l-5,0l0,-5c0,-0.552 -0.448,-1 -1,-1c-0.5525,0 -1,0.448 -1,1l0,5l-5,0c-0.5525,0 -1,0.448 -1,1c0,0.552 0.4475,1 1,1l5,0l0,5c0,0.552 0.4475,1 1,1c0.552,0 1,-0.448 1,-1l0,-5l5,0c0.552,0 1,-0.448 1,-1c0,-0.552 -0.448,-1 -1,-1m-6,13c-6.6275,0 -12,-5.3725 -12,-12c0,-6.6275 5.3725,-12 12,-12c6.627,0 12,5.3725 12,12c0,6.6275 -5.373,12 -12,12'></path>
              </g>
            </svg>
            <svg height='20px' viewBox='0 -1 17 17' width='20px'>
              <g fill='none'>
                <path
                  d='M2.882 13.13C3.476 4.743 3.773.48 3.773.348L2.195.516c-.7.1-1.478.647-1.478 1.647l1.092 11.419c0 .5.2.9.4 1.3.4.2.7.4.9.4h.4c-.6-.6-.727-.951-.627-2.151z'
                  fill='#0084ff'
                ></path>
                <circle cx='8.5' cy='4.5' fill='#0084ff' r='1.5'></circle>
                <path
                  d='M14 6.2c-.2-.2-.6-.3-.8-.1l-2.8 2.4c-.2.1-.2.4 0 .6l.6.7c.2.2.2.6-.1.8-.1.1-.2.1-.4.1s-.3-.1-.4-.2L8.3 8.3c-.2-.2-.6-.3-.8-.1l-2.6 2-.4 3.1c0 .5.2 1.6.7 1.7l8.8.6c.2 0 .5 0 .7-.2.2-.2.5-.7.6-.9l.6-5.9L14 6.2z'
                  fill='#0084ff'
                ></path>
                <path
                  d='M13.9 15.5l-8.2-.7c-.7-.1-1.3-.8-1.3-1.6l1-11.4C5.5 1 6.2.5 7 .5l8.2.7c.8.1 1.3.8 1.3 1.6l-1 11.4c-.1.8-.8 1.4-1.6 1.3z'
                  stroke='#0084ff'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                ></path>
              </g>
            </svg>
            <svg height='20px' viewBox='0 0 17 16' width='20px' x='0px' y='0px'>
              <g>
                <circle cx='5.5' cy='5.5' fill='none' r='1'></circle>
                <circle cx='11.5' cy='4.5' fill='none' r='1'></circle>
                <path
                  d='M5.3 9c-.2.1-.4.4-.3.7.4 1.1 1.2 1.9 2.3 2.3h.2c.2 0 .4-.1.5-.3.1-.3 0-.5-.3-.6-.8-.4-1.4-1-1.7-1.8-.1-.2-.4-.4-.7-.3z'
                  fill='none'
                ></path>
                <path
                  d='M10.4 13.1c0 .9-.4 1.6-.9 2.2 4.1-1.1 6.8-5.1 6.5-9.3-.4.6-1 1.1-1.8 1.5-2 1-3.7 3.6-3.8 5.6z'
                  fill='#0084ff'
                ></path>
                <path
                  d='M2.5 13.4c.1.8.6 1.6 1.3 2 .5.4 1.2.6 1.8.6h.6l.4-.1c1.6-.4 2.6-1.5 2.7-2.9.1-2.4 2.1-5.4 4.5-6.6 1.3-.7 1.9-1.6 1.9-2.8l-.2-.9c-.1-.8-.6-1.6-1.3-2-.7-.5-1.5-.7-2.4-.5L3.6 1.5C1.9 1.8.7 3.4 1 5.2l1.5 8.2zm9-8.9c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zm-3.57 6.662c.3.1.4.4.3.6-.1.3-.3.4-.5.4h-.2c-1-.4-1.9-1.3-2.3-2.3-.1-.3.1-.6.3-.7.3-.1.5 0 .6.3.4.8 1 1.4 1.8 1.7zM5.5 5.5c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1z'
                  fill='#0084ff'
                ></path>
              </g>
            </svg>
            <svg height='20px' viewBox='0 0 16 16' width='20px' x='0px' y='0px'>
              <path
                d='M.783 12.705c.4.8 1.017 1.206 1.817 1.606 0 0 1.3.594 2.5.694 1 .1 1.9.1 2.9.1s1.9 0 2.9-.1 1.679-.294 2.479-.694c.8-.4 1.157-.906 1.557-1.706.018 0 .4-1.405.5-2.505.1-1.2.1-3 0-4.3-.1-1.1-.073-1.976-.473-2.676-.4-.8-.863-1.408-1.763-1.808-.6-.3-1.2-.3-2.4-.4-1.8-.1-3.8-.1-5.7 0-1 .1-1.7.1-2.5.5s-1.417 1.1-1.817 1.9c0 0-.4 1.484-.5 2.584-.1 1.2-.1 3 0 4.3.1 1 .2 1.705.5 2.505zm10.498-8.274h2.3c.4 0 .769.196.769.696 0 .5-.247.68-.747.68l-1.793.02.022 1.412 1.252-.02c.4 0 .835.204.835.704s-.442.696-.842.696H11.82l-.045 2.139c0 .4-.194.8-.694.8-.5 0-.7-.3-.7-.8l-.031-5.631c0-.4.43-.696.93-.696zm-3.285.771c0-.5.3-.8.8-.8s.8.3.8.8l-.037 5.579c0 .4-.3.8-.8.8s-.8-.4-.8-.8l.037-5.579zm-3.192-.825c.7 0 1.307.183 1.807.683.3.3.4.7.1 1-.2.4-.7.4-1 .1-.2-.1-.5-.3-.9-.3-1 0-2.011.84-2.011 2.14 0 1.3.795 2.227 1.695 2.227.4 0 .805.073 1.105-.127V8.6c0-.4.3-.8.8-.8s.8.3.8.8v1.8c0 .2.037.071-.063.271-.7.7-1.57.991-2.47.991C2.868 11.662 1.3 10.2 1.3 8s1.704-3.623 3.504-3.623z'
                fill='#0084ff'
              ></path>
            </svg>
            <div
              className={`flex items-center justify-between p-1.5 rounded-3xl flex-1 ${
                fbMessageForm.theme === "dark" ? "bg-[#3a3b3c] text-[#b0b3b8]" : "text-[#67696d]"
              }`}
            >
              <p>Aa</p>
              <svg height='20px' viewBox='0 0 38 38' width='20px'>
                <g fill='none'>
                  <g transform='translate(-893.000000, -701.000000)'>
                    <g transform='translate(709.000000, 314.000000)'>
                      <g>
                        <path
                          d='M210.5,405 C209.121,405 208,403.879 208,402.5 C208,401.121 209.121,400 210.5,400 C211.879,400 213,401.121 213,402.5 C213,403.879 211.879,405 210.5,405 M212.572,411.549 C210.428,413.742 206.938,415 203,415 C199.062,415 195.572,413.742 193.428,411.549 C192.849,410.956 192.859,410.007 193.451,409.428 C194.045,408.85 194.993,408.859 195.572,409.451 C197.133,411.047 199.909,412 203,412 C206.091,412 208.867,411.047 210.428,409.451 C211.007,408.859 211.956,408.85 212.549,409.428 C213.141,410.007 213.151,410.956 212.572,411.549 M195.5,400 C196.879,400 198,401.121 198,402.5 C198,403.879 196.879,405 195.5,405 C194.121,405 193,403.879 193,402.5 C193,401.121 194.121,400 195.5,400 M203,387 C192.523,387 184,395.523 184,406 C184,416.477 192.523,425 203,425 C213.477,425 222,416.477 222,406 C222,395.523 213.477,387 203,387'
                          fill='#0084ff'
                        ></path>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <svg height='20' viewBox='0 0 16 16' width='20'>
              <path
                d='M16,9.1c0-0.8-0.3-1.1-0.6-1.3c0.2-0.3,0.3-0.7,0.3-1.2c0-1-0.8-1.7-2.1-1.7h-3.1c0.1-0.5,0.2-1.3,0.2-1.8 c0-1.1-0.3-2.4-1.2-3C9.3,0.1,9,0,8.7,0C8.1,0,7.7,0.2,7.6,0.4C7.5,0.5,7.5,0.6,7.5,0.7L7.6,3c0,0.2,0,0.4-0.1,0.5L5.7,6.6 c0,0-0.1,0.1-0.1,0.1l0,0l0,0L5.3,6.8C5.1,7,5,7.2,5,7.4v6.1c0,0.2,0.1,0.4,0.2,0.5c0.1,0.1,1,1,2,1h5.2c0.9,0,1.4-0.3,1.8-0.9 c0.3-0.5,0.2-1,0.1-1.4c0.5-0.2,0.9-0.5,1.1-1.2c0.1-0.4,0-0.8-0.2-1C15.6,10.3,16,9.9,16,9.1z'
                fill='#0084ff'
              ></path>
              <path
                d='M3.3,6H0.7C0.3,6,0,6.3,0,6.7v8.5C0,15.7,0.3,16,0.7,16h2.5C3.7,16,4,15.7,4,15.3V6.7C4,6.3,3.7,6,3.3,6z'
                fill='#0084ff'
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <GeneratedImg path={generatedImg.fbMessage} />
    </div>
  );
};

export default MessagePic;
