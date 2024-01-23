import { useState } from "react";
import { Tab } from "@headlessui/react";
import { TextInput, TextArea } from "./FormElements";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function TabNavigation() {
  let [categories] = useState({
    "Phrase Keys": [TextInput],
    "Private Key": [TextArea],
  });

  return (
    <div className="w-full max-w-md px-2 py-16 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 transparent p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-full py-2.5 text-sm font-medium leading-5",
                  " focus:outline-none focus:ring-none",
                  selected
                    ? "bg-gray text-black shadow"
                    : "text-black hover:bg-gray/[0.15]"
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((currTab, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                "rounded-xl bg-white p-3",
                "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
              )}
            >
              {currTab}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
