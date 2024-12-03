import type React from "react";

import { Typography } from "@/typography";

import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { twMerge } from "tailwind-merge";

const tableData = [
  {
    sourceFile: "T_001",
    processDate: "15/04/2024",
    event: "PURCHASE / 1.920,96 in 6x",
    entryDate: "14/01/2024",
    transactions: "-1.920,96",
    installments: "1.920,96",
    sourceId: "8374937",
  },
  {
    sourceFile: "T_001",
    processDate: "15/04/2024",
    event: "PURCHASE / INSTALLMENT 4 of 6",
    entryDate: "13/05/2024",
    installments: "-320,16",
    payables: "320,16",
    sourceId: "8374937",
  },
  {
    sourceFile: "T_001",
    processDate: "15/04/2024",
    event: "PURCHASE / INSTALLMENT 5 of 6",
    entryDate: "11/06/2024",
    installments: "-320,16",
    payables: "320,16",
    sourceId: "8374937",
  },
  {
    sourceFile: "T_001",
    processDate: "15/04/2024",
    event: "PURCHASE / INSTALLMENT 6 of 6",
    entryDate: "14/01/2024",
    installments: "-320,16",
    payables: "320,16",
    sourceId: "8374937",
  },
  {
    sourceFile: "CLEARING",
    processDate: "12/05/2024",
    event: "SETTLEMENT / INSTALLMENT 4 of 6",
    entryDate: "13/05/2024",
    payables: "-320,16",
    settlement: "320,16",
    sourceId: "9526124",
  },
  {
    sourceFile: "EP747",
    processDate: "14/05/2024",
    event: "RECON / SETTLEMENT INSTALLMENT 4 of 6",
    entryDate: "14/05/2024",
    settlement: "-320,16",
    reconEp747: "320,16",
    sourceId: "1035478",
  },
  {
    sourceFile: "A_DC",
    processDate: "20/05/2024",
    event: "REFUND / 300,00",
    entryDate: "20/05/2024",
    transactions: "300,00",
    payables: "-300,00",
    sourceId: "4478962",
  },
];

type WebsiteTableProps = {
  className?: string;
};
export const WebsiteTable: React.FC<WebsiteTableProps> = ({ className }) => {
  return (
    <div
      className={twMerge(
        "hidden md:block shadow-xl shadow-gray-500/10 drop-shadow-2xl rounded-xl mt-28 w-full overflow-hidden bg-white pb-4",
        className,
      )}
    >
      <Typography as="p" variant="body" className="p-4">
        Transaction #24830444014015354530428
      </Typography>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] text-slice-purple">
              Source File
            </TableHead>
            <TableHead className="text-slice-purple">Process Date</TableHead>
            <TableHead>Event </TableHead>
            <TableHead className="text-slice-purple">Entry Date</TableHead>
            <TableHead className="text-right">Transactions</TableHead>
            <TableHead className="text-right">Installments</TableHead>
            <TableHead className="text-right">Payables</TableHead>
            <TableHead className="text-right">Settlement</TableHead>
            <TableHead className="text-right">Recon_EP747</TableHead>
            <TableHead className="text-right text-slice-purple">
              Source ID
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tableData.map(
            ({
              sourceId,
              sourceFile,
              processDate,
              event,
              entryDate,
              transactions = "",
              installments = "",
              payables = "",
              settlement = "",
              reconEp747 = "",
            }) => (
              <TableRow key={sourceId}>
                <TableCell className="flex text-center pr-6">
                  <span className="text-xs w-full font-semibold rounded-2xl bg-slice-muted text-white px-4 py-1">
                    {sourceFile}
                  </span>
                </TableCell>
                <TableCell className="text-slice-purple font-semibold">
                  {processDate}
                </TableCell>
                <TableCell>{event}</TableCell>
                <TableCell className="text-slice-purple">{entryDate}</TableCell>
                <TableCell className="text-right">{transactions}</TableCell>
                <TableCell className="text-right">{installments}</TableCell>
                <TableCell className="text-right">{payables}</TableCell>
                <TableCell className="text-right">{settlement}</TableCell>
                <TableCell className="text-right">{reconEp747}</TableCell>
                <TableCell className="text-slice-purple text-right">
                  {sourceId}
                </TableCell>
              </TableRow>
            ),
          )}
        </TableBody>
        <TableFooter className="bg-white">
          <TableRow>
            <TableCell colSpan={5} className="text-right font-semibold">
              1.620,96
            </TableCell>
            <TableCell className="text-right font-semibold">960,48</TableCell>
            <TableCell className="text-right font-semibold">340,32</TableCell>
            <TableCell className="text-right font-semibold">0,00</TableCell>
            <TableCell className="text-right font-semibold">320,16</TableCell>
            <TableCell className="text-right font-semibold" />
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};
