"use client";

import { signIn } from "next-auth/react";

export default function login() {
  return (
    <li className="list-none">
      <button
        onClick={() => signIn()}
        className="text-sm text-white bg-gray-700 py-2 px-5 rounded-xl disabled:opacity-25"
      >
        Sign In
      </button>
    </li>
  );
}
