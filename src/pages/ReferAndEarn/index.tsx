import Lucide from "@/components/Base/Lucide";
import { FormInput, FormCheck, FormTextarea } from "@/components/Base/Form";

import review from "@/fakers/review";
import { Link, useLocation } from "react-router-dom";

import users from "@/fakers/users";
import activities from "@/fakers/activities";
import { Tab, Menu } from "@/components/Base/Headless";

import Button from "@/components/Base/Button";

import { useState } from "react";
import clsx from "clsx";
import _ from "lodash";

function Main() {

  const chakraColors = [
    '#EE1F541A', // Root - Red
    '#F1481E1A', // Sacral - Orange
    '#F38F201A', // Solar Plexus - Yellow
    '#5EB9381A', // Heart - Green
    '#519FDD1A', // Throat - Blue
    '#4754AE1A', // Third Eye - Indigo
    '#663DA11A'  // Crown - Violet
  ];
  const stripeWidths = [
    "14%", // Red stripe width
    "14%", // Orange stripe width
    "14%", // Yellow stripe width
    "14%", // Green stripe width
    "14%", // Blue stripe width
    "14%", // Indigo stripe width
    "14%"  // Violet stripe width
  ];
  const usersList = [
    { name: "Muladara", photo: users.fakeUsers()[0].photo },
    { name: "Manipura", photo: users.fakeUsers()[0].photo },
    { name: "Vishuddha", photo: users.fakeUsers()[0].photo },
    { name: "Sahasrara", photo: users.fakeUsers()[0].photo },
    { name: "Swadhisthana", photo: users.fakeUsers()[0].photo },
    { name: "Anahata", photo: users.fakeUsers()[0].photo },
    { name: "Ajna", photo: users.fakeUsers()[0].photo },
  ];

  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);

  return (
    <div className="grid grid-cols-12 gap-y-10 gap-x-6">
      <div className="col-span-12">
        <div className="mt-3.5 grid grid-cols-12 gap-y-10 gap-x-6">
          <div className="flex flex-col col-span-12 xl:col-span-8 gap-y-7">














         
          <div style={{
  background: 'linear-gradient(84.97deg, #FFFFFF 47.29%, #72005A 99.72%)'
}} className="w-full rounded-2xl max-w-4xl mx-auto">
  <div className="relative flex rounded-2xl h-64 p-3 overflow-hidden">
    {/* Vertical Gradient Stripes with Chakra Icons */}
    <div className="absolute inset-0 pl-16 flex gap-2">
      {chakraColors.map((color, index) => (
        <div 
          key={`stripe-${index}`} 
          className="relative opacity-70 h-full flex items-end justify-center"
          style={{ 
            backgroundColor: color,
            width: stripeWidths[index],
            transform: 'skew(23deg)',
            transformOrigin: 'bottom left',
            marginLeft: '-55px' // Negative margin for overlap
          }}
        >
          <img
            src={`./src/assets/images/users/user1-50x50.jpg`} // Replace with actual image paths
            alt={`Chakra ${index + 1}`}
            className="absolute top-20  rounded-full"
            style={{ 
              width: '35px',
              height: '35px',
              marginLeft: '70px',
              boxShadow: '0 0 10px rgba(0,0,0,0.3)',
              transform: 'skew(-23deg)' // Counter the stripe skew
            }}
          />
        </div>
      ))}
    </div>

    {/* Top Left Label */}
    <div className="absolute top-4 left-8 text-gray-700 font-medium">
      Chakras Earned
    </div>
    <div className="absolute top-12 w-full h-px mx-1 mb-3 border-2 border-t border-dashed border-white-300/70"></div>

    {/* Bottom Right Text */}
    <div className="absolute top-20 right-4 text-white text-2xl font-bold">
      02 <span className="text-sm">Sets Completed</span>
    </div>

    {/* Share Button */}
    <div className="absolute bottom-4 right-4">
      <Button variant="primary" className=" text-white px-4 py-2 border-none rounded-lg hover:bg-blue-700 transition-colors">
        Share the Link
      </Button>
    </div>
  </div>
</div>
















            <div className="flex w-full">
              <Button
                variant="primary"
                className="w-full px-20 mt-3 group-[.mode--light]:!bg-white/[0.12] group-[.mode--light]:!text-slate-200 group-[.mode--light]:!border-transparent dark:group-[.mode--light]:!bg-darkmode-900/30 dark:!box"
              >
                <Lucide
                  icon="ExternalLink"
                  className="w-3.5 mr-1 h-3.5 stroke-[1.7]"
                />
                Redeem Now
              </Button>
            </div>
            {queryParams.get("page") === null && (
              <div className="flex flex-col p-8 box box--stacked">
                <div className="pb-5 mb-6 font-medium border-b border-dashed border-slate-300/70 text-[0.94rem]">
                  Chakaras Earned{" "}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {usersList.map((user, index) => (
                    <div
                      key={index}
                      className="hover:bg-slate-50 transition-all rounded-lg cursor-pointer px-4 py-2 flex items-center gap-4 dark:hover:bg-darkmode-400"
                    >
                      <div className="w-10 h-10 overflow-hidden border-2 rounded-full image-fit border-slate-200/70">
                        <img alt={user.name} src={user.photo} />
                      </div>
                      <div className="font-medium truncate max-w-[15rem]">
                        {user.name}
                      </div>
                      <div className="ml-auto">02</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="col-span-12 gap-y-8 flex flex-col xl:col-span-4">
            <div className="p-5 box box--stacked">
              <div className="flex items-center pb-5 mb-5 border-b border-dashed">
                <div className="text-[0.94rem] font-medium">Details</div>
              </div>
              <div className="flex flex-col mt-3.5 gap-2">
                <div className="hover:bg-slate-50 transition-all rounded-lg cursor-pointer px-2 -mx-2 py-1.5 flex items-center gap-3.5 dark:hover:bg-darkmode-400">
                  <div>
                    <div className="font-medium truncate max-w-[15rem]">
                      {"Your Reference "}
                    </div>
                  </div>
                  <div className="relative ml-auto w-7 h-7">{"02"}</div>
                </div>

                <div className="hover:bg-slate-50 transition-all rounded-lg cursor-pointer px-2 -mx-2 py-1.5 flex items-center gap-3.5 dark:hover:bg-darkmode-400">
                  <div>
                    <div className="font-medium truncate max-w-[15rem]">
                      {"Chakras Earned"}
                    </div>
                  </div>
                  <div className="relative ml-auto w-7 h-7">{"02"}</div>
                </div>

                <div className="hover:bg-slate-50 transition-all rounded-lg cursor-pointer px-2 -mx-2 py-1.5 flex items-center gap-3.5 dark:hover:bg-darkmode-400">
                  <div>
                    <div className="font-medium truncate max-w-[15rem]">
                      {"Redeemed Rewards"}
                    </div>
                  </div>
                  <div className="relative ml-auto w-7 h-7">{"02"}</div>
                </div>

                <div className="hover:bg-slate-50 transition-all rounded-lg cursor-pointer px-2 -mx-2 py-1.5 flex items-center gap-3.5 dark:hover:bg-darkmode-400">
                  <div>
                    <div className="font-medium truncate max-w-[15rem]">
                      {"Rewards to Claim"}
                    </div>
                  </div>
                  <div className="relative ml-auto w-7 h-7">{"02"}</div>
                </div>
              </div>
            </div>

            <div className="p-5 box box--stacked">
              <div className="flex items-center pb-5 mb-5 border-b border-dashed">
                <div className="text-[0.94rem] font-medium"> Rewards</div>
              </div>

              <Tab.Group className="flex flex-col my-3 gap-y-7">
                <Tab.List
                  variant="boxed-tabs"
                  className="w-auto md:mr-auto bg-white box rounded-[0.6rem] border-slate-200 group-[.mode--light]:!bg-white/[0.12] group-[.mode--light]:!border-transparent dark:group-[.mode--light]:!bg-darkmode-900/30 dark:!box"
                >
                  <Tab className="bg-slate-50 first:rounded-l-[0.6rem] last:rounded-r-[0.6rem] [&[aria-selected='true']_button]:text-white [&[aria-selected='true']_button]:bg-gradient-to-r [&[aria-selected='true']_button]:from-[hsla(338,68%,30%,1)] [&[aria-selected='true']_button]:to-[hsla(203,76%,28%,1)] group-[.mode--light]:bg-transparent group-[.mode--light]:[&[aria-selected='true']_button]:border-transparent dark:group-[.mode--light]:[&[aria-selected='true']_button]:bg-white/[.05] dark:bg-transparent">
                    <Tab.Button
                      className="w-full md:w-40 text-slate-500 whitespace-nowrap rounded-[0.6rem] group-[.mode--light]:text-slate-200"
                      as="button"
                    >
                      Claim Your Reward{" "}
                    </Tab.Button>
                  </Tab>
                  <Tab className="bg-slate-50 first:rounded-l-[0.6rem] last:rounded-r-[0.6rem] [&[aria-selected='true']_button]:text-white [&[aria-selected='true']_button]:bg-gradient-to-r [&[aria-selected='true']_button]:from-[hsla(338,68%,30%,1)] [&[aria-selected='true']_button]:to-[hsla(203,76%,28%,1)] group-[.mode--light]:bg-transparent group-[.mode--light]:[&[aria-selected='true']_button]:border-transparent dark:group-[.mode--light]:[&[aria-selected='true']_button]:bg-white/[.05] dark:bg-transparent">
                    <Tab.Button
                      className="w-full md:w-40 text-slate-500 whitespace-nowrap rounded-[0.6rem] group-[.mode--light]:text-slate-200"
                      as="button"
                    >
                      Redeemed Rewards{" "}
                    </Tab.Button>
                  </Tab>
                </Tab.List>
              </Tab.Group>

              <div className="flex flex-col mt-3.5 gap-2">
                {_.take(activities.fakeActivities(), 4).map(
                  (faker, fakerKey) => (
                    <div
                      className="hover:bg-slate-50 transition-all rounded-lg cursor-pointer px-2 -mx-2 py-1.5 flex items-center gap-3.5 dark:hover:bg-darkmode-400"
                      key={fakerKey}
                    >
                      <div>
                        <div className="w-10 h-10 overflow-hidden border-2 rounded-full image-fit border-slate-200/70">
                          <img
                            alt="Tailwise - Admin Dashboard Template"
                            src={users.fakeUsers()[0].photo}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-medium truncate max-w-[15rem]">
                          {faker.activity}
                        </div>
                        <div className="mt-1 text-xs text-slate-500">
                          {faker.activityDetails}
                        </div>
                      </div>
                      <div className=" ml-auto">
                        <Button
                          variant="primary"
                          className="bg-gradient-to-b from-[#02161F] to-[#075985] text-white px-4 py-2 rounded-xl shadow-lg"
                        >
                          Claim Now{" "}
                        </Button>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
