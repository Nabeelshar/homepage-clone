import { useState } from "react"
import { Bell, Bookmark, ChevronDown, Grid, Home, Menu, MessageCircle, PlayCircle, Search, ShoppingBag, Users, Video } from "lucide-react"
import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

const menuItems = [
  { icon: <Users size={20} />, label: "Friends" },
  { icon: <Bookmark size={20} />, label: "Saved" },
  { icon: <ShoppingBag size={20} />, label: "Marketplace" },
  { icon: <PlayCircle size={20} />, label: "Watch" },
  { icon: <Grid size={20} />, label: "Groups" },
]

const contacts = [
  "John Doe",
  "Jane Smith",
  "Mike Johnson",
  "Emily Brown",
  "Chris Lee",
  "Sarah Wilson",
  "David Taylor",
]

const stories = [
  { name: "Create Story", image: "/placeholder-user.jpg", type: "create" },
  { name: "Friend 1", image: "/placeholder.svg?height=200&width=110", type: "story" },
  { name: "Friend 2", image: "/placeholder.svg?height=200&width=110", type: "story" },
  { name: "Friend 3", image: "/placeholder.svg?height=200&width=110", type: "story" },
  { name: "Friend 4", image: "/placeholder.svg?height=200&width=110", type: "story" },
]

const posts = [
  {
    author: "Jane Smith",
    avatar: "/placeholder-user.jpg",
    content: "Just had an amazing day at the beach! 🏖️ #summervibes",
    image: "/placeholder.svg?height=400&width=600",
    likes: 42,
    comments: 7,
    shares: 2,
    time: "2h",
  },
  {
    author: "John Doe",
    avatar: "/placeholder-user.jpg",
    content: "Check out this delicious meal I cooked! 🍝 #homechef",
    image: "/placeholder.svg?height=400&width=600",
    likes: 23,
    comments: 5,
    shares: 1,
    time: "4h",
  },
]

