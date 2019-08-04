export const catchErrors = () => (next) => (action) => {
    if (action.error) {
      console.error(action.payload.message)
    } else {
      next(action)
    }
  }