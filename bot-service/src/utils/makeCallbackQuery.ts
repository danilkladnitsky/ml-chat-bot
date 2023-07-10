export const makeCallbackQuery = (payload: any) => {
  try {
    return JSON.stringify(payload);
  } catch (error) {
    console.log(error);
    return null;
  }
};
