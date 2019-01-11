//

import { getMenuListFromRouter, forEach } from "./util";
import routers from "@/router/config";

export const getMenuList = accessKeys => {
  return getMenuListFromRouter(routers, accessKeys);
};
