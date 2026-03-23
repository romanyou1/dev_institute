function getAction(role: string): string {
  switch (role) {
    case "admin":
    case "superadmin":
      return "Manage users and settings";

    case "editor":
    case "author":
      return "Edit content";

    case "viewer":
      return "View content";

    case "guest":
      return "Limited access";

    default:
      return "Invalid role";
  }
}