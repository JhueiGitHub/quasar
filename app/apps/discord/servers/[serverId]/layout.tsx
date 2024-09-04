import { useState } from "react";
import NavigationSidebar from "../../components/navigation/navigation-sidebar";
import { ModalProvider } from "../../components/providers/modal-provider";
import ServerContent from "@dis/servers/[serverId]/page"; // Create this component

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [currentServerId, setCurrentServerId] = useState<string | null>(null);

  return (
    <div className="h-full">
      <div className="hidden md:flex h-full w-[72px] z-30 flex-col fixed">
        <NavigationSidebar onServerSelect={setCurrentServerId} />
      </div>
      <ModalProvider />
      <main className="md:pl-[72px] h-full">
        {currentServerId ? (
          <ServerContent serverId={currentServerId} />
        ) : (
          children
        )}
      </main>
    </div>
  );
};

export default MainLayout;
