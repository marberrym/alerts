import generateID from "./generateID";

const reducer = (state, action) => {
    switch (action.type) {
      case "add":
        if (!action.id) {
            action.id = generateID();
        }
        return { activeAlerts: [...state.activeAlerts, action]};
      case "remove":
        return { activeAlerts: [...state.activeAlerts].filter(alert => alert.id !== action.id)}
      default:
    }
  }

  export default reducer;
