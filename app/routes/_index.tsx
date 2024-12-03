import type { MetaFunction } from "@remix-run/node";


import { Users, DollarSign, ShoppingCart, TrendingUp } from "lucide-react";

export const meta: MetaFunction = () => {
  return [
    { title: "Dashboard" },
    { name: "description", content: "Welcome to the dashboard" },
  ];
};

export default function Index() {
  return (
   <>
   <div>
    <h1 className="text-4xl font-aeonik">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque odit debitis repellendus a. Eligendi, soluta ea. Dolore ullam quos dolorem recusandae totam iste sapiente id, commodi mollitia aut vero nesciunt.</h1>
    <h1 className="text-4xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti fuga eligendi quasi deserunt culpa alias veritatis numquam fugiat debitis dolore, saepe ab molestias soluta autem deleniti officiis sequi aliquid atque?</h1>
   </div>
   </>
  );
}