//

export const getMenuListFromRouter = (list, accessKeys) => {
  var result = [];
  forEach(list, item => {
    if (item.children) {
      item.children = getMenuListFromRouter(item.children, accessKeys);
    }
    if (item.meta && item.meta.hideInMenu) {
      // TODO
    } else {
      result.push(item);
    }
  });
  return result;
};

export const forEach = (arr, fn) => {
  if (!arr.length || !fn) return;
  let i = -1;
  let len = arr.length;
  while (++i < len) {
    let item = arr[i];
    fn(item, i, arr);
  }
};
