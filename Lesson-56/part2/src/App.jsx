import { useEffect, useState } from "react"
import { getAllComments } from "./services/comment"
import { getAllPosts } from "./services/post"
import { getAllUsers } from "./services/user"

function App() {

  const [users, setusers] = useState([])
  const [comments, setcomments] = useState([])
  const [posts, setposts] = useState([])


  const getUsers = async () => {
    try {
      const data = await getAllUsers()
      setusers(data.users)
      setcomments([])
      setposts([])
    } catch (error) {
      console.log(error.message);

    }
  }
  const getComments = async () => {
    try {
      const data = await getAllComments()
      setcomments(data.comments)
      setposts([])
      setusers([])
    } catch (error) {
      console.log(error.message);

    }
  }
  const getPosts = async () => {
    try {
      const data = await getAllPosts()
      setposts(data.posts)
      setcomments([])
      setusers([])
    } catch (error) {
      console.log(error.message);
    }
  }


  useEffect(() => getUsers(), [])

  return (
    <div className="max-w-[1140px] w-[90%] mx-auto py-10 font-[Inter]">
      {/* Header Buttons */}
      <div className="grid grid-cols-3 gap-5 mb-10">
        <button className="p-[15px_0] text-lg font-semibold bg-violet-500 hover:bg-violet-600 text-white rounded-xl shadow-md transition-all duration-200" onClick={getUsers}>
          Users
        </button>
        <button className="p-[15px_0] text-lg font-semibold bg-violet-500 hover:bg-violet-600 text-white rounded-xl shadow-md transition-all duration-200" onClick={getPosts}>
          Posts
        </button>
        <button className="p-[15px_0] text-lg font-semibold bg-violet-500 hover:bg-violet-600 text-white rounded-xl shadow-md transition-all duration-200" onClick={getComments}>
          Comments
        </button>
      </div>

      {
        users.length ? <>
          <h2 className="text-2xl font-bold mb-5 border-b pb-2 border-gray-300">
            👤 Users
          </h2>
          <div className="grid grid-cols-4 gap-6 mb-16">
            {
              users.map(user => <div
                key={user.id}
                className="bg-white border border-gray-200 rounded-2xl shadow hover:shadow-lg transition-all duration-200 p-4">
                <img
                  src={user.image}
                  alt="User"
                  className="rounded-full w-20 h-20 mx-auto mb-3 border-2 border-violet-400"
                />
                <h3 className="text-center font-semibold text-lg">{user.firstName} {user.lastName}</h3>
                <p className="text-center text-sm text-gray-500 mb-3">{user.company?.title}</p>
                <div className="text-sm text-gray-700">
                  <p><b>Age:</b> {user.age}</p>
                  <p><b>Email:</b>{user.email}</p>
                  <p><b>University:</b> {user.university}</p>
                </div>
                <button className="mt-4 w-full bg-violet-500 text-white py-2 rounded-lg hover:bg-violet-600 transition-all">
                  View Profile
                </button>
              </div>)
            }
          </div>
        </> : null
      }

      {
        posts.length ? <>
          <h2 className="text-2xl font-bold mb-5 border-b pb-2 border-gray-300">
            📝 Posts
          </h2>
          <div className="grid grid-cols-4 gap-6 mb-16">
            {
              posts.map(post => <div
                key={post.id} className="bg-white border border-gray-200 rounded-2xl shadow hover:shadow-lg transition-all duration-200 p-4">
                <h3 className="font-semibold text-lg mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-4 mb-4">
                  {post.body}
                </p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>👀 {post.views} views</span>
                  <span>❤️ {post.reactions?.likes} likes</span>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {post.tags?.map(tag => <span className="text-xs bg-violet-100 text-violet-600 px-2 py-1 rounded-lg">
                    {tag}
                  </span>)}
                </div>
              </div>)
            }
          </div>
        </> : null
      }

      {
        comments.length ? <>
          <h2 className="text-2xl font-bold mb-5 border-b pb-2 border-gray-300">
            💬 Comments
          </h2>
          <div className="grid grid-cols-4 gap-6 mb-16">
            {
              comments.map(comment => <div
                key={comment.id}
                className="bg-white border border-gray-200 rounded-2xl shadow hover:shadow-lg transition-all duration-200 p-5">
                <p className="text-gray-700 mb-4 italic">
                  {comment.body}
                </p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>👍 {comment.likes} likes</span>
                </div>
                <div className="mt-3 text-sm text-gray-600">
                  <b>User:</b> {comment.user?.fullName} (@{comment.user?.username})
                </div>
              </div>)
            }
          </div>
        </> : null
      }
    </div>
  );
}

export default App;
