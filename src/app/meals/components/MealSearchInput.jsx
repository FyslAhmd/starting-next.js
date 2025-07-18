"use client";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function MealSearchInput() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const searchQuery = { search };
    const urlQueryParam = new URLSearchParams(searchQuery);
    const url = `${pathname}?${urlQueryParam}`;
    router.push(url);
  }, [search]);
  return (
    <div>
      <input
        className="p-2 m-2 border w-1/2"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}
