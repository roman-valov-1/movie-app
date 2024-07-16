import { useParams } from "react-router-dom";



function MoviePage() {
   const { id } = useParams();

   return (
      <div>MoviePage: {id}</div>
   )
}

export default MoviePage;