// src/apps/Finder/index.tsx
"use client";

import React from "react";
import FileExplorer from "./FileExplorer";
import { useFileSystem } from "@/hooks/useFileSystem";

const Finder: React.FC = () => {
  const {
    currentFolder,
    folderContents,
    favorites,
    navigateToFolder,
    navigateUp,
    navigateForward,
    createFolder,
    renameFolder,
    deleteFolder,
    updateFolderPosition,
    addToFavorites,
    removeFromFavorites,
    getFolderName,
    canNavigateForward,
    wipeDatabase,
  } = useFileSystem();

  return (
    <div className="h-full w-full">
      <FileExplorer
        currentFolder={currentFolder}
        folderContents={folderContents}
        favorites={favorites}
        onNavigate={navigateToFolder}
        onNavigateUp={navigateUp}
        onNavigateForward={navigateForward}
        onCreateFolder={createFolder}
        onRenameFolder={renameFolder}
        onDeleteFolder={deleteFolder}
        onUpdateFolderPosition={updateFolderPosition}
        onAddToFavorites={addToFavorites}
        onRemoveFromFavorites={removeFromFavorites}
        getFolderName={getFolderName}
        canNavigateForward={canNavigateForward}
        onWipeDatabase={wipeDatabase}
      />
    </div>
  );
};

export default Finder;
