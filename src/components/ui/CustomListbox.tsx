'use client'

import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { categories, productList } from '../../data'
import { IProductsCategories } from '../../interfaces';
console.log(productList);
interface IProps {
  selected : {name:string,imageURL:string};
  setSelected:(category:IProductsCategories) => void;
}
const CustomListbox=({selected,setSelected}:IProps)=> {



  return (
    <Listbox value={selected} onChange={setSelected}>
      <Label className="block text-sm font-medium text-gray-500 " style={{marginBottom:"2px"}}>Category</Label>
      <div className="relative " style={{margin:0}}>
      <ListboxButton className="relative w-full cursor-default rounded-lg bg-white py-3 pl-3 pr-10 text-left text-gray-900 shadow-md border-[1px] border-gray-300 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-300 text-base">
          <span className="flex items-center">
            <img alt="" src={selected.imageURL} className="size-5 shrink-0 rounded-full" />
            <span className="ml-3 block truncate">{selected.name}</span>
          </span>
          <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
            <ChevronUpDownIcon aria-hidden="true" className="size-5 text-gray-400" />
          </span>
        </ListboxButton>

        <ListboxOptions
          transition
          className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
        >
          {categories.map((category) => (
            <ListboxOption
              key={category.id}
              value={category}
              className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white"
            >
              <div className="flex items-center">
                <img alt="" src={category.imageURL} className="size-5 shrink-0 rounded-full" />
                <span className="ml-3 block truncate font-normal group-data-[selected]:font-semibold">
                  {category.name}
                </span>
              </div>

              <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden">
                <CheckIcon aria-hidden="true" className="size-5" />
              </span>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  )
}
export default CustomListbox ;