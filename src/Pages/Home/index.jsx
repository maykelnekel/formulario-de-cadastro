import { Button, CardHeader, Grid, Paper, Typography } from "@material-ui/core"
import { Link, Redirect } from "react-router-dom"

export default function HomePage ({newUser, isLoged}) {
    if (!isLoged) {
       return <Redirect to='/'/>
    }
    return(
        <Grid>
            <CardHeader>
                <Link to='/'>
                    Voltar para tela de cadastro
                </Link>
                <Typography>Bem vindo {newUser.name}!</Typography>
            </CardHeader>
            <Paper>
                <Typography>Dados</Typography>
                <Typography>{newUser.name}!</Typography>
                <Typography>{newUser.email}</Typography>
                <Typography>{newUser.senha}</Typography>
            </Paper>
        </Grid>
    )
}