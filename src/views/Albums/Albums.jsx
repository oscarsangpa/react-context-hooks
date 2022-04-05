import { useEffect, useState } from "react";
import { getComments } from "../../services/UserServices";

const Comments = () => {
  const [comments, setComments] = useState([])

  useEffect(()=>{
    getComments()
      .then(response => setComments(response.data) )
      .catch(error => console.log(error))
  })
  return ( 
    <>
    {
      comments.map(comment => {
        return (
          <div>
            <h5>{comment.name}</h5>
            <p>{comment.email}</p>
            <p>{comment.body}</p>
          </div>
        )
      })
    }
      <p>Albums</p>
    </>
   );
}
 
export default Comments;