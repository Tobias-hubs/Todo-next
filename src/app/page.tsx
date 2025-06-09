"use client";
import Image from "next/image";
import styles from "./page.module.css";
import TodoList from '@/components/TodoList';

export default function Homepage() { 
  return ( 
    <main> 
      <h1>Todo next Ready</h1>
      <TodoList />
    </main>
  )
}