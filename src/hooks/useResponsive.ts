import { useEffect, useState } from "react";

type DeviceType = "mobile" | "tablet" | "desktop";

const useResponsive = () => {
  const [device, setDevice] = useState<DeviceType>("desktop");

  const updateDeviceClass = (newDevice: DeviceType) => {
    const root = document.documentElement;

    // Remove old device classes
    root.classList.remove("mobile", "tablet", "desktop");

    // Add the new one
    root.classList.add(newDevice);
  };

  const handleResize = () => {
    const width = window.innerWidth;
    let newDevice: DeviceType = "desktop";

    if (width < 640) newDevice = "mobile";
    else if (width >= 640 && width < 1024) newDevice = "tablet";

    setDevice(newDevice);
    updateDeviceClass(newDevice);
  };

  useEffect(() => {
    handleResize(); // set on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return device;
};

export default useResponsive;
