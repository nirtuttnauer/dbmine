import { SidebarIcon } from './SidebarIcon';
import { AddButton } from './AddButton';

export default function Sidebar() {
  return (
    <div className="w-full h-full bg-gray-100 border-r flex flex-col items-center p-4">
      {/* Navigation icons */}
      <div className="flex flex-col gap-6 items-center mt-8">
        <SidebarIcon label="DB 1" />
        <SidebarIcon label="DB 2" />
        <SidebarIcon label="DB 3" />
      </div>

      {/* Add Button */}
      <div className="mt-auto">
        <AddButton />
      </div>
    </div>
  );
}