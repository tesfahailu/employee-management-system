export function minMaxLength(
  text: string,
  minLength: number,
  maxLength?: number,
) {
  let result = !text || text.length < minLength;
  if (maxLength) result = result || text.length < minLength;
  return result;
}

export function validEmail(text: string) {
  const regex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
  );
  return regex.test(text);
}

export function validPhoneNumber(text: string) {
  const regex = RegExp(
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
  );
  return regex.test(text);
}

let registeredUsers = ['sfs@gmail.com'];

export function userExists(username: string) {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (registeredUsers.findIndex((u) => u === username) !== -1) {
        resolve(true);
      } else {
        resolve(false);
      }
    });
  });
}
