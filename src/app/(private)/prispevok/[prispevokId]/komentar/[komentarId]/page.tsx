// src/app/prispevok/page.tsx


import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export const metadata = { title: "Detail Komentaru prispevku | Miskova stranocka" };

export default function PostCommentDetail({
    params, 
}:{
    params: {
        prispevokId: string;
        komentarId: string;
    };
}) {
  return (
    <Container>
      <Typography> Detail Komentaru od: {params.komentarId} k prispevku {params.prispevokId} </Typography>
    </Container>
  );

}