import React from 'react';
import { useBlogSelectors } from '../modules/blogs/selectors';

import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import { Tag } from '../components/Tag';
import { removeHtmlTags } from '../utils/index';
// import { history } from '../modules/history';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
    },
  },
  cardWrap: {
    marginBottom: '2rem',
    alignSelf: 'stretch',
  },
  card: {
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
    [theme.breakpoints.up('md')]: {
      width: 345,
    },
  },
  media: {
    height: 140,
  },
}));

export const BlogList = () => {
  const classes = useStyles();
  const { blogList, isFetchBlogList } = useBlogSelectors();

  const handleOnClickTag = (key) => {
    // history.push('/tags/' + key);
  };

  let list;
  if (isFetchBlogList) {
    list = (
      <Grid item className={classes.cardWrap}>
        <Card className={classes.card}>
          <div>
            <Skeleton
              animation="wave"
              variant="rect"
              className={classes.media}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h3">
                <Skeleton animation="wave" variant="rect" />
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <Skeleton animation="wave" variant="rect" width="20%" />
              </Typography>
            </CardContent>
          </div>
          <CardActions>
            <Skeleton
              animation="wave"
              height={10}
              width="5%"
              style={{ marginBottom: 6 }}
            />
          </CardActions>
        </Card>
      </Grid>
    );
  } else {
    list = blogList.contents?.map((blog) => (
      <Grid item className={classes.cardWrap} key={blog.id}>
        <Card className={classes.card}>
          <Link to={'/blog/' + blog.id}>
            <CardMedia
              className={classes.media}
              image={
                blog.featuredImage?.url || 'https://placehold.jp/240x140.png'
              }
              title={blog.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h3">
                {blog.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {removeHtmlTags(blog?.content).substring(0, 100)}...
              </Typography>
            </CardContent>
          </Link>
          <CardActions>
            {blog.tags?.map((tag, i) => (
              <Tag tag={tag} handleOnClick={handleOnClickTag} key={i} />
            ))}
          </CardActions>
        </Card>
      </Grid>
    ));
  }

  return (
    <Grid container className={classes.root}>
      {list}
    </Grid>
  );
};