export default function FacebookClone() {
  const [newPost, setNewPost] = useState("")

  return (
    <div className="min-h-screen bg-[#f0f2f5]">
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-[1920px] mx-auto px-4 py-1 flex items-center justify-between">
          <div className="flex items-center flex-1">
            <svg height="40" width="40" viewBox="0 0 36 36">
              <path d="M20.181 35.87C29.094 34.791 36 27.202 36 18c0-9.941-8.059-18-18-18S0 8.059 0 18c0 8.442 5.811 15.526 13.652 17.471L14 34h5.5l.681 1.87Z" fill="#0866FF"></path>
              <path d="M13.651 35.471v-11.97H9.936V18h3.715v-2.37c0-6.127 2.772-8.964 8.784-8.964 1.138 0 3.103.223 3.91.446v4.983c-.425-.043-1.167-.065-2.081-.065-2.952 0-4.09 1.116-4.09 4.025V18h5.883l-1.008 5.5h-4.867v12.37a18.183 18.183 0 0 1-6.53-.399Z" fill="#FFFFFF"></path>
            </svg>
            <div className="ml-2 relative rounded-full">
              <Input
                type="search"
                placeholder="Search Facebook"
                className="pl-10 pr-4 py-2 rounded-full bg-[#f0f2f5] w-[240px] focus:w-[320px] transition-all duration-300 border-none"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#65676b]" size={16} />
            </div>
          </div>
          <nav className="flex-1 flex justify-center space-x-2">
            <Button variant="ghost" size="icon" className="rounded-xl h-[48px] w-[110px] hover:bg-[#f0f2f5]">
              <Home className="w-7 h-7 text-[#65676b]" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-xl h-[48px] w-[110px] hover:bg-[#f0f2f5]">
              <PlayCircle className="w-7 h-7 text-[#65676b]" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-xl h-[48px] w-[110px] hover:bg-[#f0f2f5]">
              <ShoppingBag className="w-7 h-7 text-[#65676b]" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-xl h-[48px] w-[110px] hover:bg-[#f0f2f5]">
              <Users className="w-7 h-7 text-[#65676b]" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-xl h-[48px] w-[110px] hover:bg-[#f0f2f5]">
              <Grid className="w-7 h-7 text-[#65676b]" />
            </Button>
          </nav>
          <div className="flex-1 flex items-center justify-end space-x-2">
            <Button variant="ghost" size="icon" className="rounded-full bg-[#e4e6eb] hover:bg-[#d8dadf]">
              <Menu size={20} className="text-black" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full bg-[#e4e6eb] hover:bg-[#d8dadf]">
              <MessageCircle size={20} className="text-black" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full bg-[#e4e6eb] hover:bg-[#d8dadf]">
              <Bell size={20} className="text-black" />
            </Button>
            <Avatar className="h-10 w-10">
              <img src="/placeholder-user.jpg" alt="User" className="rounded-full" />
            </Avatar>
          </div>
        </div>
      </header>

      <main className="max-w-[1920px] mx-auto px-4 py-6 flex gap-8">
        <aside className="hidden lg:block w-[360px] pr-4 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 56px)' }}>
          <nav className="space-y-1">
            <Button variant="ghost" className="w-full justify-start hover:bg-[#e4e6eb] rounded-lg h-[52px]">
              <Avatar className="h-9 w-9 mr-3">
                <img src="/placeholder-user.jpg" alt="User" className="rounded-full" />
              </Avatar>
              <span className="text-[15px] font-medium">Your Name</span>
            </Button>
            {menuItems.map((item, index) => (
              <Button key={index} variant="ghost" className="w-full justify-start hover:bg-[#e4e6eb] rounded-lg h-[52px]">
                <span className="mr-3 bg-[#e4e6eb] rounded-full p-2">{item.icon}</span>
                <span className="text-[15px] font-medium">{item.label}</span>
              </Button>
            ))}
            <Button variant="ghost" className="w-full justify-start hover:bg-[#e4e6eb] rounded-lg h-[52px]">
              <span className="mr-3 bg-[#e4e6eb] rounded-full p-2">
                <ChevronDown size={20} />
              </span>
              <span className="text-[15px] font-medium">See more</span>
            </Button>
          </nav>
          <Separator className="my-4" />
          <h3 className="font-semibold text-[17px] text-[#65676b] mb-2">Your shortcuts</h3>
          {/* Add your shortcuts here */}
        </aside>

        <div className="w-full lg:w-[680px] space-y-4 mx-auto">
          <div className="bg-white rounded-lg shadow overflow-x-auto flex space-x-2 p-4">
            {stories.map((story, index) => (
              <div key={index} className="flex-shrink-0 w-[110px] h-[200px] rounded-xl overflow-hidden relative cursor-pointer">
                <img src={story.image} alt={story.name} className="w-full h-full object-cover" />
                {story.type === 'create' ? (
                  <div className="absolute bottom-0 left-0 right-0 top-0 flex flex-col items-center justify-end bg-white">
                    <div className="bg-blue-500 rounded-full p-2 mb-2">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 1.5C6.20156 1.5 1.5 6.20156 1.5 12C1.5 17.7984 6.20156 22.5 12 22.5C17.7984 22.5 22.5 17.7984 22.5 12C22.5 6.20156 17.7984 1.5 12 1.5ZM16.5 12.7499H12.75V16.4999C12.75 16.914 12.4142 17.2499 12 17.2499C11.5858 17.2499 11.25 16.914 11.25 16.4999V12.7499H7.5C7.08579 12.7499 6.75 12.414 6.75 11.9999C6.75 11.5857 7.08579 11.2499 7.5 11.2499H11.25V7.49994C11.25 7.08573 11.5858 6.74994 12 6.74994C12.4142 6.74994 12.75 7.08573 12.75 7.49994V11.2499H16.5C16.9142 11.2499 17.25 11.5857 17.25 11.9999C17.25 12.414 16.9142 12.7499 16.5 12.7499Z" fill="white"/>
                      </svg>
                    </div>
                    <p className="text-[13px] font-semibold mb-3">Create story</p>
                  </div>
                ) : (
                  <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black to-transparent">
                    <p className="text-white text-[13px] font-semibold">{story.name}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <Card className="bg-white rounded-lg shadow">
            <div className="p-4 flex items-center space-x-2">
              <Avatar className="h-10 w-10">
                <img src="/placeholder-user.jpg" alt="User" className="rounded-full" />
              </Avatar>
              <Input
                placeholder="What's on your mind?"
                className="flex-grow bg-[#f0f2f5] border-none rounded-full"
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
              />
            </div>
            <Separator />
            <div className="px-4 py-2 flex justify-between">
              <Button variant="ghost" className="flex-1 hover:bg-[#f0f2f5] rounded-lg">
                <Video className="mr-2 h-6 w-6 text-[#f3425f]" />
                <span className="text-[15px] font-medium text-[#65676b]">Live video</span>
              </Button>
              <Button variant="ghost" className="flex-1 hover:bg-[#f0f2f5] rounded-lg">
                <svg className="mr-2 h-6 w-6 text-[#45bd62]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clipRule="evenodd" />
                </svg>
                <span className="text-[15px] font-medium text-[#65676b]">Photo/video</span>
              </Button>
              <Button variant="ghost" className="flex-1  hover:bg-[#f0f2f5] rounded-lg">
                <svg className="mr-2 h-6 w-6 text-[#f7b928]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 00-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 01-.189-.866c0-.298.059-.605.189-.866zm2.023 6.828a.75.75 0 10-1.06-1.06 3.75 3.75 0 01-5.304 0 .75.75 0 00-1.06 1.06 5.25 5.25 0 007.424 0z" clipRule="evenodd" />
                </svg>
                <span className="text-[15px] font-medium text-[#65676b]">Feeling/activity</span>
              </Button>
            </div>
          </Card>

          {posts.map((post, index) => (
            <Card key={index} className="bg-white rounded-lg shadow">
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <Avatar className="h-10 w-10 mr-3">
                      <img src={post.avatar} alt={post.author} className="rounded-full" />
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-[15px]">{post.author}</h3>
                      <p className="text-[13px] text-[#65676b]">{post.time}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" className="rounded-full hover:bg-[#f0f2f5]">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
                    </svg>
                  </Button>
                </div>
                <p className="text-[15px] mb-3">{post.content}</p>
                <img src={post.image} alt="Post content" className="w-full rounded-lg mb-3" />
                <div className="flex justify-between items-center text-[15px] text-[#65676b] mb-2">
                  <div className="flex items-center">
                    <span className="mr-1">👍❤️</span>
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex space-x-3">
                    <span>{post.comments} Comments</span>
                    <span>{post.shares} Shares</span>
                  </div>
                </div>
                <Separator className="mb-2" />
                <div className="flex justify-between">
                  <Button variant="ghost" className="flex-1 hover:bg-[#f0f2f5] rounded-lg">
                    <svg className="mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z" />
                    </svg>
                    <span className="text-[15px] font-medium text-[#65676b]">Like</span>
                  </Button>
                  <Button variant="ghost" className="flex-1 hover:bg-[#f0f2f5] rounded-lg">
                    <svg className="mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path fillRule="evenodd" d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[15px] font-medium text-[#65676b]">Comment</span>
                  </Button>
                  <Button variant="ghost" className="flex-1 hover:bg-[#f0f2f5] rounded-lg">
                    <svg className="mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path fillRule="evenodd" d="M15.75 4.5a3 3 0 11.825 2.066l-8.421 4.679a3.002 3.002 0 010 1.51l8.421 4.679a3 3 0 11-.729 1.31l-8.421-4.678a3 3 0 110-4.132l8.421-4.679a3 3 0 01-.096-.755z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[15px] font-medium text-[#65676b]">Share</span>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <aside className="hidden xl:block w-[360px] pl-4 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 56px)' }}>
          <h2 className="font-semibold text-[17px] text-[#65676b] mb-2">Contacts</h2>
          <div className="space-y-1">
            {contacts.map((contact, index) => (
              <Button key={index} variant="ghost" className="w-full justify-start hover:bg-[#e4e6eb] rounded-lg h-[52px]">
                <Avatar className="h-9 w-9 mr-3">
                  <img src="/placeholder-user.jpg" alt={contact} className="rounded-full" />
                </Avatar>
                <span className="text-[15px] font-medium">{contact}</span>
              </Button>
            ))}
          </div>
          <Separator className="my-4" />
          <h2 className="font-semibold text-[17px] text-[#65676b] mb-2">Group conversations</h2>
          <Button variant="ghost" className="w-full justify-start hover:bg-[#e4e6eb] rounded-lg h-[52px]">
            <span className="mr-3 bg-[#e4e6eb] rounded-full p-2">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"></path>
              </svg>
            </span>
            <span className="text-[15px] font-medium">Create new group</span>
          </Button>
        </aside>
      </main>
    </div>
  )
}
