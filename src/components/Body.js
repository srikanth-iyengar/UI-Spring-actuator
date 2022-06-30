import * as React from "react";
import AppDrawer from "./AppDrawer";
import AppContent from "./AppContent";
import HttpContent from "./HttpContent";
export default function Body() {
  return (
    <div className="">
      <AppDrawer />
      <AppContent />
      <HttpContent />
    </div>
  );
}
