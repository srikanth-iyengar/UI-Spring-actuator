import * as React from "react";
import AppDrawer from "./AppDrawer";
import AppContent from "./AppContent";

export default function Body() {
  return (
    <div>
      <AppDrawer />
      <AppContent />
    </div>
  );
}
