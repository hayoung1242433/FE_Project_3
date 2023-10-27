import styled from "styled-components"
import {AiFillStar} from "react-icons/ai"
import {useNavigate} from "react-router"

export default function PosterItem({movie}) {
  const navigate = useNavigate();
  const onClickPoster = () =>{
    navigate("/movie/" + movie.id)
    // 원하는 곳으로 이동할 수 있게 해줌 
  }


    return (
        <Container onClick = {onClickPoster}>
            <ImgBox>
             <img src = 
             {`https://image.tmdb.org/t/p/original/` + movie.backdrop_path} alt =""/>
            </ImgBox>
            <Overlay>
                <Title>{movie.original_title}</Title>
                <SubTitle>{movie.release_date} /  <AiFillStar/> {movie.vote_average} 
                </SubTitle>

                <Description>{movie.overview.slice(0,200) + "..."} </Description> 
            </Overlay>
        </Container>
    )
}
const Container = styled.div`
    position: relative;
`

const ImgBox = styled.div`
  height: calc(100vh - 80px);
  img {
    display: block;
  }
`

const Overlay = styled.div`
  padding: 80px 40px;
  position: absolute;
  bottom: 0;
  /* transform: translateY(-50%); */
  width: 100%;
  text-align: left;
  background-image: linear-gradient(rgb(0, 0, 0, 0), rgb(0, 0, 0, 1));
`
const Title = styled.h5`
  font-size: 3.7rem;
`
const SubTitle = styled.p`
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 20px 0;
`

const Description = styled.p`
  font-style: italic;
  width: 70%;
`