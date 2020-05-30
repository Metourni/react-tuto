import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
// import Link from '@material-ui/core/Link';

import {PostsService} from './services'
import TextField from "@material-ui/core/TextField";

class Posts extends React.Component {

    constructor(props) {
        super(props);
        this.state= {
            posts:[],
            input:'a'
        }
        this.inputRef = React.createRef();
    }

    componentDidMount() {
         PostsService.getAll()
            .then(response => response.json())
            .then(json => {
                console.log(json)
                this.setState({posts:json})
            })
            .catch(err=>{
                console.log('error :',err)
                return null
            })
    }

    setValue = (key, value)=>{
        console.log('set value of: ',key,value)
        this.setState({
            [key]:value
        })
    };

    clear = ()=>{
        console.log("this.inputRef",this.inputRef.current);
        this.inputRef.current.value = ''
    }

    render() {
        const posts = this.state.posts;

        // const classes = useStyles();
        return (
            <React.Fragment>
                <CssBaseline/>
                <AppBar position="relative">
                    <Toolbar>
                        <CameraIcon/>
                        <Typography variant="h6" color="inherit" noWrap>
                            Tuto
                        </Typography>
                    </Toolbar>
                </AppBar>

                <main>
                    {/* Hero unit */}
                    <div>
                        <Container maxWidth="sm">
                            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                                Tuto
                            </Typography>

                            <div>
                                <TextField
                                    id="outlined-basic"
                                    label="Outlined"
                                    variant="outlined"
                                    value={this.state.input}

                                    onChange={(e)=>this.setValue('input',e.target.value)}
                                />
                                <input ref={this.inputRef}/>
                                <Button onClick={this.clear}>Clear</Button>
                            </div>

                        </Container>
                    </div>
                    <Container maxWidth="md">
                        {/* End hero unit */}
                        <Grid container spacing={4}>
                            {posts.map((post) => (
                                <Grid item key={post.id} xs={12} sm={6} md={4}>
                                    <Card>
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {post.title}
                                            </Typography>
                                            <Typography>
                                                {post.body}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="small" color="primary">
                                                View
                                            </Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </main>
            </React.Fragment>
        );
    }
}

export default Posts;
