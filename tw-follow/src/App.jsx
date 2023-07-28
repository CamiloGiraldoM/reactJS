import { TwitterFollowCard } from "./TwitterFollowCard.jsx";
import "./App.css";

const users = [
  {
    userName: 'midudev',
    name: 'Miguel Angel Duran',
    isFollowing: true
  },
  {
    userName: 'Xiaomi',
    name: 'Xiaomi',
    isFollowing: false
  },
  {
    userName: 'reactjs',
    name: 'React',
    isFollowing: false
  },
  {
    userName: 'platzi',
    name: 'Platzi',
    isFollowing: true
  }
]

export function App() {
  return (
    <section className="App">
        {
          users.map(({userName, name, isFollowing}) => (
            <TwitterFollowCard 
              userName={userName}
              initialIsFollowing={isFollowing}
            >
              {name}
            </TwitterFollowCard>
            )
          )
        }
    </section>
  )
}
