"use client";

import * as React from "react";
import { Calculator, Calendar, CreditCard, Settings, Smile, User, Search, Package, ShoppingCart } from "lucide-react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

export function CommandPalette() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <button 
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-500 bg-gray-100 dark:bg-gray-800 dark:text-gray-400 rounded-md border border-transparent hover:border-gray-300 dark:hover:border-gray-700 transition-all w-64 justify-between"
      >
        <div className="flex items-center gap-2">
          <Search className="w-4 h-4" />
          <span>Search admin...</span>
        </div>
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-white dark:bg-gray-900 px-1.5 font-mono text-[10px] font-medium text-gray-500 opacity-100">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem onSelect={() => window.location.href = '/admin/pos'}>
              <Calculator className="mr-2 h-4 w-4" />
              <span>Open POS</span>
            </CommandItem>
            <CommandItem onSelect={() => window.location.href = '/admin/products'}>
              <Package className="mr-2 h-4 w-4" />
              <span>Products</span>
            </CommandItem>
            <CommandItem onSelect={() => window.location.href = '/admin/orders'}>
              <ShoppingCart className="mr-2 h-4 w-4" />
              <span>Orders</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem onSelect={() => window.location.href = '/admin/settings/profile'}>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem onSelect={() => window.location.href = '/admin/settings'}>
              <Settings className="mr-2 h-4 w-4" />
              <span>Store Settings</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
