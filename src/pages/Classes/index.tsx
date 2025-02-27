import Lucide from "@/components/Base/Lucide";
import { Menu, Popover } from "@/components/Base/Headless";
import Pagination from "@/components/Base/Pagination";
import Tippy from "@/components/Base/Tippy";
import users from "@/fakers/users";
import { useState } from "react";
import products from "@/fakers/products";
import transactions from "@/fakers/transactions";
import Button from "@/components/Base/Button";
import { formatCurrency } from "@/utils/helper";
import Table from "@/components/Base/Table";
import clsx from "clsx";
import _ from "lodash";
import Alert from "@/components/Base/Alert";
import categories from "@/fakers/categories";

import TomSelect from "@/components/Base/TomSelect";
import { ClassicEditor } from "@/components/Base/Ckeditor";
import {
  FormLabel,
  FormCheck,
  FormInput,
  FormInline,
  FormSelect,
  FormSwitch,
  InputGroup,
  FormHelp,
} from "@/components/Base/Form";
function main() {
  const [subcategory, setSubcategory] = useState(["0"]);

  return (
    <div className="grid grid-cols-12 gap-y-10 gap-x-6">
        
      <div className="col-span-12">
        <div className="grid grid-cols-12 gap-5 mt-3.5">


            <div className="relative flex flex-col col-span-12 lg:col-span-7 xl:col-span-8 gap-y-7">
              <div className="flex flex-col p-5 box box--stacked">
                <div className="p-5 border rounded-[0.6rem] border-slate-200/60 dark:border-darkmode-400">
                  <div className="flex items-center pb-5 text-[0.94rem] font-medium border-b border-slate-200/60 dark:border-darkmode-400">
                    <Lucide
                      icon="ChevronDown"
                      className="w-5 h-5 stroke-[1.3] mr-2"
                    />{" "}
                    Product Information
                  </div>
                  <div className="mt-5">
                    <Alert
                      variant="outline-warning"
                      className="flex items-center px-4 mb-2 bg-warning/5 border-warning/30"
                    >
                      {({ dismiss }) => (
                        <>
                          <div>
                            <Lucide
                              icon="Lightbulb"
                              className="stroke-[1.3] w-4 h-4 mr-3 2xl:mr-2"
                            />
                          </div>
                          <div className="mr-5 leading-relaxed">
                            Avoid selling counterfeit products / violating
                            Intellectual Property Rights, so that your products
                            are not deleted.
                            <a
                              href=""
                              className="ml-1 font-medium underline decoration-dotted decoration-warning/50 underline-offset-[3px]"
                            >
                              Learn More
                            </a>
                            <Alert.DismissButton
                              type="button"
                              className="inset-y-0 btn-close"
                              onClick={dismiss}
                              aria-label="Close"
                            >
                              <Lucide icon="X" className="w-4 h-4" />
                            </Alert.DismissButton>
                          </div>
                        </>
                      )}
                    </Alert>
                    <div className="flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                      <label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-60 xl:mr-14">
                        <div className="text-left">
                          <div className="flex items-center">
                            <div className="font-medium">Product Name</div>
                            <div className="ml-2.5 px-2 py-0.5 bg-slate-100 text-slate-500 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md border border-slate-200">
                              Required
                            </div>
                          </div>
                          <div className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-slate-500/80 dark:text-slate-400">
                            Enter the unique name of your product. Make it
                            descriptive and easy to remember for customers.
                          </div>
                        </div>
                      </label>
                      <div className="flex-1 w-full mt-3 xl:mt-0">
                        <FormInput type="text" placeholder="Product name" />
                        <FormHelp>Maximum character 0/70</FormHelp>
                      </div>
                    </div>
                    <div className="flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                      <label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-60 xl:mr-14">
                        <div className="text-left">
                          <div className="flex items-center">
                            <div className="font-medium">Category</div>
                            <div className="ml-2.5 px-2 py-0.5 bg-slate-100 text-slate-500 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md border border-slate-200">
                              Required
                            </div>
                          </div>
                          <div className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-slate-500/80 dark:text-slate-400">
                            Select the primary category that best represents
                            your product. This helps customers find your product
                            more easily.
                          </div>
                        </div>
                      </label>
                      <div className="flex-1 w-full mt-3 xl:mt-0">
                        <FormSelect id="category">
                          {categories
                            .fakeCategories()
                            .map((faker, fakerKey) => (
                              <option key={fakerKey} value={fakerKey}>
                                {faker.name}
                              </option>
                            ))}
                        </FormSelect>
                      </div>
                    </div>
                    <div className="flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                      <label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-60 xl:mr-14">
                        <div className="text-left">
                          <div className="flex items-center">
                            <div className="font-medium">Subcategory</div>
                            <div className="ml-2.5 px-2 py-0.5 bg-slate-100 text-slate-500 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md border border-slate-200">
                              Required
                            </div>
                          </div>
                          <div className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-slate-500/80 dark:text-slate-400">
                            Choose a more specific subcategory that closely
                            matches your product. It provides further details
                            about your item.
                          </div>
                        </div>
                      </label>
                      <div className="flex-1 w-full mt-3 xl:mt-0">
                        <TomSelect
                          value={subcategory}
                          onChange={(e) => {
                            setSubcategory(e.target.value);
                          }}
                          options={{
                            placeholder: "Etalase",
                          }}
                          className="w-full"
                          multiple
                        >
                          {categories
                            .fakeCategories()
                            .map((faker, fakerKey) => (
                              <option key={fakerKey} value={fakerKey}>
                                {faker.name}
                              </option>
                            ))}
                        </TomSelect>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          <div className="col-span-12 lg:col-span-7 xl:col-span-4">
            <div className="flex flex-col p-5 box box--stacked">
              <div className="flex flex-col gap-5">
                <div className="border rounded-[0.6rem] border-slate-200/80 dark:border-darkmode-400 relative mt-3">
                  <div className="absolute left-0 px-3 ml-4 -mt-2 text-xs uppercase bg-white text-slate-500 dark:bg-darkmode-600">
                    <div className="-mt-px">User Details</div>
                  </div>
                  <div className="p-5 mt-2.5 flex flex-col gap-5">
                    <div className="flex items-center">
                      <Lucide
                        icon="Clock"
                        className="w-4 h-4 mr-2.5 stroke-[1.3] text-slate-500"
                      />
                      <div className="flex flex-col flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                        <div className="sm:mr-auto w-54">Name:</div>
                        <a
                          href=""
                          className="underline decoration-dotted decoration-primary/30 underline-offset-[3px]"
                        >
                          {users.fakeUsers()[0].name}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Lucide
                        icon="Clipboard"
                        className="w-4 h-4 mr-2.5 stroke-[1.3] text-slate-500"
                      />
                      <div className="flex flex-col flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                        <div className="sm:mr-auto w-54">Phone Number:</div>
                        {users.fakeUsers()[0].phone}
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Lucide
                        icon="Inbox"
                        className="w-4 h-4 mr-2.5 stroke-[1.3] text-slate-500"
                      />
                      <div className="flex flex-col flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                        <div className="sm:mr-auto w-54">Email:</div>
                        <div className="text-right truncate w-52">
                          {users.fakeUsers()[0].email}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Lucide
                        icon="Map"
                        className="w-4 h-4 mr-2.5 stroke-[1.3] text-slate-500"
                      />
                      <div className="flex flex-col flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                        <div className="sm:mr-auto w-54">Location:</div>
                        {users.fakeUsers()[0].location}
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Lucide
                        icon="Clock"
                        className="w-4 h-4 mr-2.5 stroke-[1.3] text-slate-500"
                      />
                      <div className="flex flex-col flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                        <div className="sm:mr-auto w-54">Address:</div>
                        <a
                          href=""
                          className="flex items-center underline decoration-dotted decoration-primary/30 underline-offset-[3px]"
                        >
                          <Lucide
                            icon="MapPin"
                            className="w-3.5 h-3.5 mr-1.5"
                          />
                          View Address
                        </a>
                      </div>
                    </div>
                    <div className="mt-1.5">
                      <Button className="w-full border-primary/20 text-primary/80 hover:bg-slate-50">
                        <Lucide
                          icon="PenSquare"
                          className="stroke-[1.3] w-4 h-4 mr-2"
                        />{" "}
                        Change Status
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="border rounded-[0.6rem] border-slate-200/80 dark:border-darkmode-400 relative mt-3">
                  <div className="absolute left-0 px-3 ml-4 -mt-2 text-xs uppercase bg-white text-slate-500 dark:bg-darkmode-600">
                    <div className="-mt-px">Store Details</div>
                  </div>
                  <div className="p-5 mt-2.5 flex flex-col gap-5">
                    <div className="flex items-center">
                      <Lucide
                        icon="Clipboard"
                        className="w-4 h-4 mr-2.5 stroke-[1.3] text-slate-500"
                      />
                      <div className="flex flex-col flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                        <div className="sm:mr-auto w-54">Unique ID:</div>
                        STR-{_.random(1000000000, 9000000000)}
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Lucide
                        icon="Calendar"
                        className="w-4 h-4 mr-2.5 stroke-[1.3] text-slate-500"
                      />
                      <div className="flex flex-col flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                        <div className="sm:mr-auto w-54">Name:</div>
                        Themeforest
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Lucide
                        icon="Clipboard"
                        className="w-4 h-4 mr-2.5 stroke-[1.3] text-slate-500"
                      />
                      <div className="flex flex-col flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                        <div className="sm:mr-auto w-54">Phone Number:</div>
                        {users.fakeUsers()[0].phone}
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Lucide
                        icon="Clock"
                        className="w-4 h-4 mr-2.5 stroke-[1.3] text-slate-500"
                      />
                      <div className="flex flex-col flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                        <div className="sm:mr-auto w-54">Address:</div>
                        <a
                          href=""
                          className="flex items-center underline decoration-dotted decoration-primary/30 underline-offset-[3px]"
                        >
                          <Lucide
                            icon="MapPin"
                            className="w-3.5 h-3.5 mr-1.5"
                          />
                          View Address
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Lucide
                        icon="Clock"
                        className="w-4 h-4 mr-2.5 stroke-[1.3] text-slate-500"
                      />
                      <div className="flex flex-col flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                        <div className="sm:mr-auto w-54">Status:</div>
                        <div className="flex items-center text-xs font-medium rounded-md text-success bg-success/10 border border-success/10 px-1.5 py-px mr-auto sm:mr-0">
                          <span className="-mt-px">Active</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-1.5">
                      <Button className="w-full border-primary/20 text-primary/80 hover:bg-slate-50">
                        <Lucide
                          icon="PenSquare"
                          className="stroke-[1.3] w-4 h-4 mr-2"
                        />{" "}
                        Change Status
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="border rounded-[0.6rem] border-slate-200/80 dark:border-darkmode-400 relative mt-3">
                  <div className="absolute left-0 px-3 ml-4 -mt-2 text-xs uppercase bg-white text-slate-500 dark:bg-darkmode-600">
                    <div className="-mt-px">Transaction Reports</div>
                  </div>
                  <div className="p-5 mt-2.5 flex flex-col gap-5">
                    <div className="flex items-center">
                      <Lucide
                        icon="Clipboard"
                        className="w-4 h-4 mr-2.5 stroke-[1.3] text-slate-500"
                      />
                      <div className="flex flex-col flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                        <div className="sm:mr-auto w-54">Daily Average:</div>$
                        {formatCurrency(_.random(10000000, 90000000))}
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Lucide
                        icon="Calendar"
                        className="w-4 h-4 mr-2.5 stroke-[1.3] text-slate-500"
                      />
                      <div className="flex flex-col flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                        <div className="sm:mr-auto w-54">Monthly Average:</div>$
                        {formatCurrency(_.random(10000000, 90000000))}
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Lucide
                        icon="Clock"
                        className="w-4 h-4 mr-2.5 stroke-[1.3] text-slate-500"
                      />
                      <div className="flex flex-col flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                        <div className="sm:mr-auto w-54">Annually Average:</div>
                        ${formatCurrency(_.random(10000000, 90000000))}
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Lucide
                        icon="Clipboard"
                        className="w-4 h-4 mr-2.5 stroke-[1.3] text-slate-500"
                      />
                      <div className="flex flex-col flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                        <div className="sm:mr-auto w-54">Rating Average:</div>(
                        {_.random(3, 4)}.{_.random(1, 5)}+)
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Lucide
                        icon="Calendar"
                        className="w-4 h-4 mr-2.5 stroke-[1.3] text-slate-500"
                      />
                      <div className="flex flex-col flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                        <div className="sm:mr-auto w-54">Total Products:</div>
                        {_.random(1000, 10000)}
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Lucide
                        icon="Clock"
                        className="w-4 h-4 mr-2.5 stroke-[1.3] text-slate-500"
                      />
                      <div className="flex flex-col flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                        <div className="sm:mr-auto w-54">
                          Total Transactions:
                        </div>
                        {formatCurrency(_.random(10000000, 90000000))}
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Lucide
                        icon="Clipboard"
                        className="w-4 h-4 mr-2.5 stroke-[1.3] text-slate-500"
                      />
                      <div className="flex flex-col flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                        <div className="sm:mr-auto w-54">Active Disputes:</div>
                        {_.random(20, 100)}
                      </div>
                    </div>
                    <div className="mt-1.5">
                      <Button className="w-full border-primary/20 text-primary/80 hover:bg-slate-50">
                        <Lucide
                          icon="PenSquare"
                          className="stroke-[1.3] w-4 h-4 mr-2"
                        />{" "}
                        More Details
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default main;
