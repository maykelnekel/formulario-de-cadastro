import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver} from '@hookform/resolvers/yup';
import { Button, Grid, Paper, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    formContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      textAlign: 'center',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(30),
        height: theme.spacing(35),
      },
    },
    gridContainer: {
        width: '100vw',
        height: '100vh',
        justifyContent: 'Center'
    },
    button: {
        marginTop: '30px',
    },
    form: {
        marginTop: '10px',
    }
  }));

export default function Form ({setNewUser, setIsLoged}) {

    const classes = useStyles();
    const formSchema = yup.object().shape({
        name: yup
        .string()
        .required('Nome obrigatório'),
        email: yup
        .string()
        .required('E-mail obrigatório'),
        password: yup
        .string()
        .required('Senha obrigatória'),
        confirmPassword: yup
        .string()
        .required('Confirme sua senha') ,
    })
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(formSchema), 
    })
    const handleSubmitData = (data) => {
        setNewUser(data)
        setIsLoged(true)
    }
    return(
        <Grid className={classes.gridContainer}container justifyContent="center" alignItems="center">
                <Paper className={classes.formContainer} elevation={3}>
                    <form className={classes.form} onSubmit={handleSubmit(handleSubmitData)} >
                        <TextField 
                            {...register('name')}
                            required
                            label='nome'
                            // error
                         />
                         {errors.name?.message}
                        <TextField
                            {...register('email')}
                            required
                            // error
                            label='e-mail'
                            type='email'
                        />
                        <TextField
                            {...register('password')}
                            required
                            // error
                            label='senha'
                            type='password'
                        />
                        <TextField
                            {...register('confirmPassword')}
                            required
                            // error
                            label='confirmar senha'
                            type='password'
                        />
                        <Link to='/login'>
                        <Button
                            type='subimit'
                            className= {classes.button}
                            variant="contained"
                            color="primary"
                        >
                            Registrar
                        </Button>
                        </Link>
                    </form>
                </Paper>
        </Grid>
    )
}