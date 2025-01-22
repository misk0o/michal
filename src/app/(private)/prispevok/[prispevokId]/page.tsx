
// src/app/prispevok/[id]/page.tsx


import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export const metadata = { title: `prispevok | Miskova stranocka` };

export default function ProfilDetail( { params }: {
    params: {id:string }
} ) {

  return (
    <Container>
      <Typography> Detail prispevku {params.id} </Typography>
    </Container>
  );

}