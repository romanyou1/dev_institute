interface UserCardProps {
  name?: string;
  age?: number;
  role?: string;
}

const UserCard: React.FC<UserCardProps> = ({
  name = "Anonymous",
  age = 18,
  role = "User",
}) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Role: {role}</p>
    </div>
  );
};

export default UserCard;