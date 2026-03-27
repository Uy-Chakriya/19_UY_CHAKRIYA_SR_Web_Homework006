"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Key } from "lucide-react";
import { useEffect, useState } from "react";
import CustomerTableDynamic from "./CustomerTableDynamic";

export default function CustomerTableComponent() {
  const [customers, setcustomers] = useState([]);
  useEffect(() => {
    fetch("https://homework-api.noevchanmakara.site/api/v1/customers")
      .then((res) => res.json())
      .then((customers) => {
        setcustomers(customers);
      });
  });
  return (
    <>
      <div className="w-[1200px] ml-10 mt-5 p-5  ">
        <div className="border rounded-lg overflow-hidden">
          <div className="max-h-[500px] overflow-y-auto">
            <Table className="w-full">
              <TableHeader className="bg-gray-100">
                <TableRow>
                  <TableHead className="w-[200px] font-semibold">
                    Customer Name
                  </TableHead>
                  <TableHead className="font-semibold">Birth-Date</TableHead>
                  <TableHead className="text-right font-semibold">
                    Amount Spent
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {customers?.payload?.map((customer) => (
                  <CustomerTableDynamic
                    key={customer.customerId}
                    customers={customer}
                  />
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
}
