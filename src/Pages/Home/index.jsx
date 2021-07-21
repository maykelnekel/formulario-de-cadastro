import { Button, CardHeader, Grid, Paper, Typography } from "@material-ui/core"
import { Link, Redirect, useHistory} from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';


export default function HomePage ({newUser, isLoged}) {
   
    const useStyles = makeStyles((theme) => ({
        homeContainer: {
            height: '100vh',
            width: '100vw',
        },
        contentContainer: {
            height: '60vh',
            width: '60vw',
            textAlign: 'center',
        },
        paper: {
            display: 'flex',
            flexWrap: 'wrap',
            margin: theme.spacing(1),
            width: theme.spacing(35),
            height: theme.spacing(20),
            padding: '1rem',
            textAlign: 'left',
          },
        link : {
            textDecoration: 'none'
        },

      }));
      const classes = useStyles() 
    
    if (!isLoged) {
       return <Redirect to='/'/>
    }
    return(
        <div height='100vh'>

      
        <Grid
        className={classes.homeContainer}
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        >
            <Grid
        className={classes.contentContainer}
        container
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        >
                <Typography variant='h3' color="primary">Bem vindo {newUser.name}!</Typography>
                <Paper className={classes.paper}  >
                    <Typography variant='h6' color="primary" >Dados do usuário</Typography>
                    <Typography>Nome: {newUser.name}!</Typography>
                    <Typography>E-mail: {newUser.email}</Typography>
                    <Typography>Senha atual: {newUser.password}</Typography>
                </Paper>
                <Link to = '/' className={classes.link}>
                    <Button variant="contained" color="primary" >
                        Voltar para tela de cadastro
                    </Button>                
                </Link>
            </Grid>
        </Grid>
        </div>
    )
}