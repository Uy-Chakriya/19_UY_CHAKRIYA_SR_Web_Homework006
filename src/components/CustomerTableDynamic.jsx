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
export default function CustomerTableDynamic({ customers }) {
  return (
    <>
      <TableRow className="hover:bg-gray-50 transition-colors">
        <TableCell className="font-medium">
          {customers.firstName} {customers.lastName}
        </TableCell>
        <TableCell className="text-gray-600">{customers.birthDate}</TableCell>
        <TableCell className="text-right font-semibold text-green-700">
          ${customers.moneySpent}
        </TableCell>
      </TableRow>
    </>
  );
}
