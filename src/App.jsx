import Profile from "./components/Profile/Profile";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";


import users from "./userData.json";
import friends from "./friends.json";
import transactions from "./transactions.json";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "40px",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", gap: "20px" }}>
        {users.map((user, index) => (
          <Profile
            key={index}
            name={user.username}
            tag={user.tag}
            location={user.location}
            image={user.avatar}
            stats={user.stats}
          />
        ))}
      </div>
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
