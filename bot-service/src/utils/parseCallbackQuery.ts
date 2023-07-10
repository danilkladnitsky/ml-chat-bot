export const parseCallbackQuery = <Q>(payload: string): Q => {
  try {
    return JSON.parse(payload);
  } catch (error) {
    console.log(error);
    return null;
  }
};
