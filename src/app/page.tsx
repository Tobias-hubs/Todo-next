"use client";
import Image from "next/image";
import styles from "./page.module.css";
import TodoList from '@/components/TodoList';
import { hydrateRoot  } from "react-dom/client";

export default function Homepage() { 
  return ( 
    <main>
      <TodoList />
    </main>
  )
}