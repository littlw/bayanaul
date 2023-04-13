import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
// import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsappIcon from '@mui/icons-material/WhatsApp';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';

const mainFeaturedPost = {
  title: 'Эксклюзивный тур в Баянауыл',
  description:
    "Студенческий тур, чтобы наконец отдохнуть от тяжелых файналов",
  image: 'jasybai.jpg',
  imageText: 'main image description',
  linkText: 'Instagram',
};

const featuredPosts = [
  {
    title: 'Озеро Жасыбай',
    description:
      '',
    image: 'jasybaimini.jpg',
    imageLabel: 'Image Text',
  },
  {
    title: 'Торайғыр',
    description:
      '',
    image: 'toraigyr.jpg',
    imageLabel: 'Image Text',
  },
  {
    title: 'Музей Қаныш И.С',
    description:
      '',
    image: 'muzei.jpg',
    imageLabel: 'Image Text',
  },
  {
    title: 'Қоңыр-әулие',
    description:
      '',
    image: 'konyraulie.jpg',
    imageLabel: 'Image Text',
  },
  {
    title: 'Кемпіртас',
    description:
      '',
    image: 'kempirtas.jpg',
    imageLabel: 'Image Text',
  },
];



const sidebar = {
  title: 'О нас',
  description:
    'Мы студенты университета КАЗГЮУ делаем тур, чтобы студенты наконец отдохнули после окончания очередного курса и могли найти гармонию с чистой природой Баянауыла.',
  social: [
    { name: 'Whatsapp', icon: WhatsappIcon },
  ],
};

const theme = createTheme();

export default function Blog() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Сердце степи: Баянауыл" />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main/>
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer
        // title="Footer"
        description="❤️❤️❤️"
      />
    </ThemeProvider>
  );
}
