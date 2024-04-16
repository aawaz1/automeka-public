import { useEffect } from "react";
import { setupNotificationToken } from "../utils/firebaseMethods";

const MessagingComponent = () => {
  useEffect(() => {
    setupNotificationToken()
  }, []);

  return null;
};

export default MessagingComponent;
