import Lucide from "@/components/Base/Lucide";
import { Menu } from "@/components/Base/Headless";
import users from "@/fakers/users";
import projects from "@/fakers/projects";
import projectDetails from "@/fakers/project-details";
import {
  FormSelect,
  FormInput,
  FormCheck,
  FormTextarea,
} from "@/components/Base/Form";
import Tippy from "@/components/Base/Tippy";
import Button from "@/components/Base/Button";
import { Tab } from "@/components/Base/Headless";
import _ from "lodash";
import { useState } from "react";

const Main = () => {
    const cardsData = [
        {
          name: "Ankush Gupta",
          dateRange: "14th Feb,2024 - 14th March, 2025",
          timeRange: "04:00 Pm - 05:00 Pm",
          program: "Yoga For Diabatics",
          price: "1000"
        },
        {
          name: "Ankush Gupta",
          dateRange: "14th Feb,2024 - 14th March, 2025",
          timeRange: "04:00 Pm - 05:00 Pm",
          program: "Yoga For Diabatics",
          price: "1000"
        },
        {
          name: "Ankush Gupta",
          dateRange: "14th Feb,2024 - 14th March, 2025",
          timeRange: "04:00 Pm - 05:00 Pm",
          program: "Yoga For Diabatics",
          price: "1000"
        },
        {
          name: "Ankush Gupta",
          dateRange: "14th Feb,2024 - 14th March, 2025",
          timeRange: "04:00 Pm - 05:00 Pm",
          program: "Yoga For Diabatics",
          price: "1000"
        },
        {
          name: "Ankush Gupta",
          dateRange: "14th Feb,2024 - 14th March, 2025",
          timeRange: "04:00 Pm - 05:00 Pm",
          program: "Yoga For Diabatics",
          price: "1000"
        },
        {
          name: "Ankush Gupta",
          dateRange: "14th Feb,2024 - 14th March, 2025",
          timeRange: "04:00 Pm - 05:00 Pm",
          program: "Yoga For Diabatics",
          price: "1000"
        }
      ];
    
  // Create duplicated items for infinite scroll effect
  const items = [0, 1, 2, 4, 5, 6];
  const duplicatedItems = [...items, ...items, ...items]; // Triple items for smoother effect

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div>
          <h1 style={{ color: "#3D0029" }} className="underline p-3">
            Categories
          </h1>
        </div>

        <header className="bg-gradient-to-t from-[#3D0029] to-[#A3006F] text-white pt-10 relative">
          {/* First row - scrolling left */}
          <div className="w-full overflow-hidden">
            <div className="scroll-left flex gap-3 md:gap-5 hide-scrollbar">
              {duplicatedItems.map((index, i) => (
                <div
                  key={`first-${i}`}
                  className="p-1.5 max-w-[200px] md:max-w-[250px] lg:max-w-[300px] flex flex-col"
                >
                  <div className="h-24 md:h-28 flex flex-col text-center items-center relative w-full p-3 md:p-4 rounded-[0.6rem] bg-white">
                    <img
                      className="mb-1 md:mb-2 w-6 h-4 md:w-8 md:h-6"
                      src="src/assets/images/myImages/comma_image.png"
                      alt=""
                    />
                    <p className="text-xs text-black line-clamp-3">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Temporibus velit ab{" "}
                    </p>
                    <div className="absolute inset-x-0 top-0 w-12 h-12 md:w-16 md:h-16 mx-auto mt-16 md:mt-20">
                      <div className="w-full h-full overflow-hidden rounded-full image-fit">
                        <img
                          alt="User Profile"
                          src={
                            users.fakeUsers()[index % users.fakeUsers().length]
                              .photo
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div className="p-3 md:p-5 flex items-center justify-center flex-col sm:flex-row gap-y-3 md:gap-y-5 sm:items-end rounded-[0.6rem] pt-8 md:pt-12">
                    <div>
                      <div className="text-sm md:text-base text-center font-bold text-slate-500">
                        {index === 0
                          ? "Brad Pitt"
                          : index === 1
                          ? "John Doe"
                          : "Jane Smith"}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Second row - scrolling right */}
          <div className="w-full overflow-hidden">
            <div className="scroll-right flex pb-4 md:pb-6 gap-3 md:gap-5 hide-scrollbar">
              {duplicatedItems.map((index, i) => (
                <div
                  key={`second-${i}`}
                  className="p-1.5 max-w-[200px] md:max-w-[250px] lg:max-w-[300px] flex flex-col"
                >
                  <div className="h-24 md:h-28 flex flex-col text-center items-center relative w-full p-3 md:p-4 rounded-[0.6rem] bg-white">
                    <img
                      className="mb-1 md:mb-2 w-6 h-4 md:w-8 md:h-6"
                      src="src/assets/images/myImages/comma_image.png"
                      alt=""
                    />
                    <p className="text-xs text-black line-clamp-3">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Temporibus velit ab{" "}
                    </p>
                    <div className="absolute inset-x-0 top-0 w-12 h-12 md:w-16 md:h-16 mx-auto mt-16 md:mt-20">
                      <div className="w-full h-full overflow-hidden rounded-full image-fit">
                        <img
                          alt="User Profile"
                          src={
                            users.fakeUsers()[index % users.fakeUsers().length]
                              .photo
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div className="p-3 md:p-5 flex items-center justify-center flex-col sm:flex-row gap-y-3 md:gap-y-5 sm:items-end rounded-[0.6rem] pt-8 md:pt-12">
                    <div>
                      <div className="text-sm md:text-base text-center font-bold text-slate-500">
                        {index === 0
                          ? "Brad Pitt"
                          : index === 1
                          ? "John Doe"
                          : "Jane Smith"}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </header>
        <div className="w-full p-8  mb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {cardsData.map((card, index) => (
          <div key={index} className="p-5 mt-3.5 box box--stacked">
            <div className="flex items-start mb-5 gap-y-2 flex-col sm:flex-row border-slate-300/70">
              <div className="overflow-hidden rounded-2xl w-20 h-20 image-fit border-3 border-slate-200/70">
                <img alt="" src={"src/assets/images/users/user1-100x100.jpg"} />
              </div>
              <div className="text-start flex flex-col gap-1 text-left sm:ml-4 mt-3 sm:mt-0">
                <div className="text-base font-medium">{card.name}</div>
                <div className="text-slate-500 mt-0.5">
                  {card.dateRange}
                </div>
                <div className="text-slate-500 mt-0.5">
                  {card.timeRange}
                </div>
              </div>
              <div className="flex flex-row sm:flex-col sm:ml-auto gap-2 sm:gap-3 mt-3 sm:mt-0">
                <div className="flex items-center px-3 py-1 font-medium border rounded-full border-success/10 bg-success/10 text-success">
                  <div className="w-1.5 h-1.5 mr-2 rounded-full border border-success/50 bg-success/50"></div>{" "}
                  Online
                </div>
                <div className="flex items-center px-3 py-1 font-medium border rounded-full border-success/10 bg-success/10 text-success">
                  <div className="w-1.5 h-1.5 mr-2 rounded-full border border-success/50 bg-success/50"></div>{" "}
                  Online
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between text-start gap-3">
              <div
                style={{ backgroundColor: "#FFD9FF" }}
                className="flex gap-2 sm:gap-8 p-2 rounded-lg"
              >
                <div className="flex flex-col">
                  <p>{card.program}</p>
                  <p style={{ color: "#8C98BA" }} className="font-bold">
                    Joined
                  </p>
                </div>
                <Button variant="outline-primary" className="ml-auto sm:ml-0">
                  {card.price}
                </Button>
              </div>
              <Button variant="outline-secondary" className="mt-2 sm:mt-0">
                Register Now
                <Lucide icon="ShieldCheck" className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
      </div>
      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none; /* Chrome, Safari and Opera */
        }
        .text-xxs {
          font-size: 0.65rem;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Animation for scrolling left */
        .scroll-left {
          width: max-content;
          animation: scroll-left 30s linear infinite;
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          } /* Move one full set of items */
        }

        /* Animation for scrolling right */
        .scroll-right {
          width: max-content;
          animation: scroll-right 30s linear infinite;
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-33.33%);
          }
          100% {
            transform: translateX(0);
          } /* Move one full set of items */
        }
      `}</style>
    </>
  );
};

export default Main;
