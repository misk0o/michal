
// src/app/not-found.tsx


import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export const metadata = { title: `Stránka nenájdená | Miskova stranocka` };

export default function NotFound() {

  return (
    <Container>
      <Typography> Stránka neexistuje</Typography>
    </Container>
  );

}