import { useState } from "react";
import { Tab } from "@headlessui/react";
import { TextInput, TextArea } from "./FormElements";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function TabNavigation() {
  let [categories] = useState({
    "Phrase Keys": <TextArea />,
    "Private Key": <TextInput />,
  });

  return (
    <div className="w-full  px-2  sm:px-0">
      <Tab.Group>
        <Tab.List className="max-w-md pb-10 flex space-x-1 transparent p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-full py-4 text-base font-medium leading-5",
                  " focus:outline-none focus:ring-none",
                  selected
                    ? "bg-gray text-white shadow"
                    : "text-black hover:bg-gray/[0.15]"
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2 w-full">
          {Object.values(categories).map((CurrTab, idx) => (
            <Tab.Panel key={idx}>{CurrTab}</Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
