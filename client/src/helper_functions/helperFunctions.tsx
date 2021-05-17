export const addSpaceAndUpperCaseText = (key: string) =>
  key.replace(/([A-Z]|[0-9])/g, ' $1').replace(/^./, function (str) {
    return str.toUpperCase();
  }) + ':';
