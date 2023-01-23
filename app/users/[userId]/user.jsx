import Image from "next/image";
import Tweet from "./tweet";

const User = ({ user }) => {
  return (
    <section className='m-4 py-4'>
      <div className='center'>
        <div className='relative h-40 w-40 rounded-full'>
          <Image src={user?.imageUrl} alt={user?.name} fill />
        </div>
        <h1 className='text-xl font-bold'>{user?.name}</h1>
        <p className='text-sm text-stone-400'>{user?.email}</p>
      </div>
      <div className='grow'>
        <h2 className='text-2xl font-semibold tracking-tight text-stone-600'>
          Recent Tweets
        </h2>
        <ul>
          {user.tweets.map((tweet) => (
            <Tweet key={tweet.id} tweet={tweet} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default User;
