import { gql, useQuery } from "@apollo/client"
import { useEffect } from "react"
import { Header } from "./components/Header"
import { Lesson } from "./components/Lesson"
import { Sidebar } from "./components/Sidebar"
import { Video } from "./components/Video"
import { client } from "./lib/apollo"
import { Event } from "./pages/Event"

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
`

interface Lesson {
  id: string,
  title: string
}

function App() {

  // const { data } = useQuery<{lessons: Lesson[]}>(GET_LESSONS_QUERY)
  // console.log(data);

  // useEffect(() => {
  //   client.query(
  //       {
  //         query: GET_LESSONS_QUERY,
  //       }).then(response => {
  //         console.log(response.data)
  //       })
  // },[])

  return (

    <div>
      <Event />
    </div>

    // <ul>
    //   {data?.lessons.map(lesson => {
    //     return <li key={lesson.id}>{lesson.title}</li>
    //   })}
    // </ul>
  )
}

export default App
