interface User {
  readonly id: number;
  name: string;
  email: string;
}

interface PremiumUser extends User {
  membershipLevel?: string;
}

function printUserDetails(user: PremiumUser): void {
  console.log(`ID: ${user.id}`);
  console.log(`Name: ${user.name}`);
  console.log(`Email: ${user.email}`);
  console.log(`Membership Level: ${user.membershipLevel ?? "None"}`);
}

const premiumUser: PremiumUser = {
  id: 101,
  name: "Alice",
  email: "alice@example.com",
  membershipLevel: "Gold"
};

printUserDetails(premiumUser);

// This would cause an error:
// premiumUser.id = 202;