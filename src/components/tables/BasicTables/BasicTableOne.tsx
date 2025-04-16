import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../../components/ui/Table/Table";  // Note: explicitly importing from Table.tsx
import Badge from "../../../components/ui/Badge/Badge";

interface Team {
  id: number;
  team: {
    name: string;
    captain: string;
    shortName: string;
  };
  homeGround: string;
  keyPlayers: string[];
  titles: string;
  status: string;
}

export default function TeamStats() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
      <div className="p-6 border-b border-gray-200 dark:border-gray-800">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
          IPL Teams Overview
        </h3>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Comprehensive details of all IPL teams including their performance and key statistics
        </p>
      </div>

      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableCell className="px-6 py-4 font-medium">Team</TableCell>
              <TableCell className="px-4 py-4 font-medium">Home Ground</TableCell>
              <TableCell className="px-4 py-4 font-medium">Key Players</TableCell>
              <TableCell className="px-4 py-4 font-medium">Titles</TableCell>
              <TableCell className="px-4 py-4 font-medium">Status</TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {/* Add your table rows here */}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
