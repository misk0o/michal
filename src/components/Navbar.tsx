"use client";

import React, { useState } from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article'; // For "Príspevky"
import LoginIcon from '@mui/icons-material/Login'; // For "Prihlásenie"
import PersonAddIcon from '@mui/icons-material/PersonAdd'; // For "Registrácia"
import PersonIcon from '@mui/icons-material/Person';
import { useRouter } from 'next/navigation';
import Paper from '@mui/material/Paper';

const Navbar = () => {
  const [value, setValue] = useState(0);
  const router = useRouter();

  return (
    <Paper
      sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label="Domov"
          icon={<HomeIcon />}
          onClick={() => router.push('/')}
        />
        <BottomNavigationAction
          label="Príspevky"
          icon={<ArticleIcon />}
          onClick={() => router.push('/prispevok')}
        />
        <BottomNavigationAction
          label="Prihlásenie"
          icon={<LoginIcon />}
          onClick={() => router.push('/auth/prihlasenie')}
        />
        <BottomNavigationAction
          label="Registrácia"
          icon={<PersonAddIcon />}
          onClick={() => router.push('/auth/registracia')}
        />
        <BottomNavigationAction
          label="Profil"
          icon={<PersonIcon />}
          onClick={() => router.push('/profil')}
        />
      </BottomNavigation>
    </Paper>
  );
};

export default Navbar;
