import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Markdown from './Markdown';

function Main(props) {
  const { title } = props;
  
  return (
    <Grid
      item
      xs={12}
      md={8}
      sx={{
        '& .markdown': {
          py: 3,
        },
      }}
    >
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider />
      <Typography><h1>Тур в Баянаул! 🏔️ </h1>

<p1>Экспресс Тур по самым красивым местам Баянауыла, вы узнаете множество всяких легенд, о которых вам еще никто не рассказывал. Вы увидите самые красивые места природы, на которых было бы греховно не сфоткаться.<br/> Еда, проезд, экскурсионная программа все от нас, так что не придется не о чем беспокоится🙌</p1>
<div><h2>🗓️ 16 апреля </h2>
<h2>📍Время выезда- 6:00 утра,<br/> 📍Время приезда - 23:00 вечера </h2>
<h2>🏛️Сбор: парковка Казгюу</h2>
<h5>📌Стоимость: 16 900 тенге <br/>📌Оплата каспи</h5>
<h2>По программе вас ждет:</h2>
<h3>▫️Торайгыр
▫️Скала Кемпир-Тас
▫️Пещера Коныр-Аулие
▫️Озеро Жасыбай
▫️Музей академика К.И. Сатпаева</h3>
</div> </Typography>
    </Grid>
  );
}

Main.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
};

export default Main;